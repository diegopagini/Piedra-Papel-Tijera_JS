let opcionUsuario;
let opcionCPU;

const piedra = document.getElementById("piedra").onclick = () => {
  opcionUsuario = piedra;
  document.getElementById("playerResult").value = "Piedra";
  play(opcionCPU, opcionUsuario);
}
const papel = document.getElementById("papel").onclick = () => {
  opcionUsuario = papel;
  document.getElementById("playerResult").value = "Papel";
  play(opcionCPU, opcionUsuario);
}
const tijera = document.getElementById("tijera").onclick = () => {
  opcionUsuario = tijera;
  document.getElementById("playerResult").value = "Tijera";
  play(opcionCPU, opcionUsuario);
}

const restart = document.getElementById("restart").onclick = () => {
  location.reload();
}

function aleatorio() {
    opcionCPU = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    if(opcionCPU === 0) {
      document.getElementById("cpuResult").value = "Piedra";
    } else if(opcionCPU === 1) {
      document.getElementById("cpuResult").value = "Papel";
    } else if(opcionCPU === 2) {
      document.getElementById("cpuResult").value = "Tijera";
    }
  }

function play(opcionCPU, opcionUsuario){
  aleatorio();
  if(opcionCPU === 0 && opcionUsuario === piedra) {
    console.log("Empate");
  } else if(opcionCPU === 0 && opcionUsuario === papel) {
    console.log("Ganaste")
  } else if(opcionCPU === 0 && opcionUsuario === tijera) {
    console.log("Perdiste");
  } else if(opcionCPU === 1 && opcionUsuario === piedra) {
    console.log("Pediste");
  } else if(opcionCPU === 1 && opcionUsuario === papel) {
    console.log("empate");
  } else if(opcionCPU === 1 && opcionUsuario === tijera) {
    console.log("ganaste");
  } else if(opcionCPU === 2 && opcionUsuario === piedra) {
    console.log("ganaste") 
  } else if(opcionCPU === 2 && opcionUsuario === papel) {
    console.log("perdiste")
  } else if(opcionCPU === 2 && opcionUsuario === tijera) {
    console.log("empate");
  }
  console.log(opcionCPU)
}

// Hola, tengo un problema al mostrar en .value del cpu el resultado. Lo trate de debuggear y el resultado lo esta tomando bien. No entiendo cual es el problema. Mil disculpas, soy novato. 
