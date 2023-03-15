let contadorIntegrantes = 0;
let listafamiliares = [];
let btn =document.querySelector("#addFam");
let validante = 0;

btn.addEventListener("click", function(event){
    event.preventDefault();
    let input_nombre = document.querySelector("#Nombre").value;
    let input_apellido = document.querySelector("#Apellido").value;
    let input_parentesco = document.querySelector("#Parentesco").value;
    let personaRepetida = listafamiliares.find(function(persona){
        return persona.nombre == input_nombre && persona.apellido == input_apellido;});
    if (personaRepetida) {
        alert("Ya existe un integrante con ese nombre y apellido");
        return;
    }
    else if(input_nombre== "" || input_apellido== "" || input_parentesco== ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else{
        event.preventDefault();
        listafamiliares.push({
            nombre: input_nombre,
            apellido: input_apellido,
            parentesco: input_parentesco});
        updateTable(listafamiliares);
        
    }
});
function updateTable(arreglo){
    document.querySelector("tbody").innerHTML = "";
    console.log(arreglo);
    arreglo.forEach((element,index) => {
        document.querySelector("tbody").innerHTML += `
        <tr>
            <td>${element.nombre}</td>
            <td>${element.apellido}</td>
            <td>${element.parentesco}</td>
            <td><span class="material-symbols-outlined" onclick="eliminar(${index})">
            delete
            </span></td>
        </tr>
        `
    });
}

function eliminar(index){
    listafamiliares.splice(index, 1);
    updateTable(listafamiliares);
}

function enviarFormulario() {
    // validacion de Edad
    let edad = document.querySelector(".edad").value;
    if (edad == "") {
        alert("Debe ingresar la edad");
        return false;
    }
    else if (edad < 18) {
        alert("La edad debe ser mayor a 18 años");
        return false;
    }
    else{
        validante++
    }
    
    // validacion de RUT
    validarRUT();
    // validacion de Ahorro
    validarAhorro();
    // validacion de calificacion socioeconomica
    validarCalEcon();
    // validacion de integrantes familiares
    validarFamiliares();
    // validacion de ingreso nucleo familiar
    validarNucleo();
    // validacion de programa
    validarPrograma();
    console.log(validante);
    if (validante == 7) {
        alert("Postulaste al beneficio, formulario enviado");
    }
    validante = 0;

}
let rutSverificador = 0;
let digitoVerificador = 0;
function validarRUT(){
    let rut = document.querySelector(".rut").value;
    let cajarut = document.getElementById("rut");
    rutSverificador = rut.substring(0,rut.length-2); //Aqui saco el verificador del rut
    digitoVerificador = rut.substring(rut.length-1);
    if (!rutSverificador.match(/^[0-9]{8}$/) && !rutSverificador.match(/^[0-9]{7}$/)) {
        alert("El rut debe tener números de 8 dígitos o 7 dígitos");
        cajarut.focus();
        return false;
    }
    else if(!digitoVerificador.match(/^[0-9]{1}$/) && digitoVerificador!="K"){
        alert("El digito verficador debe ser numero o K");
        cajarut.focus();
        return false;
    }
    else if (isNaN(digitoVerificador) && digitoVerificador=="") {
        alert("Por favor ingrese un digito verificador");
        cajarut.focus();
        return false;
    }
    else{
        validante++
    }
    // algoritmoVerificador();
}
let valorUF=35590;
let minimoUF=35590*4;
function validarAhorro(){
    let ahorro = document.getElementById("ahorro").value;
    let cajaahorro = document.getElementById("ahorro");
    let ahorroUF = ahorro/valorUF;
    if (isNaN(ahorro)) {
        alert("El campo ahorro acepta números solamente");
        cajaahorro.focus();
        return false;
    }
    else if(ahorro==0){
        alert("Por favor ingrese un ahorro");
        cajaahorro.focus();
        return false;
    }
    else if(ahorroUF<4){
        alert("Debes tener un minimo de 4UF de ahorro");
        return false;
    }
    else{
        validante++
    }
    

}
function validarCalEcon(){
    let calificacion = document.getElementById("calificacion").value;
    let cajacalificacion = document.getElementById("calificacion");
    calificacion=Number(calificacion);
    if (calificacion<70){
        alert ("No calificas según el Registro Social de Hogares");
        cajacalificacion.focus();
        return false;
    }
    else{
        validante++
    }
}

function validarFamiliares(){
    if(listafamiliares.length==0){
        alert("Por favor seleccione integrantes familiares");
        return false;
    }
    else{
        validante++
    }
}
function validarNucleo(){
    let ingresoNucleo = document.getElementById("ingresoNucleo").value;
    let cajaingresoNucleo = document.getElementById("ingresoNucleo");
    let ingresoNucleoUF = ingresoNucleo/valorUF;
    if(ingresoNucleo==""){
        alert("Por favor ingrese un ingreso nucleo");
        cajaingresoNucleo.focus();
        return false;
    }
    else if(ingresoNucleoUF<7 || ingresoNucleoUF>25){
        alert("El monto total de ingresos del núcleo familiar esta fuera del rango requerido");
        cajaingresoNucleo.focus();
        return false;
    }
    else{
        validante++
    }
}
function checkboxSolo(check){
    let checkbox = document.getElementsByName("opcion");
    for (let i = 0; i < checkbox.length; i++) {
        if(checkbox[i] !== check){
            checkbox[i].checked = false;
        }
    }
}
function validarPrograma(){
    let checkSI = document.getElementById("PropSI");
    let checkNO = document.getElementById("PropNO");
    if((checkSI.checked = false) && (checkNO.checked = false)){
        alert("Por favor seleccione una alterniva en el ultimo item");
        return false;
    }
    else if(checkSI.checked){
        alert("No puedes optar a este beneficio por ser propetario/beneficiario de un programa habitacional del MINVU");
        return false;
    }
    else if(checkNO.checked){
        validante++
        return true;
    }

}
