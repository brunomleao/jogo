let jogador1;
let jogador2;

function pedra1() {
  jogador1 = document.getElementById("pedra1").id;
}

function papel1() {
  jogador1 = document.getElementById("papel1").id;
}

function tesoura1() {
  jogador1 = document.getElementById("tesoura1").id;
}

function pedra2() {
  jogador2 = document.getElementById("pedra2").id;
}

function papel2() {
  jogador2 = document.getElementById("papel2").id;
}

function tesoura2() {
  jogador2 = document.getElementById("tesoura2").id;
}

function checar() {
  res = document.getElementById("res");
  if (jogador1 == "tesoura1" && jogador2 == "papel2") {
    console.log("Jogador 1 venceu!");
    res.innerHTML = "Jogador 1 venceu!";
  } else if (jogador1 == "papel1" && jogador2 == "pedra2") {
    console.log("Jogador 1 venceu!");
    res.innerHTML = "Jogador 1 venceu!";
  } else if (jogador1 == "pedra1" && jogador2 == "tesoura2") {
    console.log("Jogador 1 venceu!");
    res.innerHTML = "Jogador 1 venceu!";
  } else if (jogador1 == "tesoura1" && jogador2 == "pedra2") {
    console.log("Jogador 2 venceu!");
    res.innerHTML = "Jogador 2 venceu!";
  } else if (jogador1 == "papel1" && jogador2 == "tesoura2") {
    console.log("Jogador 2 venceu!");
    res.innerHTML = "Jogador 2 venceu!";
  } else if (jogador1 == "pedra1" && jogador2 == "papel2") {
    console.log("Jogador 2 venceu!");
    res.innerHTML = "Jogador 2 venceu!";
  } else if (jogador1 == "tesoura1" && jogador2 == "tesoura2") {
    console.log("Empate!");
    res.innerHTML = "Empate!";
  } else if (jogador1 == "papel1" && jogador2 == "papel2") {
    console.log("Empate!");
    res.innerHTML = "Empate!";
  } else if (jogador1 == "pedra1" && jogador2 == "pedra2") {
    console.log("Empate!");
    res.innerHTML = "Empate!";
  }

  const data = { username: "Victor Jordan" };

  fetch("http://localhost:3000/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
