//se definen las medidas del ancho del grafico
var anchoDelLienzo = prompt("escoje el tamaño del grafico ( se recomienda desde 300 hata 600 )");//se hace un prompt para que el usuario escoja el ancho del grafico
var altoDelLienzo = anchoDelLienzo;//se hace que el alto sea igual que el ancho

//aqui se implementa la medida al lienzo
var svgContainer = document.getElementById("svgContainer");
svgContainer.setAttribute("width", anchoDelLienzo);
svgContainer.setAttribute("height", altoDelLienzo);

// Definición de la función svg para contar la repetición de letras
function svg(array) {
    //variable que contiene las cantidades de las letras
    var contador = [
        ["A", 0],
        ["B", 0],
        ["C", 0],
        ["D", 0],
        ["E", 0],
        ["F", 0]
    ];
    //este es el for que va a contar las repeticiones
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < contador.length; j++) {
            if (array[i] == contador[j][0]) {
                contador[j][1]++;
            }
        }
    }
    return contador;
}
// Llamada a la función svg con un arreglo de letras
var contador = svg(prompt("escoje las letras"));

//este url es el tipo de dibujo
var svgNS = "http://www.w3.org/2000/svg";

// Creación y configuración de la línea horizontal
var linea = document.createElementNS(svgNS, "line");
linea.setAttribute("x1", anchoDelLienzo * 0.1);
linea.setAttribute("y1", altoDelLienzo * 0.9);
linea.setAttribute("x2", anchoDelLienzo * 0.9);
linea.setAttribute("y2", altoDelLienzo * 0.9);
linea.setAttribute("stroke", "black");
linea.setAttribute("stroke-width", "2");

// Creación y configuración de la línea vertical
var linea2 = document.createElementNS(svgNS, "line");
linea2.setAttribute("x1", anchoDelLienzo * 0.1);
linea2.setAttribute("y1", altoDelLienzo * 0.1); 
linea2.setAttribute("x2", anchoDelLienzo * 0.1);
linea2.setAttribute("y2", altoDelLienzo * 0.9); 
linea2.setAttribute("stroke", "black");
linea2.setAttribute("stroke-width", "2");

// se aplican las lineas 
svgContainer.appendChild(linea);
svgContainer.appendChild(linea2);

//este es el tamano de la separacion de los numeros de izquierda
var separacionDeLosNumerosIzquierdos = altoDelLienzo * 0.2;

//se definen las coordenadas de las barras en X
var cantidadDeSeparacionEntreBarras = Math.round(anchoDelLienzo / (contador.length + 2));
var anchoDelRectangulo = anchoDelLienzo / (contador.length + 9);
var rectanguloEnX = anchoDelLienzo * 0.15;

//estos son los numeros que aparecen en la izquierda
var numerosLaterales = [5,4,3,2,1];

// Dibujando los rectángulos y etiquetas
for (var i = 0; i < contador.length; i++) {
    //estas son las coordenadas de las barras en Y
    //se definen dentro del for porque la altura depende de las repeticiones de las letras 
    var rectanguloEnY = (altoDelLienzo) - (contador[i][1] * (altoDelLienzo / 6));
    var largoDelRectangulo = (altoDelLienzo *0.9) - rectanguloEnY;
    
    //aqui se crean los elementos
    var rect = document.createElementNS(svgNS, "rect");
    var letra = document.createElementNS(svgNS, "text");
    var numeros = document.createElementNS(svgNS, "text");
    var texto = document.createTextNode(contador[i][0]);
    
    //aqui se modifican las barras
    rect.setAttribute("x", rectanguloEnX);
    rect.setAttribute("y", rectanguloEnY);
    rect.setAttribute("width", anchoDelRectangulo);
    rect.setAttribute("height", largoDelRectangulo);
    rect.setAttribute("fill", "blue");

    //aqui se modifican las letras de abajo
    letra.setAttribute("x", rectanguloEnX + (anchoDelRectangulo / 3));
    letra.setAttribute("y", altoDelLienzo * 0.95);
    letra.setAttribute("font-size", (anchoDelRectangulo / 2));
    letra.setAttribute("font-family", "arial");
    
    //aqui se modifican los numeros de la izquierda
    numeros.setAttribute("x", anchoDelLienzo * 0.05);
    numeros.setAttribute("y", separacionDeLosNumerosIzquierdos);
    numeros.setAttribute("font-size", (anchoDelRectangulo / 2));
    numeros.setAttribute("font-family", "arial");
    numeros.textContent = numerosLaterales[i];

    separacionDeLosNumerosIzquierdos = separacionDeLosNumerosIzquierdos + (altoDelLienzo / contador.length);

    //se aplican los dibujos
    svgContainer.appendChild(rect);
    letra.appendChild(texto);
    svgContainer.appendChild(letra);
    svgContainer.appendChild(numeros);

    //se aumentan las coordenadas de las barra en X
    rectanguloEnX = rectanguloEnX + cantidadDeSeparacionEntreBarras;
    
}