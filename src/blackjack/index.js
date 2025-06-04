import _ from "underscore";
import { crearDeck } from "./usecases/crear-deck";
import { obtenerValorCarta } from "./usecases/obtener-valor-carta.js"; 
import { turnoComputadora } from "./usecases/turno-computadora.js"
import { pedirCarta, referenciasDecks } from "./usecases/pedir-carta.js";

const btnNuevo = document.querySelector("#btnNuevo")
const btnPedir =document.querySelector("#btnPedir")
const btnDetener = document.querySelector("#btnDetener")


let deck = [];
let puntosJugador = 0;
let puntosComputadora = 0;
deck = crearDeck()

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck, referenciasDecks.jugador);
    puntosJugador = obtenerValorCarta(carta) + puntosJugador;

    // actulizar los puntos del jugador en el html, si el jugador pierde se tiene que desavilitar botones lo mismo si gana 
    if (puntosJugador > 21 ) {
        console.error("perdiste")
        btnPedir.disabled = true;
        btnDetener.disabled= true;
        turnoComputadora(puntosComputadora, puntosJugador, deck);
    } else if (puntosJugador === 21 ){
        console.warn("21 yei")
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    }
    
    // tarea actualizar los puntos del html, desabilitar boton si pierde y añadir el boton detener 
    document.querySelector(`h1 small`).innerText = puntosJugador;
    
});

//agregar boton detener, lo que tiene que hacer es desabilitar botones 
btnDetener.addEventListener('click', () => {
    turnoComputadora(puntosComputadora, puntosJugador, deck)
    btnPedir.disabled = true;
    btnDetener.disabled = true;

});

btnNuevo.addEventListener('click', () => {
    deck = [];
    puntosJugador = 0;
    puntosComputadora = 0;
    document.querySelector('#cartas-jugador').innerHTML = '';
    document.querySelector('#cartas-computadora').innerHTML = '';
    document.querySelector(`h1 small`).innerText = 0;
    document.querySelector(`#turno-compu small`).innerText = 0;
    btnPedir.disabled = false;
    btnDetener.disabled = false;

    deck = crearDeck();
    
});