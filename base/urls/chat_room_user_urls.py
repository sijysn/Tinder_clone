from django.urls import path

from rest_framework_simplejwt.views import TokenObtainPairView

from base.views import chat_room_user_views as views

urlpatterns = [
  path('register/', views.registerChatRoomUser, name="chat-room-user-register"),
]