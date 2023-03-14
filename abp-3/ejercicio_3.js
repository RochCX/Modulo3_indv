function tenisSet(jugadorA,jugadorB) {
    if (jugadorA ===6 && jugadorA-jugadorB >=2){
        return "Jugador A ha ganado";
    }
    else if (jugadorB ===6 && jugadorB-jugadorA >=2){
        return "Jugador B ha ganado";
    }
    else if (jugadorA ===7 && (jugadorB===5 || jugadorB===6)){
        return "Jugador A ha ganado";
    }
    else if (jugadorB ===7 && (jugadorA===5 || jugadorA===6)){
        return "Jugador B ha ganado";
    }
    else if ((jugadorA ===6 && jugadorA-jugadorB >=1)||(jugadorB ===6 && jugadorB-jugadorA >=1)){
        return "El partido no ha terminado";
    }
    else if ((jugadorA<6 && jugadorB<6)||(jugadorA===6 && jugadorB===6)){
        return "El partido no ha terminado";
    }
    else{
        return "Resultado inválido";
    }
}

let partido1A = 5;
let partido1B = 6;
console.log(tenisSet(partido1A,partido1B));

let partido2A = 7;
let partido2B = 5;
console.log(tenisSet(partido2A,partido2B));

let partido3A = 6;
let partido3B = 7;
console.log(tenisSet(partido3A,partido3B));

let partido4A = 5;
let partido4B = 6;
console.log(tenisSet(partido4A,partido4B));

let partido5A = 7;
let partido5B = 7;
console.log(tenisSet(partido5A,partido5B));

let partido6A = 1;
let partido6B = 8;
console.log(tenisSet(partido6A,partido6B));

let partido7A = 5;
let partido7B = 5;
console.log(tenisSet(partido7A,partido7B));

let partido8A = 6;
let partido8B = 6;
console.log(tenisSet(partido8A,partido8B));

let partido9A = 6;
let partido9B = 3;
console.log(tenisSet(partido9A,partido9B));

let partido10A = 1;
let partido10B = 6;
console.log(tenisSet(partido10A,partido10B));