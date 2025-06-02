import { shuffle } from "underscore";


let cartas = ['C','D','H','S'];
let especiales = ['A', 'J', 'Q', 'K'];

/**
 * Esta funcion crea un arreglo de cartas y las regresa revueltas.
 * @returns {Array(carta)}
 */
export function crearDeck() {
    let deck = []

    for(const carta of cartas) {
        for(let i=2; i <= 10; i++) {
            deck.push(`${i}${carta}`);
        }
    }

    for(const especial of especiales) {
         for(const carta of cartas){
         deck.push(especial+carta)
      }
    }

    return shuffle(deck);
}