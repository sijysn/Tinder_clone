from django.urls import path

from rest_framework_simplejwt.views import TokenObtainPairView

from base.views import user_views as views

urlpatterns = [
  path('', views.getUsers, name="users"),

  path('login/', views.MyTokenObtainPairView.as_view(), name="token_obtain_pair"),

  path('register/', views.registerUser, name="register"),

  path('profile/', views.getUserProfile, name="users-profile"),
  path('profile/update/', views.updateUserProfile, name="users-profile-update"),
  path('profile/image/upload/', views.uploadImage, name="image-update"),

  path('details/update/', views.updateUserDetails, name="users-details-update"),

  path('cards/<int:user_id>/', views.getCards, name="cards"),
  path('cards/id/<int:user_id>/', views.getCardsById, name="cards-by-id"),

  path('chatuser/<int:user_id>/<int:chat_room_id>/', views.getChatUser, name="chat-user"),

  path('newmatches/<int:user_id>/', views.getNewMatchedUsers, name="new-matches"),

  path('likes/<int:user_id>/', views.getLikes, name="likes"),
]