from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

from .models import *

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'username', 'email', 'image', 'first_name', 'last_name', 'birth_date', 'gender_identity', 'sexual_preference', 'profession', 'self_introduction']

class UserProfileSerializer(serializers.ModelSerializer):
  isAdmin = serializers.SerializerMethodField(read_only=True)
  class Meta:
    model = User
    fields = ['id', 'username', 'email', 'password', 'first_name', 'isAdmin']

  def get_isAdmin(self, obj):
    return obj.is_staff

class UserProfileSerializerWithToken(UserProfileSerializer):
  token = serializers.SerializerMethodField(read_only=True)
  class Meta:
    model = User
    fields = ['id', 'username', 'email', 'password', 'first_name', 'isAdmin', 'token']

  def get_token(self, obj):
    token = RefreshToken.for_user(obj)
    return str(token.access_token)

class CardSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'image', 'first_name', 'birth_date', 'gender_identity', 'sexual_preference', 'profession', 'self_introduction']

class ReactionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Reaction
    fields = '__all__'

class ChatRoomSerializer(serializers.ModelSerializer):
  class Meta:
    model = ChatRoom
    fields = '__all__'

class ChatRoomUserSerializer(serializers.ModelSerializer):
  class Meta:
    model = ChatRoomUser
    fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
  class Meta:
    model = Message
    fields = '__all__'