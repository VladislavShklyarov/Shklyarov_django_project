from django.shortcuts import render

def shop_main(request):
    return render(request, 'shop/shop_main.html')