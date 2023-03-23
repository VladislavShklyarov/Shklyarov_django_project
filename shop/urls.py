from django.urls import path, include


from . import views
urlpatterns = [
    path('', views.shop_main, name='shop_main'),
    ]
