function agregar(largo) {
    let arreglo=[];
    acumulable=1;
    for (let i = 0; i < largo; i++) {
        arreglo.push(acumulable);
        acumulable= acumulable*2;
    }
    return arreglo;
}

let elemento1 = 5;
console.log(agregar(elemento1));

let elemento2 = 10;
console.log(agregar(elemento2));

let elemento3 = 15;
console.log(agregar(elemento3));