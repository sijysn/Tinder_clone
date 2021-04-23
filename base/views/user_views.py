from django.shortcuts import render
from django.contrib.auth.hashers import make_password

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status

from base.models import User, Reaction, ChatRoom, ChatRoomUser, Message
from base.serializers import UserSerializer, UserProfileSerializer, UserProfileSerializerWithToken, CardSerializer

# Create your views here.


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
  users = User.objects.all()
  serializer = UserSerializer(users, many=True)
  return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
  user = request.user
  serializer = UserSerializer(user, many=False)
  return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
  user = request.user
  serializer = UserProfileSerializerWithToken(user, many=False)

  data = request.data
  user.first_name = data['name']
  user.user_name = data['email']
  user.email = data['email']
  if data['password'] != '':
    user.password = make_password(data['password'])

  user.save()

  return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserDetails(request):
  user = request.user
  serializer = UserSerializer(user, many=False)

  data = request.data
  user.profession = data['profession']
  user.self_introduction = data['selfIntroduction']
  user.gender_identity = data['genderIdentity']
  user.sexual_preference = data['sexualPreference']
  
  user.save()

  return Response(serializer.data)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserProfileSerializerWithToken(self.user).data

        for k, v in serializer.items():
          data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def registerUser(request):
  data = request.data

  try:
    user = User.objects.create(
      first_name=data['name'],
      username=data['email'],
      email=data['email'],
      password=make_password(data['password']),
      gender_identity=data['genderIdentity'],
      birth_date=data['birthDate'],
      image='https://res.cloudinary.com/dfw3mlaic/image/upload/v1/images/unknown_ffqtxf',
    )
    serializer = UserProfileSerializerWithToken(user, many=False)
    return Response(serializer.data)
  except:
    message = {"detail": "User with this email already exists"}
    return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def uploadImage(request):
  data = request.data

  user_id = data['user_id']
  user = User.objects.get(id=user_id)

  user.image = request.FILES.get('image')
  user.save()

  serializer = UserSerializer(user, many=False)
  return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNewMatchedUsers(request, user_id):
  target_users = []

  # Fetch the user
  user = User.objects.get(id=user_id)

  # Look for chat room ids the user joins
  chat_room_users_by_user_id = ChatRoomUser.objects.filter(user_id=user)

  # Look for users who join the same rooms as the user
  for chat_room_user in chat_room_users_by_user_id:
    chat_room = ChatRoom.objects.get(id=str(chat_room_user.chat_room_id))

    # If already sent a message, not include
    messages = Message.objects.filter(chat_room_id=chat_room)

    if len(messages) == 0:
      chat_room_users_by_chat_room_id = ChatRoomUser.objects.filter(chat_room_id=chat_room)

      # Pick up users except user
      for chat_room_user in chat_room_users_by_chat_room_id:
        if str(chat_room_user.user_id.id) != str(user_id):
          target_users.append(User.objects.get(is_active="True", id=str(chat_room_user.user_id.id)))

  serializer = UserSerializer(target_users, many=True)
  return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getChatUser(request, user_id, chat_room_id):

  chat_room = ChatRoom.objects.get(id=chat_room_id)
  chat_room_users = ChatRoomUser.objects.filter(chat_room_id=chat_room)

  for chat_room_user in chat_room_users:
    if str(chat_room_user.user_id.id) != str(user_id):
      target_user = User.objects.get(id=str(chat_room_user.user_id.id))

  serializer = UserSerializer(target_user, many=False)
  return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCards(request, user_id):
  user = User.objects.get(id=user_id)
  reactions = Reaction.objects.filter(from_user_id=user)

  # Fetch users who were already swiped
  swipedCards = []
  for reaction in reactions:
    swipedCards.append(reaction.to_user_id)

  # Fetch all users
  if user.sexual_preference == 'All':
    allCards = User.objects.filter(is_active="True")
  else:
    allCards = User.objects.filter(is_active="True", gender_identity=user.sexual_preference)

  # unswiped users = all users - ( swiped users + self )
  unswipedCards = []
  for card in allCards:
    if card.id != user_id and not card in swipedCards:
      unswipedCards.append(card)

  serializer = CardSerializer(unswipedCards, many=True)
  return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCardsById(request, user_id):
  user = User.objects.get(is_active="True", id=user_id)
  serializer = CardSerializer(user, many=False)
  return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getLikes(request, user_id):
  # Get reactions to the user
  user = User.objects.get(id=user_id)
  reactions_to_user = Reaction.objects.filter(to_user_id=user)

  # Fetch ids of users who already liked the user
  liked_users = []

  for reaction in reactions_to_user:
    # If reaction to the user is "Like"...
    if (reaction.status == "L"):
      try:
        # If reaction to the other user is "Nope", include him
        reaction_from_user = Reaction.objects.get(from_user_id=user, to_user_id=reaction.from_user_id)
        if reaction_from_user.status == "N":
          liked_users.append(reaction.from_user_id)

      except:
        # If reaction to the other user does not exist, include him
        liked_users.append(reaction.from_user_id)

  serializer = UserSerializer(liked_users, many=True)
  return Response(serializer.data)