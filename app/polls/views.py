from multiprocessing import context
from django.shortcuts import render
from .models import Gallery
from django.core.paginator import Paginator

def index(request):
    img_gall = Gallery.objects.all()

    paginator = Paginator(img_gall, 2)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)


    return render(request, 'index.html', 
    {
        'img_gall': img_gall,
        'page_obj':page_obj,
     })

def hall(request):
    return render(request, 'hall.html')