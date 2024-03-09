function opcionBasealtura() {
    var inputSection = document.getElementById("data-input");
    inputSection.innerHTML = `
        <div class="input-container">
            <label for="base">Base:</label>
            <input type="text" id="base" name="base">
        </div>
        <div class="input-container">
            <label for="altura">Altura:</label>
            <input type="text" id="altura" name="altura">
        </div>
        <button id="calcularBaseAltura" class="calculate-button">Calcular</button>
        <div id="resultado"></div> 
    `;

    document.getElementById("calcularBaseAltura").onclick = function () {
        CalcularBaseAltura();
    };
}

function CalcularBaseAltura() {
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultadoElement = document.getElementById("resultado");

    //Verificacion de que los datos sean válidos
    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        resultadoElement.innerText = "Error: La base y la altura deben ser números positivos mayores a cero.";
    } else {
        var area = (base * altura) / 2;
        //calculamos perimetro
        var hipotenusa = Math.sqrt(base ** 2 + altura ** 2);
        var perimetro = base + altura + hipotenusa;
        resultadoElement.innerText = "El área del triángulo con base " + base + " y altura " + altura + " es: " + area + "cm2 y su perímetro es " + perimetro;
    }
}


function opcionLados() {
    var inputSection = document.getElementById("data-input");
    inputSection.innerHTML = `
        <div class="input-container">
            <label for="ladoA">Lado A:</label>
            <input type="text" id="ladoA" name="ladoA">
        </div>
        <div class="input-container">
            <label for="ladoB">Lado B:</label>
            <input type="text" id="ladoB" name="ladoB">
        </div>
        <div class="input-container">
            <label for="ladoC">Lado C:</label>
            <input type="text" id="ladoC" name="ladoC">
        </div>
        <button id="calcularLados" class="calculate-button">Calcular</button>
        <div id="resultado"></div> 
    `;

    document.getElementById("calcularLados").onclick = function () {
        CalcularLados();
    }
}

function CalcularLados() {
    var resultadoElement = document.getElementById("resultado");
    var ladoA = parseFloat(document.getElementById("ladoA").value);
    var ladoB = parseFloat(document.getElementById("ladoB").value);
    var ladoC = parseFloat(document.getElementById("ladoC").value);

    //Verificación de que los datos sean validos
    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        var s = (ladoA + ladoB + ladoC) / 2;
        var area = Math.sqrt(s * (s - ladoA) * (s - ladoB) * (s - ladoC));
        //calculamos perimetro
        var perimetro = (ladoA + ladoB + ladoC)

        resultadoElement.innerText = ("El área del triángulo con lados " + ladoA + ", " + ladoB + " y " + ladoC + " es " + area + "cm2 y su perímetro es " + perimetro);
    } else {
        resultadoElement.innerText = ("Los lados proporcionados no forman un triángulo válido.");
    }

}

function opcionEcuacion() {
    var inputSection = document.getElementById("data-input");
    inputSection.innerHTML = `
        <label for="ecuacion">Ecuacion:</label>
        <input type="text" id="ecuacion" name="ecuacion"><br><br>
        <button onclick="calculateArea()" class="calculate-button">Calcular</button>
    `;
}

function opcionCoordenadas() {
    var inputSection = document.getElementById("data-input");
    inputSection.innerHTML = `
        <label for="coordX1">Coordenada X1:</label>
        <input type="text" id="coordX1" name="coordX1"><br><br>
        <label for="coordY1">Coordenada Y1:</label>
        <input type="text" id="coordY1" name="coordY1"><br><br>
        <label for="coordX2">Coordenada X2:</label>
        <input type="text" id="coordX2" name="coordX2"><br><br>
        <label for="coordY2">Coordenada Y2:</label>
        <input type="text" id="coordY2" name="coordY2"><br><br>
        <label for="coordX3">Coordenada X3:</label>
        <input type="text" id="coordX3" name="coordX3"><br><br>
        <label for="coordY3">Coordenada Y3:</label>
        <input type="text" id="coordY3" name="coordY3"><br><br>
        <button onclick="CalcularCoordenadas()" class="calculate-button">Calcular</button>
        <div id="resultado"></div> 
        `;
    
        document.getElementById("calcularCoordenadas").onclick = function () {
            CalcularCoordenadas();
        }
}

function CalcularCoordenadas(){
    var resultadoElement = document.getElementById("resultado");
    var coordX1 = parseFloat(document.getElementById("coordX1").value);
    var coordY1 = parseFloat(document.getElementById("coordY1").value);
    var coordX2 = parseFloat(document.getElementById("coordX2").value);
    var coordY2 = parseFloat(document.getElementById("coordY2").value);
    var coordX3 = parseFloat(document.getElementById("coordX3").value);
    var coordY3 = parseFloat(document.getElementById("coordY3").value);

    //verificar que los datos sean validos
    if (isNaN(coordX1) || isNaN(coordY1) || isNaN(coordX2) || isNaN(coordY2) || isNaN(coordX3) || isNaN(coordY3)) {
        resultadoElement.innerText = "Error: Todos los valores deben ser números.";
    }else{
    var area = 0.5 * Math.abs(coordX1 * (coordY2 - coordY3) + coordX2 * (coordY3 - coordY1) + coordX3 * (coordY1 - coordY2));
    //calculamos perímetro
    var lado1 = Math.sqrt((coordX2 - coordX1) ** 2 + (coordY2 - coordY1) ** 2);
    var lado2 = Math.sqrt((coordX3 - coordX2) ** 2 + (coordY3 - coordY2) ** 2);
    var lado3 = Math.sqrt((coordX1 - coordX3) ** 2 + (coordY1 - coordY3) ** 2);
    var perimetro = lado1 + lado2 + lado3;

    resultadoElement.innerText = "El área del triángulo con coordenadas (" + coordX1 + ", " + coordY1 + "), (" + coordX2 + ", " + coordY2 + "), (" + coordX3 + ", " + coordY3 + ") es: " + area + "cm2 y su perímetro es "+perimetro;
    }
}

function optionSelect() {
    var opcion = document.getElementById("opcion").value;
    switch (opcion) {
        case '0':
            var inputSection = document.getElementById("data-input");
            inputSection.innerHTML = ''; // Limpiar la sección de entrada
            break;
        case '1':
            opcionBasealtura();
            break;
        case '2':
            opcionLados();
            break;
        case '3':
            opcionEcuacion();
            break;
        case '4':
            opcionCoordenadas();
            break;
        default:
            break;
    }
}