import { valorCarta } from "./valor-carta";

export const acumularPuntos = (carta, turno, puntosJugadores, puntosSmall) =>{ 
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta); 
    puntosSmall[turno].innerText = puntosJugadores[turno]; 
    return puntosJugadores[turno]; 
}
