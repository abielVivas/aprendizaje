def busquedaLineal(lista, numABuscar):
    encontrado = False
    for indice, numero in enumerate(lista):
        if numero == numABuscar:
            print(f'El número {numABuscar} está en el índice {indice}')
            encontrado = True
    
    if not encontrado:
        print(f'El número {numABuscar} no está en la lista')

busquedaLineal([1,76,8,35,556,65,72,25,945,120], 120)