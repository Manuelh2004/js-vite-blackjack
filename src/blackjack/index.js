import {crearDeck, pedirCarta, crearCarta, acumularPuntos, turnoComputadora} from './usecases/index'

// Se puede asignara otro nombre con el 'as'
/*
RUTA DEL JUEGO: EL PRIMERO QUE LLEGUE A 21 (O CERCA) GANA 
    C: TREBOLES
    S: ESPADAS
    D: DIAMANTES
    H: CORAZONES
*/

const miModulo = (() =>{ // Una función flecha anonima 
  'use strict' // Sirve para activar el modo estricto (ejecutar el código de forma más segura)
  let deck = []; // Baja de cartas
  let puntosJugadores = []; // Arreglo con los puntos de los jugadores 

  const tipos = ['C','D','H','S'],
   especiales = ['A','J','K','Q'];

  // Referencias del HTML
  const btnPedir = document.querySelector('#btnPedir'),
  btnDetener = document.querySelector('#btnDetener'), // Selecciona un id especifico 
  btnNuevo = document.querySelector('#btnNuevo'); 

  const divCartasJugadores = document.querySelectorAll('.divCartas'), 
  puntosSmall = document.querySelectorAll('small');  // Selecciona todos los smalls

  // *********************************
  const inicializarJuego = (numJugadores = 2 ) => { /*Función para inicializar el juego*/ 
    deck = crearDeck(tipos,especiales); 
      puntosJugadores = [];

      for(let i=0; i<numJugadores; i++){
          puntosJugadores.push(0); 
      }

      puntosSmall.forEach(elem => elem.innerText = 0); // Limpia los elementos small
      divCartasJugadores.forEach(elem => elem.innerHTML = ''); // Limpia los elementos de img

      btnPedir.disabled = false;
      btnDetener.disabled = false;
  } 


  
  // Eventos de los botones 
  btnPedir.addEventListener('click', ()=>{ // Callback -> Función que se envia dentro de otra
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosSmall );
      crearCarta(carta, 0, divCartasJugadores); 

      // Condición si es mayor a 21
      if (puntosJugador > 21){
          console.warn('Lo sentimo, perdió')
          btnPedir.disabled = true; // Desactivamos el boton 'PedirCarta'; 
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador );
  
      }else if(puntosJugador == 21){
          console.warn('21, genial!');
          btnPedir.disabled = true; // Desactivamos el boton 'PedirCarta'; 
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador ); 
      }
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntosSmall, divCartasJugadores);
  });

  btnNuevo.addEventListener('click', () =>{ 
      inicializarJuego();       
  }); 

  return { // Lo único que será público y accesible
      nuevoJuego: inicializarJuego
  }; 
})(); 




