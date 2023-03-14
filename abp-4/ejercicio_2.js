let arreglo = [1,3,7,56,2,10,13,5,8,1];

function encontrarMayor(arreglo){
    let mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++){
        if (arreglo[i] > mayor){
            mayor = arreglo[i];
        }
    }
    return mayor;
}
console.log(encontrarMayor(arreglo));