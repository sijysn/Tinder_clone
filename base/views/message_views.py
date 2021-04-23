from django.shortcuts import render
from django.contrib.auth.hashers import make_password

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status

from base.models import User, Reaction, ChatRoom, ChatRoomUser, Message
from base.serializers import MessageSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMessages(request, user1_id, user2_id):

  # Fetch both of users
  user1 = User.objects.get(id=user1_id)
  user2 = User.objects.get(id=user2_id)

  # Fetch both of users
  chat_room_users_by_user1_id = ChatRoomUser.objects.filter(user_id=user1)
  chat_room_users_by_user2_id = ChatRoomUser.objects.filter(user_id=user2)

  # Look for chat room both of users join 
  for chat_room_user_by_user1_id in chat_room_users_by_user1_id:
    for chat_room_user_by_user2_id in chat_room_users_by_user2_id:
      if chat_room_user_by_user1_id.chat_room_id.id == chat_room_user_by_user2_id.chat_room_id.id:
        target_chat_room_id = chat_room_user_by_user1_id.chat_room_id.id
        break

  # Fetch messages
  if target_chat_room_id:
    chat_room = ChatRoom.objects.get(id=target_chat_room_id)
    messages = Message.objects.filter(chat_room_id=chat_room)
    serializer = MessageSerializer(messages, many=True)
    return Response(sorted(serializer.data, key=lambda x: x['sent_at']))

  else:
    return Response([])

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getLatestMessages(request, user_id):
  target_messages = []

  # Fetch the user
  user = User.objects.get(id=user_id)

  # Look for chat room ids the user joins
  chat_room_users_by_user_id = ChatRoomUser.objects.filter(user_id=user)

  # Look for users who join the same rooms as the user
  for chat_room_user in chat_room_users_by_user_id:
    chat_room = ChatRoom.objects.get(id=str(chat_room_user.chat_room_id))

    # If haven't sent any messages yet, not include
    messages = Message.objects.filter(chat_room_id=chat_room)

    if len(messages) > 0:
      latest_message = Message.objects.filter(chat_room_id=chat_room).latest("sent_at")
      target_messages.append(latest_message)

  serializer = MessageSerializer(target_messages, many=True)

  # Sort messages by time when message was sent in descending order
  return Response(sorted(serializer.data, key=lambda x: x['sent_at'], reverse=True))

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def sendMessage(request):

  data = request.data
  from_user_id = data["fromUserId"]
  to_user_id = data["toUserId"]
  text = data['text']

  # Fetch both of users
  from_user = User.objects.get(id=from_user_id)
  to_user = User.objects.get(id=to_user_id)

  from_chat_room_users = ChatRoomUser.objects.filter(user_id=from_user)
  to_chat_room_users = ChatRoomUser.objects.filter(user_id=to_user)

  # Look for chat room both of users join 
  for from_chat_room_user in from_chat_room_users:
    for to_chat_room_user in to_chat_room_users:
      if from_chat_room_user.chat_room_id.id == to_chat_room_user.chat_room_id.id:
        target_chat_room_id = from_chat_room_user.chat_room_id.id
        break

  if target_chat_room_id:
    chat_room = ChatRoom.objects.get(id=target_chat_room_id)

    # Create a new message
    Message.objects.create(
      chat_room_id = chat_room, 
      user_id = from_user,
      text = text,
    )

    # Fetch all messages
    messages = Message.objects.filter(chat_room_id=chat_room)
    serializer = MessageSerializer(messages, many=True)
    return Response(serializer.data)

  else:
    return Response([])

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateMessageGood(request, message_id):
  message = Message.objects.get(id=message_id)

  if message.good == True:
    message.good = False
  else:
    message.good = True

  message.save()

  serializer = MessageSerializer(message, many=False)
  return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def readMessages(request):
  import json
  data = request.data
  from_user_id = data['fromUserId']
  user = User.objects.get(id=from_user_id)
  messages =  json.loads(data['messages'])

  read_messages = []
  for message in messages:
      message_id = message['id']
      message = Message.objects.get(id=message_id)
      if message.user_id != user:
        message.read = True
        message.save()
        read_messages.append(message)

  serializer = MessageSerializer(read_messages, many=True)
  return Response(serializer.data)