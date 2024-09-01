//Gonzalez Martina Julieta 88141/9 Com 5 Tobias Albirosa
//https://youtu.be/Nit_FmE0Rq4


let foto;
let tam, ang = 0; // inicia el angulo
let c;
let move = false; // cariable controlar movimiento

function preload() {
  foto = loadImage('foto.jpg'); // carga la imagen
}

function setup() {
  createCanvas(800, 400);
  colores(); // cargar color ale
}

function draw() {
  background(0);
  foto.resize(400, 400);
  image(foto, 0, 0);
  rectMode(CENTER); //rectangulos dibujan dsd el centro
  translate(width / 1.34, height / 2); // mover el punto a la dere

  for (let i = 0; i < 50; i++) { // cRea los cuadros
    rotate(map(ang, 0, width, PI / 2, PI / 50)); //  rotacion

    if (i % 2 == 0) { // cambia d color cada 2 fotogramas
      fill(c); 
    } else {
      fill(255); // Blanco
    }
    tam = (height) - i * 8.7; // cuadro más pequeño
    rect(0, 0, tam, tam);
  }

  // si move es verd, cambia el angulo basado en la posicion del mouse
  if (move) {
    angulo();
  }
}

// función para cambiar el angulo basado en la posicion del mouse
function angulo() {
  if (mouseX < width / 2) {
    ang += 0.2;
  } else {
    ang -= 0.2;
  }
}

// cuncion para color aleatorio
function colores() {
  c = colorAleatorio();
}

// reiniciar al hacer clic
function mousePressed() {
  ang = 0;
  colores(); // Cargar un nuevo color
}

// funcion movimiento key espacio
function keyPressed() {
  if (key == ' ') {
    move = !move; // Alterna el valor de move entre true y false
  }
}

// funcion que retorna un color aleatorio
function colorAleatorio() {
  return color(random(255), random(255), random(255));
}
