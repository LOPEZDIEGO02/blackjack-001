import { insertarCartaDeck } from "./insertar-carta-deck";

export const referenciasDecks = {
    jugador: '#cartas-jugador',
    computadora: '#cartas-computadora'

}

/**
 * Esta tiene la funcion de pedir carta e insertar la carta
 * @param {carta[]} deck
 * @param {referenciasDecks} referenciasDeckinsertar 
 * @returns carta
 */

export function pedirCarta (deck, referenciasDeckinsertar){
// referenciasdeckinsartar: inserta #cartas-jugador, catas-computadora

const carta = deck.pop();
insertarCartaDeck(carta, referenciasDeckinsertar);
return carta;
}