from django.db.models.signals import pre_save
from .models import User

def updateUser(sender, instance, **kwarg):
  user = instance
  if user.email != '':
    user.username = user.email
  
  if user.image == '':
    user.image = '/unknown.png'

# Before each saving User table, Call updateUser function
pre_save.connect(updateUser, sender=User)
