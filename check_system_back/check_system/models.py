from django.db import models
from djmoney.models.fields import MoneyField

class table(models.Model):
    id=models.UUIDField()
    num_mesa=models.IntegerField()
    Total_cuenta=MoneyField()
    Total_tip=MoneyField()
    Total_paid=MoneyField()
    fecha=models.DateTimeField()
    active=models.BooleanField()

    def __str__(self):
        return '{}'.format(self.name)