let arreglo = [];

prueba1=sumatoria(5);
console.log(prueba1);
prueba2=sumatoria(10);
console.log(prueba2);
prueba3=sumatoria(0);
console.log(prueba3);
prueba4=sumatoria(-5);
console.log(prueba4);
prueba5=sumatoria(7.5);
console.log(prueba5);
prueba6=sumatoria(100);
console.log(prueba6);

function sumatoria(largo) {
        if ((largo < 100 && largo >= 0) && Number.isInteger(largo)) {
            arreglo.length = largo;
            sum=0;
            for (let i = 1; i < largo+1; i++) {
                arreglo[i] = i;
                sum += i;
            }
        return"la suma es: " + sum;
        }
        else{
            return "solo puede ingresar enteros y menor a 100";
        }
}