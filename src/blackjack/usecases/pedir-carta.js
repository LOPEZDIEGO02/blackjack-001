import { insertarCartaDeck } from "./insertar-carta-deck";



export const referenciasDecks = {
    jugador: '#cartas-jugador',
    computadora: '#cartas-computadora'
}


/**
 *  Esta funcion, pide una carta, y la inserta al deck del jugador 
 * @param {carta[]} deck 
 * @param {referenciasDecks} referenciaDeckInsertar
 * @returns carta
 */
export function pedirCarta( deck, referenciaDeckInsertar ) {
    // referenciaDeckInsertar: '#cartas-jugador',  '#cartas-computadora'

    const carta = deck.pop();
    insertarCartaDeck( carta, referenciaDeckInsertar);
    return carta;
}