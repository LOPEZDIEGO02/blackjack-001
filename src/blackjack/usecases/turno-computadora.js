import { deck } from "../index.js"
import { insertarCartaDeck } from "./insertar-carta-deck.js";
import { obtenerValorCarta } from "./obtener-valor-carta.js";
import {  } from "./obtener-valor-carta.js";


export function turnoComputadora(puntosComputadora, puntosJugador) {
    do{
        const carta = deck.pop();
        insertarCartaDeck( carta,  '#cartas-computadora');    
        puntosComputadora = obtenerValorCarta(carta) + puntosComputadora;
        document.querySelector(`#turno-compu small`).innerText = puntosComputadora;    
        console.log("tu total de puntos es:", puntosComputadora)

    } while(puntosJugador > puntosComputadora && puntosJugador <=21)

    }

