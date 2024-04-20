// Definición de la función svg para contar la repetición de letras
function svg(array) {
    var contador = [
        ["A", 0],
        ["B", 0],
        ["C", 0],
        ["D", 0],
        ["E", 0],
        ["F", 0]
    ];

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
var contador = svg(["B", "A", "A", "A", "B", "C", "D", "C", "C", "B", "B", "A", "A", "E", "E", "F"]);

console.log(contador);







// Configuración inicial para el gráfico SVG
var anchoDelLienzo = 300;
var altoDelLienzo = anchoDelLienzo
var cantidadDeSeparacion = Math.round(anchoDelLienzo / (contador.length + 2));
var rectanguloEnX = anchoDelLienzo * 0.15
var anchoDelRectangulo = anchoDelLienzo / (contador.length + 9);
var svgNS = "http://www.w3.org/2000/svg";

// Creación y configuración de la línea horizontal
var linea = document.createElementNS(svgNS, "line");
linea.setAttribute("x1", anchoDelLienzo * 0.1);
linea.setAttribute("y1", altoDelLienzo * 0.9);
linea.setAttribute("x2", anchoDelLienzo * 0.9);
linea.setAttribute("y2", altoDelLienzo * 0.9);
linea.setAttribute("stroke", "black");
linea.setAttribute("stroke-width", "2");



var linea2 = document.createElementNS(svgNS, "line");
linea2.setAttribute("x1", anchoDelLienzo * 0.1);
linea2.setAttribute("y1", altoDelLienzo * 0.1); // Cambiada a la misma posición vertical
linea2.setAttribute("x2", anchoDelLienzo * 0.1);
linea2.setAttribute("y2", altoDelLienzo * 0.9); // Cambiada a la misma posición vertical
linea2.setAttribute("stroke", "black");
linea2.setAttribute("stroke-width", "2");


// Agregando la línea al contenedor SVG
var svgContainer = document.getElementById("svgContainer");
svgContainer.appendChild(linea);
svgContainer.appendChild(linea2);


svgContainer.setAttribute("width", anchoDelLienzo);
svgContainer.setAttribute("height", altoDelLienzo);


// Dibujando los rectángulos y etiquetas
for (var i = 0; i < contador.length; i++) {
    var rectanguloEnY = (altoDelLienzo * 0.9) - (contador[i][1] * 100);
    var largoDelRectangulo = (altoDelLienzo *0.9) - rectanguloEnY;
    
    var rect = document.createElementNS(svgNS, "rect");
    var letra = document.createElementNS(svgNS, "text");

    rect.setAttribute("x", rectanguloEnX);
    rect.setAttribute("y", rectanguloEnY);
    rect.setAttribute("width", anchoDelRectangulo);
    rect.setAttribute("height", largoDelRectangulo);
    rect.setAttribute("fill", "blue");

    letra.setAttribute("x", rectanguloEnX + (anchoDelRectangulo / 3));
    letra.setAttribute("y", altoDelLienzo * 0.95);
    letra.setAttribute("font-size", (anchoDelRectangulo / 2));
    letra.setAttribute("font-family", "arial");

    var texto = document.createTextNode(contador[i][0]);

    rectanguloEnX = rectanguloEnX + cantidadDeSeparacion;

    svgContainer.appendChild(rect);
    letra.appendChild(texto);
    svgContainer.appendChild(letra);
}
