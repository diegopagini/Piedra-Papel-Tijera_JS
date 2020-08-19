let opcionUsuario;

const piedra = document.getElementById("piedra").onclick = () => {
  opcionUsuario = piedra;
  document.getElementById("playerResult").value = "Piedra";
  play(opcionUsuario);
}
const papel = document.getElementById("papel").onclick = () => {
  opcionUsuario = papel;
  document.getElementById("playerResult").value = "Papel";
  play(opcionUsuario);
}
const tijera = document.getElementById("tijera").onclick = () => {
  opcionUsuario = tijera;
  document.getElementById("playerResult").value = "Tijera";
  play(opcionUsuario);
}

const restart = document.getElementById("restart").onclick = () => {
  location.reload();
}

function aleatorio() {
    opcionCPU = Math.floor(Math.random() * 3);
    if(opcionCPU === 0) {
      document.getElementById("cpuResult").value = "Piedra";
    } else if(opcionCPU === 1) {
      document.getElementById("cpuResult").value = "Papel";
    } else if(opcionCPU === 2) {
      document.getElementById("cpuResult").value = "Tijera";
    }
  }

function play(opcionUsuario){
  aleatorio();
  if(opcionCPU === 0 && opcionUsuario === piedra) {
    document.getElementById("resultado").value = "Empate";
    document.getElementById("resultado").style.backgroundColor = "yellow"; 
  } else if(opcionCPU === 0 && opcionUsuario === papel) {
    document.getElementById("resultado").value = "Ganaste";
    document.getElementById("resultado").style.backgroundColor = "green"; 
  } else if(opcionCPU === 0 && opcionUsuario === tijera) {
    document.getElementById("resultado").value = "Perdiste";
    document.getElementById("resultado").style.backgroundColor = "red"; 
  } else if(opcionCPU === 1 && opcionUsuario === piedra) {
    document.getElementById("resultado").value = "Perdiste";
    document.getElementById("resultado").style.backgroundColor = "red"; 
  } else if(opcionCPU === 1 && opcionUsuario === papel) {
    document.getElementById("resultado").value = "Empate";
    document.getElementById("resultado").style.backgroundColor = "yellow"; 
  } else if(opcionCPU === 1 && opcionUsuario === tijera) {
    document.getElementById("resultado").value = "Ganaste";
    document.getElementById("resultado").style.backgroundColor = "green"; 
  } else if(opcionCPU === 2 && opcionUsuario === piedra) {
    document.getElementById("resultado").value = "Ganaste";
    document.getElementById("resultado").style.backgroundColor = "green"; 
  } else if(opcionCPU === 2 && opcionUsuario === papel) {
    document.getElementById("resultado").value = "Perdiste";
    document.getElementById("resultado").style.backgroundColor = "red"; 
  } else if(opcionCPU === 2 && opcionUsuario === tijera) {
    document.getElementById("resultado").value = "Empate";
    document.getElementById("resultado").style.backgroundColor = "yellow"; 
  }
  console.log(opcionCPU)
}
