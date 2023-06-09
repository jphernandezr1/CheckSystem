# Generated by Django 4.2.2 on 2023-06-07 00:24

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Table',
            fields=[
                ('id', models.UUIDField(auto_created=True, primary_key=True, serialize=False)),
                ('num_mesa', models.IntegerField()),
                ('Total_cuenta', models.FloatField(default=0.0)),
                ('Total_tip', models.FloatField(default=0.0)),
                ('Total_paid', models.FloatField(default=0.0)),
                ('fecha', models.DateTimeField(default=datetime.date.today)),
                ('active', models.BooleanField(default=True)),
            ],
            options={
                'db_table': 'table',
            },
        ),
    ]
