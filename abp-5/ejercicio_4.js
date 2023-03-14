function contadorPares(numero){
    if((numero>10 && numero<1000)&& Number.isInteger(numero)){
        sum = 0;
        for(let i = 11;i<=numero; i++){
            if(i%2==0){
                sum = sum +i;
            }
        }
        console.log("La sumatoria total de todos los numeros pares es "+sum);
    }else{
        console.log("Ingrese solamente numeros enteros entre 11 y 999");
    }
}
test1= 20;
contadorPares(test1);
test2= 100;
contadorPares(test2);
test3 = 11;
contadorPares(test3);
test4 = 10;
contadorPares(test4);
test5 = 1;
contadorPares(test5);
test6 = 1000;
contadorPares(test6);
test7 = 999;
contadorPares(test7);
test8 = 12;
contadorPares(test8);