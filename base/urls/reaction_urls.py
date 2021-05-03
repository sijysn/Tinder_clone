from django.urls import path

from rest_framework_simplejwt.views import TokenObtainPairView

from base.views import reaction_views as views

urlpatterns = [
  path('swipe/', views.swipeCard, name="swipe"), 
  path('<int:from_user_id>/', views.getReactions, name="reactions"),
]