let lista = [];

for (let i = 0; i < 50; i++) {
    lista.push(Math.floor(Math.random() * 101));
}

function ordenarLista(lista) {
    lista.sort((a, b) => a - b);
    return lista;
}
console.log(ordenarLista(lista));