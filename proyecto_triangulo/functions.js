function opcionBasealtura(){
    var inputSection = document.getElementById("data-input");
    inputSection.innerHTML = `
        <label for="ecuacion">Base:</label>
        <input type="text" id="base" name="base"><br><br>
        <label for="ecuacion">Altura:</label>
        <input type="text" id="altura" name="altura"><br><br>
        <button onclick="calculateArea()">Calcular</button>
    `;
}

function opcionLados(){
    var inputSection = document.getElementById("data-input");
    inputSection.innerHTML = `
        <label for="ladoA">Lado A:</label>
        <input type="text" id="ladoA" name="ladoA"><br><br>
        <label for="ladoB">Lado B:</label>
        <input type="text" id="ladoB" name="ladoB"><br><br>
        <label for="ladoC">Lado C:</label>
        <input type="text" id="ladoC" name="ladoC"><br><br>
        <button onclick="calculateArea()">Calcular</button>
    `;
}

function opcionEcuacion(){
    var inputSection = document.getElementById("data-input");
    inputSection.innerHTML = `
        <label for="ecuacion">Ecuacion:</label>
        <input type="text" id="ecuacion" name="ecuacion"><br><br>
        <button onclick="calculateArea()">Calcular</button>
    `;
}

function opcionCoordenadas(){
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
        <button onclick="calculateArea()">Calcular</button>
    `;
}

function optionSelect(){
    var opcion = document.getElementById("opcion").value;
    switch(opcion){
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