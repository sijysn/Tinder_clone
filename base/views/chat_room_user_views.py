from django.shortcuts import render
from django.contrib.auth.hashers import make_password

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status

from base.models import User, Reaction, ChatRoom, ChatRoomUser, Message
from base.serializers import ChatRoomUserSerializer

# Create your views here.


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def registerChatRoomUser(request):
  data = request.data
  from_user = User.objects.get(id=data['fromUserId']) 
  to_user = User.objects.get(id=data['toUserId'])
  new_chat_room_users = []


  try:
    reaction = Reaction.objects.get(from_user_id=from_user, to_user_id=to_user)

    if reaction.status == "L":
      chat_room = ChatRoom.objects.create()

      chat_room_user1 = ChatRoomUser.objects.create(
        chat_room_id=chat_room,
        user_id=from_user,
      )
      new_chat_room_users.append(chat_room_user1)

      chat_room_user2 = ChatRoomUser.objects.create(
        chat_room_id=chat_room,
        user_id=to_user,
      )
      new_chat_room_users.append(chat_room_user2)

      serializer = ChatRoomUserSerializer(new_chat_room_users, many=True)
      return Response(serializer.data)

    else:
      return Response([])

  except:
    return Response([])