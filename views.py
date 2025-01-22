from django.shortcuts import render

from models import Product

def product_list(request):
    products=Product.object.all()
    return render(request, 'store/product_list.html',{'products':products})
