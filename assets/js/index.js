const numberOfGames = parseInt(prompt("¡Cuantas veces deseas jugar?"));

for (let count = 1; count <= numberOfGames; count++) {
  console.log(`Partida ${count}`);
  // Solicitud jugada del usuario
  let userChoice = parseInt(
    prompt(`Escribe el número correspondiente a tu elección:
                                                 ( 1 ) Tijera.
                                                 ( 2 ) Piedra.
                                                 ( 3 ) Papel.   `)
  );
  // Validación  y se le asigna un nombre a cada número para mayor facilidad en consola
  switch (userChoice) {
    case 1:
      userChoice = "Tijera";
      console.log(`El Usuario jugó ${userChoice}`);
      break;
    case 2:
      userChoice = "Piedra";
      console.log(`El Usuario jugó ${userChoice}`);
      break;
    case 3:
      userChoice = "Papel";
      console.log(`El Usuario jugó ${userChoice}`);
      break;
    default:
      alert("Elige un número del 1 al 3");
  }

  //Elección aleatoria de la pc y se le asigna un nombre para mayor facilidad en consola
  let pcTurn = Math.floor(Math.random() * 3) + 1;
  if (pcTurn == 1) {
    pcTurn = "Tijera";
    console.log(`La Pc jugó ${pcTurn}`);
  } else if (pcTurn == 2) {
    pcTurn = "Piedra";
    console.log(`La Pc jugó ${pcTurn}`);
  } else {
    pcTurn = "Papel";
    console.log(`La Pc jugó ${pcTurn}`);
  }

  //Combinaciones posibles para elegir quien gana
  switch (true) {
    case userChoice == "Tijera" && pcTurn == "Piedra":
      console.log("Resultado: Usuario perdió");
      alert("Haz Perdido");
      break;
    case userChoice == "Piedra" && pcTurn == "Papel":
      console.log("Resultado: Usuario perdió");
      alert("Haz Perdido");
      break;
    case userChoice == "Papel" && pcTurn == "Tijera":
      console.log("Resultado: Usuario perdió");
      alert("Haz Perdido");
      break;
    case userChoice == "Piedra" && pcTurn == "Tijera":
      console.log("Resultado: Usuario ganó");
      alert("Felicitaciones, ganaste!");
      break;
    case userChoice == "Papel" && pcTurn == "Piedra":
      console.log("Resultado: Usuario ganó");
      alert("Felicitaciones, ganaste!");
      break;
    case userChoice == "Tijera" && pcTurn == "Papel":
      console.log("Resultado: Usuario ganó");
      alert("Felicitaciones, ganaste!");
      break;
    case userChoice == pcTurn:
      console.log("Resultado: Empate");
      alert("Es un Empate");
      break;
    default:
      console.log("El Usuario jugó nulo");
  }
}
alert(`                       !!! Game Over !!!
    Recargar la pagina si quieres jugar de nuevo`);
