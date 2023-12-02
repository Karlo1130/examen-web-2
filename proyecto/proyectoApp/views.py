from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, "index.html")

def login(request):
    return render(request, "login.html")

def signUp(request):

    if request.method == "GET":
        print ("enviando formulario")
    else:
        print(request.POST)
    return render(request, "signUp.html")

def buscar(request):
    nombre = "Nombre: %r" %request.GET["Nombres"]
    return HttpResponse(nombre)