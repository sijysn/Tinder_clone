from django.urls import path

from rest_framework_simplejwt.views import TokenObtainPairView

from base.views import message_views as views

urlpatterns = [
  path('send/', views.sendMessage, name="message-send"),
  path('read/', views.readMessages, name="messages-read"),
  path('latest/<int:user_id>/', views.getLatestMessages, name="message-latest"),
  path('<int:user1_id>/<int:user2_id>/', views.getMessages, name="messages"),
  path('good/update/<int:message_id>/', views.updateMessageGood, name="message-good-update"),
]