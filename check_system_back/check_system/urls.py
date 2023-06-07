from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('', views.tables_view, name='tables_view'),
]