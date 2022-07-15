from multiprocessing import context
from django.http import HttpResponse
from django.shortcuts import render
from .models import Gallery

def index(request):
    img_gall = Gallery.objects.all()
    """  for i in img_gall:
        if request.POST.get():
            img = img_gall[i:i+2]
        else:
            break """
    img = img_gall[:2]
    return render(request, 'index.html', 
    {
        'img_gall': img_gall,
        'img':img,
     })

def hall(request):
    return render(request, 'hall.html')