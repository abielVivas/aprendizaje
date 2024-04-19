

//esta parte es la encargada de contar la repeticion de las letras
var contador = [
    [ "A", 0 ],
    [ "B", 0 ],
    [ "C", 0 ],
    [ "D", 0 ],
    [ "E", 0 ],
    [ "F", 0 ] 
  ];

  
//esta funcion va a contar la repeticion de las letras

function svg (array){
    for(var i=0; i<=array.length; i++){
        //console.log(`i es igual a ${i}`)
        for( j=0; j<contador.length; j++){
            //console.log(`j es igual a ${j}`)
            if(array[i] == contador[j][0]){
                contador[j][1]++
            }
        }
    }
}
svg(["B", "A", "A", "A", "B", "C", "D", "C", "C", "B", "B", "A", "A", "E", "E", "F"]);
console.log (contador)
//hasta esta parte voy biennnnn




var svgNS = "http://www.w3.org/2000/svg";
//var letra = document.createElementNS(svgNS, "text");

var rectanguloEnX = 80 
var anchoDelRectangulo = 50

for(i=0; i<contador.length; i++){

    //aqui estan las variables de las posiciones de los rectangulos
    var rectanguloEnY = 550 - (contador[i][1] * 100)
    console.log(rectanguloEnY)
    var largoDelRectangulo = 550 - rectanguloEnY
    //var letraEnX = 100
    //var letraEnY = 200

    var rect = document.createElementNS(svgNS, "rect");
    
    // Establecer atributos del rectángulo (coordenadas, tamaño, color, etc.)
    rect.setAttribute("x", rectanguloEnX);
    rect.setAttribute("y", rectanguloEnY);
    rect.setAttribute("width", anchoDelRectangulo);
    rect.setAttribute("height", largoDelRectangulo);
    rect.setAttribute("fill", "blue");
    // Agregar el rectángulo al documento SVG (puede ser un elemento <svg> o <g>)
    var svgContainer = document.getElementById("svgContainer"); // Suponiendo que tienes un elemento con el id "svgContainer"
    svgContainer.appendChild(rect);

    rectanguloEnX = rectanguloEnX + 100
}