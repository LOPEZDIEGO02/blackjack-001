
import { determinarGanador } from "./determinar-ganador.js";
import { insertarCartaDeck } from "./insertar-carta-deck.js";
import { obtenerValorCarta } from "./obtener-valor-carta.js";
import { pedirCarta, referenciasDecks } from "./pedir-carta.js";


export function turnoComputadora(puntosComputadora, puntosJugador, deck) {
    do{
        // const carta = deck.pop();
        // insertarCartaDeck( carta,  '#cartas-computadora');    
        const carta = pedirCarta( deck, referenciasDecks.computadora )
        puntosComputadora = obtenerValorCarta(carta) + puntosComputadora;
        document.querySelector(`#turno-compu small`).innerText = puntosComputadora;    

    } while(puntosJugador > puntosComputadora && puntosJugador <=21)

    determinarGanador(puntosComputadora, puntosJugador);
}
