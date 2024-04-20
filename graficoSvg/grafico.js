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
var anchoDelLienzo = 500;
var cantidadDeSeparacion = Math.round(anchoDelLienzo / (contador.length + 1));
var svgNS = "http://www.w3.org/2000/svg";
var rectanguloEnX = 80;
var anchoDelRectangulo = anchoDelLienzo / (contador.length + 8);

// Creación y configuración de la línea horizontal
var linea = document.createElementNS(svgNS, "line");
linea.setAttribute("x1", "50");
linea.setAttribute("y1", "550");
linea.setAttribute("x2", rectanguloEnX + cantidadDeSeparacion * contador.length - cantidadDeSeparacion / 2);
linea.setAttribute("y2", "550");
linea.setAttribute("stroke", "black");
linea.setAttribute("stroke-width", "2");

// Agregando la línea al contenedor SVG
var svgContainer = document.getElementById("svgContainer");
svgContainer.appendChild(linea);

svgContainer.setAttribute("width", anchoDelLienzo);

// Dibujando los rectángulos y etiquetas
for (var i = 0; i < contador.length; i++) {
    var rectanguloEnY = 550 - (contador[i][1] * 100);
    var largoDelRectangulo = 550 - rectanguloEnY;
    
    var rect = document.createElementNS(svgNS, "rect");
    var letra = document.createElementNS(svgNS, "text");

    rect.setAttribute("x", rectanguloEnX);
    rect.setAttribute("y", rectanguloEnY);
    rect.setAttribute("width", anchoDelRectangulo);
    rect.setAttribute("height", largoDelRectangulo);
    rect.setAttribute("fill", "blue");

    letra.setAttribute("x", rectanguloEnX + 20);
    letra.setAttribute("y", 585);
    letra.setAttribute("font-size", 20);
    letra.setAttribute("font-family", "arial");

    var texto = document.createTextNode(contador[i][0]);

    rectanguloEnX = rectanguloEnX + cantidadDeSeparacion;

    svgContainer.appendChild(rect);
    letra.appendChild(texto);
    svgContainer.appendChild(letra);
}
