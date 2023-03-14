function tablaMultiplicar(numero){
    if (Number.isInteger(numero)&& numero > 0) {
        let tabla=[{multiplo:"",por:"",resultado:""}];
        for (let i = 1; i <= 12; i++) {
            tabla.push({multiplo:i,por:numero,resultado:i*numero});
        }
        tabla.splice(0,1);
        console.table(tabla);
    }else{
        console.log("Ingrese solo números enteros y mayores a cero");
    }
}
tablaMultiplicar(5);
tablaMultiplicar(10);
tablaMultiplicar(-2);