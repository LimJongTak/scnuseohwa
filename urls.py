
from flask import render_template
from . import views

urlpatterns = [
    path('booth/<str:booth_id>/', views.booth_detail, name='booth_detail'),
]
