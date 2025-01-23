import { pedirCarta } from "./pedir-carta";
import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";

// Turno computadora 
  export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, puntosSmall, divCartasJugadores) =>{
      let puntosComputadora = 0;
      do {
          const carta = pedirCarta(deck);
          puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1, puntosJugadores, puntosSmall); 
          crearCarta(carta, puntosJugadores.length-1, divCartasJugadores);

      }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21)); 
      determinarGanador(puntosJugadores); 
  }
  const determinarGanador = (puntosJugadores) =>{
    const [puntosMinimos, puntosComputadora] = puntosJugadores
      
      setTimeout(() => { // Ejecuta la logica despues de 10 s
          if( puntosComputadora === puntosMinimos) {
              alert('Nadie gana :c');
          }else if(puntosMinimos > 21 ){
              alert('Computadora gana');
          }else if (puntosComputadora > 21){
              alert('Felicidades, ganaste!')
          }else{
              alert('Computadora gana');
          }
      }, 10);   
  }