from django.shortcuts import render
from django.contrib.auth.hashers import make_password

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status

from base.models import User, Reaction, ChatRoom, ChatRoomUser, Message
from base.serializers import ReactionSerializer

# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getReactions(request, from_user_id):
  reactions = Reaction.objects.filter(from_user_id=from_user_id)
  serializer = ReactionSerializer(reactions, many=True)
  return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def swipeCard(request):
  data = request.data
  from_user_id = User.objects.get(id=data['fromUserId'])
  to_user_id = User.objects.get(id=data['toUserId'])

  try:
    reaction = Reaction.objects.create(
      from_user_id=from_user_id,
      to_user_id=to_user_id,
      status=data['status'],
    )
    serializer = ReactionSerializer(reaction, many=False)
    return Response(serializer.data)
  except:
    message = {'detail': 'This reaction has already been done' }
    return Response(message, status=status.HTTP_400_BAD_REQUEST)@api_view(['GET'])
