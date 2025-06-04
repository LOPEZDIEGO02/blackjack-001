import { insertarCartaDeck } from "./insertar-carta-deck";


// tiene que identificar para quien va a insertar la carta
export function pedirCarta(deck) {
    const carta = deck.pop();
    insertarCartaDeck( carta, '#cartas-jugador');
    return carta;
}