from django.db import models

class Table(models.Model):
    id = models.UUIDField(primary_key=True)
    num_mesa=models.IntegerField()
    Total_cuenta=models.FloatField()
    Total_tip=models.FloatField()
    Total_paid=models.FloatField()
    fecha=models.DateTimeField()
    active=models.BooleanField()

    def __str__(self):
        return '{}'.format(self.name)