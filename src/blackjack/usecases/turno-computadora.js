import { deck } from "../index.js"
import { insertarCartaDeck } from "./insertar-carta-deck.js";
import { obtenerValorCarta } from "./obtener-valor-carta.js";
import {  } from "./obtener-valor-carta.js";
// import { determinarGanador } from "./determinar-ganador.js";

export let puntosComputadora = 0;
export let puntosJugador = 0;

export function turnoComputadora() {
    do{
        const carta = deck.pop();
        insertarCartaDeck( carta,  '#cartas-computadora');    
        puntosComputadora = obtenerValorCarta(carta) + puntosComputadora;
        document.querySelector(`#turno-compu small`).innerText = puntosComputadora;    
        console.log("tu total de puntos es:", puntosComputadora)

    } while(puntosJugador > puntosComputadora && puntosJugador <=21)

    }

