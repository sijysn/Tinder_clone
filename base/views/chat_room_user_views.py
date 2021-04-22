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
  user1 = User.objects.get(id=data['user1Id']) 
  user2 = User.objects.get(id=data['user2Id'])
  new_chat_room_users = []

  chat_room = ChatRoom.objects.create()

  chat_room_user1 = ChatRoomUser.objects.create(
    chat_room_id=chat_room,
    user_id=user1,
  )
  new_chat_room_users.append(chat_room_user1)

  chat_room_user2 = ChatRoomUser.objects.create(
    chat_room_id=chat_room,
    user_id=user2,
  )
  new_chat_room_users.append(chat_room_user2)

  serializer = ChatRoomUserSerializer(new_chat_room_users, many=True)
  return Response(serializer.data)