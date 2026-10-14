from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('explore/', views.explore, name='explore'),
    path('tradition/<slug:slug>/', views.heritage_detail, name='heritage_detail'),
    path('map/', views.map_view, name='map'),
    path('stories/', views.stories_view, name='stories'),
    path('contribute/', views.contribute_view, name='contribute'),
    path('learn/', views.learn_view, name='learn'),
    path('api/search/', views.api_search, name='api_search'),
]
