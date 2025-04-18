from django.urls import path
from . import views

urlpatterns = [
    path('booth/<str:booth_id>/', views.booth_detail, name='booth_detail'),
]
