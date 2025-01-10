let turno: number = 1;
let numeroTurno = document.getElementById("numero-turno");
const turnoAnterior = document.getElementById("turno-anterior");
const botonReset = document.getElementById("reset");
const turnoSiguiente = document.getElementById("turno-siguiente");

const actualizarContador = (): void => {
  if (numeroTurno instanceof HTMLHeadingElement) {
    numeroTurno.textContent = turno.toString().padStart(2, "0");
    if (turnoAnterior instanceof HTMLButtonElement) {
      turnoAnterior.disabled = turno <= 1;
    }
  }
};

const inputIngresarTurno = document.getElementById("ingresar-turno");
const botonIngresarTurno = document.getElementById("boton-ingresar-turno");

const handlerIngresarTurno = (): void => {
  if (inputIngresarTurno instanceof HTMLInputElement) {
    turno = parseInt(inputIngresarTurno.value);
    inputIngresarTurno.value = '' 
  }
  
    actualizarContador();
};

if (botonIngresarTurno instanceof HTMLButtonElement) {
  botonIngresarTurno.addEventListener("click", handlerIngresarTurno);
}

const handlerTurnoAnterior = (): void => {
  if (numeroTurno instanceof HTMLHeadingElement) {
    if (turno > 1) {
      turno--;
      actualizarContador();
    }
  }
};
const reset = (): void => {
  turno = 0;
  actualizarContador();
};
const handleTurnoSiguiente = (): void => {
  if (numeroTurno instanceof HTMLHeadingElement) {
    turno++;
    actualizarContador();
  }
};

if (turnoAnterior instanceof HTMLButtonElement) {
  turnoAnterior.addEventListener("click", handlerTurnoAnterior)
}
if (botonReset instanceof HTMLButtonElement) {
  botonReset.addEventListener("click", handlerTurnoAnterior)
  }
  if (turnoSiguiente instanceof HTMLButtonElement) {
    turnoSiguiente.addEventListener("click", handleTurnoSiguiente);
    }

