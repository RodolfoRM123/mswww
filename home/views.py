from django.shortcuts import render

# Create your views here.
def index(request):
    if request.method == 'POST':
        return render(request, 'index.html')
    else:
        return render(request, 'index.html')
