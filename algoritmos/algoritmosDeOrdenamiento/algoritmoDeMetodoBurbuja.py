lista = [3, 1, 4, 2, 5, 7, 8, 0]
i = 0
while i < len(lista) -1:  
    if lista[i] > lista[i+1]:
        contenedor = lista[i]
        lista[i] = lista[i+1]
        lista[i+1] = contenedor
        i = -1
    i = i + 1
print(lista)