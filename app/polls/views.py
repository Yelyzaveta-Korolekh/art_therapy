from multiprocessing import context
from django.http import HttpResponse
from django.shortcuts import render
from .models import Gallery

def index(request):
    img_gall = Gallery.objects.all()
    
    img = Gallery.objects.order_by('?')[:2]
    
    return render(request, 'index.html', 
    {
        'img_gall': img_gall,
        'img':img,
     })

def hall(request):
    return render(request, 'hall.html')