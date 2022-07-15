from multiprocessing import context
from pydoc_data.topics import topics
from django.http import HttpResponse
from django.shortcuts import render
from .models import Gallery
from .models import Topics

def index(request):
    img_gall = Gallery.objects.all()
    return render(request, 'index.html', 
    {
        'img_gall': img_gall,
     })

def hall(request):
    topics = Topics.objects.all()
    top = Topics.objects.filter('name')
    return render(request, 'hall.html', {'topics':topics})