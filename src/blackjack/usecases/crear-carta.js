  export const crearCarta = (carta, turno, divCartasJugadores) => {
    // Crea la nueva carta y le asigna su valor 
    const cartabyImg = document.createElement('img'); 
    cartabyImg.src = `assets/cartas/${carta}.png`; // Ese simbolo raro se hace con alt+96
    cartabyImg.classList.add('carta') // Asignamos la clase carta a 'cartabyImg'
    divCartasJugadores[turno].append(cartabyImg)
  }