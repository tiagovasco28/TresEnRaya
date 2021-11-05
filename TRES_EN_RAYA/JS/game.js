var tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const X = 1;
const O = -1;
var turno = 0;
var contador = 0;
var vacias = 9;
var fin = false;
var jugador1 = "<img src='images/x.png' width='200' height='200'>";
var jugador2 = "<img src='images/circle.png' width='200' height='200'>";

function inicio() {
	div0 = document.getElementById("0"), div1 = document.getElementById("1"), div2 = document.getElementById("2");
	div3 = document.getElementById("3"), div4 = document.getElementById("4"), div5 = document.getElementById("5");
	div6 = document.getElementById("6"), div7 = document.getElementById("7"), div8 = document.getElementById("8");

	document.getElementById("0").addEventListener('click', color), document.getElementById("1").addEventListener('click', color);
	document.getElementById("2").addEventListener('click', color), document.getElementById("3").addEventListener('click', color);
	document.getElementById("4").addEventListener('click', color), document.getElementById("5").addEventListener('click', color);
	document.getElementById("6").addEventListener('click', color), document.getElementById("7").addEventListener('click', color);
	document.getElementById("8").addEventListener('click', color),
	document.getElementById("btnReiniciar").addEventListener('click', reiniciarJuego);
		
}

function color(e) {
	if (fin == false) {
		
		if (e.target.id == "0") {
			if (turno == 0) {
				div0.innerHTML = jugador1;
				turno++;
				vacias--;
				tablero[0] = X;
			} else {
				div0.innerHTML = jugador2;
				turno--;
				vacias--;
				tablero[0] = O;
			}
			contador++;
			console.log(tablero);
		}
		if (e.target.id == "1") {
			if (turno == 0) {
				div1.innerHTML = jugador1;
				turno++;
				vacias--;
				tablero[1] = X;
			} else {
				div1.innerHTML = jugador2;
				turno--;
				vacias--;
				tablero[1] = O;
			}
			contador++;
		}

		if (e.target.id == "2") {
			if (turno == 0) {
				div2.innerHTML = jugador1;
				turno++;
				vacias--;
				tablero[2] = X;
			} else {
				div2.innerHTML = jugador2;
				turno--;
				vacias--;
				tablero[2] = O;
			}
			contador++;
		}
		if (e.target.id == "3") {
			if (turno == 0) {
				div3.innerHTML = jugador1;
				turno++;
				vacias--;
				tablero[3] = X;
			} else {
				div3.innerHTML = jugador2;
				turno--;
				vacias--;
				tablero[3] = O;
			}
			contador++;
		}
		if (e.target.id == "4") {
			if (turno == 0) {
				div4.innerHTML = jugador1;
				turno++;
				vacias--;
				tablero[4] = X;
			} else {
				div4.innerHTML = jugador2;
				turno--;
				vacias--;
				tablero[4] = O;
			}
			contador++;
		}
		if (e.target.id == "5") {
			if (turno == 0) {
				div5.innerHTML = jugador1;
				turno++;
				vacias--;
				tablero[5] = X;
			} else {
				div5.innerHTML = jugador2;
				turno--;
				vacias--;
				tablero[5] = O;
			}
			contador++;
		}
		if (e.target.id == "6") {
			if (turno == 0) {
				div6.innerHTML = jugador1;
				turno++;
				vacias--;
				tablero[6] = X;
			} else {
				div6.innerHTML = jugador2;
				turno--;
				vacias--;
				tablero[6] = O;
			}
			contador++;
		}
		if (e.target.id == "7") {
			if (turno == 0) {
				div7.innerHTML = jugador1;
				turno++;
				vacias--;
				tablero[7] = X;
			} else {
				div7.innerHTML = jugador2;
				turno--;
				vacias--;
				tablero[7] = O;
			}
			contador++;
		}
		if (e.target.id == "8") {
			if (turno == 0) {
				div8.innerHTML = jugador1;
				turno++;
				vacias--;
				tablero[8] = X;
			} else {
				div8.innerHTML = jugador2;
				turno--;
				vacias--;
				tablero[8] = O;
			}
			contador++;
		}

	} 
	comprobar();
} 

function reiniciarJuego() {
	location.reload();
}

function comprobar() {
	if (tablero[0] == X && tablero[1] == X && tablero[2] == X || tablero[3] == X && tablero[4] == X && tablero[5] == X  // horizontal X
		|| tablero[6] == X && tablero[7] == X && tablero[8] == X) {
		alert(" ¡ Java ha ganado !");
		fin = true;
	}
	if (tablero[0] == O && tablero[1] == O && tablero[2] == O || tablero[3] == O && tablero[4] == O && tablero[5] == O  // horizontal O
		|| tablero[6] == O && tablero[7] == O && tablero[8] == O) {
		alert("¡ Javascript ha ganado!");
		fin = true;
	}
	if (tablero[0] == X && tablero[3] == X && tablero[6] == X || tablero[1] == X && tablero[4] == X && tablero[7] == X  // diagonal X
		|| tablero[2] == X && tablero[5] == X && tablero[8] == X) {
			alert(" ¡ Java ha ganado !");
		fin = true;
	}
	if (tablero[0] == O && tablero[3] == O && tablero[6] == O || tablero[1] == O && tablero[4] == O && tablero[7] == O  // diagonal O
		|| tablero[2] == O && tablero[5] == O && tablero[8] == O) {
		alert("¡ Javascript ha ganado!");
		fin = true;
	}
	if(tablero[0] == X && tablero[4] == X && tablero[8] == X|| tablero[2] == X && tablero[4] == X && tablero[6] == X){  // vertical  X
		alert(" ¡ Java ha ganado !");
		fin = true;
	}
	if(tablero[0] == O && tablero[4] == O && tablero[8] == O|| tablero[2] == O && tablero[4] == O && tablero[6] == O){ // vertical O
		alert("¡ Javascript ha ganado!");
		fin = true;
	}
	if(fin == false && contador == 9 && vacias == 0 ){
		alert("Empate");
	}
}