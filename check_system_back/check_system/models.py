import uuid
from django.db import models
from datetime import date


class Table(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    num_mesa=models.IntegerField()
    Total_cuenta=models.TextField(default="$0.0")
    Total_tip=models.TextField(default="$0.0")
    Total_paid=models.TextField(default="$0.0")
    fecha=models.DateTimeField(default=date.today)
    active=models.BooleanField(default=True)

    def __str__(self):
        return '{}'.format(self.num_mesa)
    class Meta:
        db_table = 'table'