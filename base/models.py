from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
  GENDER_IDENTITY_CHOICES = [
    ("Male", "Male"),
    ("Female", "Female"),
    ("Others", "Others"),
  ]
  SEXUAL_PREFERENCE_CHOICES = [
    ("Male", "Male"),
    ("Female", "Female"),
    ("Others", "Others"),
    ("All", "All"),
  ]
  image = models.ImageField(null=True, blank=True, default="/unknown.png")
  birth_date = models.DateField(null=True, blank=True)
  gender_identity = models.CharField(max_length=30, choices=GENDER_IDENTITY_CHOICES, default="Male", null=True, blank=True)
  sexual_preference = models.CharField(max_length=30, choices=SEXUAL_PREFERENCE_CHOICES, default="All", null=True, blank=True)
  profession = models.CharField(max_length=30, null=True, blank=True)
  self_introduction = models.TextField(null=True, blank=True)
  
  def __str__(self):
    return str(self.username)


class Reaction(models.Model):
  LIKE = "L"
  NOPE = "N"
  STATUS_CHOICES = [
    (LIKE, "Like"),
    (NOPE, "Nope")
  ]
  from_user_id = models.ForeignKey(User, on_delete=models.SET_NULL, related_name="from_user", null=True)
  to_user_id = models.ForeignKey(User, on_delete=models.SET_NULL, related_name="to_user", null=True)
  status = models.CharField(max_length=1, choices=STATUS_CHOICES, null=True, blank=True)

  def __str__(self):
    return str(self.from_user_id)


class ChatRoom(models.Model):
  matched_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return str(self.id)


class ChatRoomUser(models.Model):
  chat_room_id = models.ForeignKey(ChatRoom, on_delete=models.CASCADE)
  user_id = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self):
    return str(self.id)


class Message(models.Model):
  chat_room_id = models.ForeignKey(ChatRoom, on_delete=models.CASCADE)
  user_id = models.ForeignKey(User, on_delete=models.CASCADE)
  text = models.TextField(null=True, blank=True)
  good = models.BooleanField(default=False)
  read = models.BooleanField(default=False)
  sent_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return str(self.text)


