//Martina Gonzalez y Leonardo Caballero, com 3 David Bedoian
//https://youtu.be/8ovaWLuBfYI


let pantalla = "inicio"; 
let juego;
let sonidoAvatar;
let imgPersonaje;
let imgObstaculo;
let imgFondos = [];
let imgEnemigo;


function preload() {
  sonidoAvatar = loadSound("data/sonidoavatar.mp3");

  imgPersonaje = loadImage("data/personaje.png");
  imgObstaculo = loadImage("data/obstaculo.png");
  imgFondos[1] = loadImage("data/fondo_aire.png");
  imgFondos[2] = loadImage("data/fondo_agua.png");
  imgFondos[3] = loadImage("data/fondo_tierra.png");
  imgFondos[4] = loadImage("data/fondo_fuego.png");
  imgFondos[5] = loadImage("data/fondo_final.png");
  imgEnemigo = loadImage("data/enemigo.png");
}


function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  if (pantalla === "inicio") {
    dibujarPantallaInicio();
  }
  else if (pantalla === "juego") {
    juego.actualizar();
    juego.dibujar();
  }
  else if (pantalla === "creditos") {
    dibujarCreditos();
  }
}

function dibujarPantallaInicio() {
  background(20);
  fill(255);
  textAlign(CENTER);

  textSize(22);
  text("Esquiva los poderes de los 4 elementos", width/2, height/2 - 40);
  text("para llegar a Ozai y derrotarlo.", width/2, height/2 - 10);

  textSize(16);
  text("Haz click para empezar.", width/2, height/2 + 40);

  let bx = width - 110;
  let by = height - 40;
  let bw = 100;
  let bh = 30;

  fill(60);
  rect(bx, by, bw, bh, 5);
  fill(255);
  textSize(14);
  text("Créditos", bx + bw/2, by + bh/2);
}

function dibujarCreditos() {
  background(30);
  fill(255);
  textAlign(CENTER);

  textSize(24);
  text("Créditos", width/2, 60);

  textSize(16);
  text("Juego creado por Leonardo Caballero y Martina Gonzalez.", width/2, 170);
  text("Comision 3 David Bedoian.", width/2, 200);

  textSize(14);
  text("Haz click para volver.", width/2, height - 40);
}

function mousePressed() {

  if (pantalla === "inicio") {

    if (mouseX > width - 110 && mouseY > height - 40) {
      pantalla = "creditos";
      return;
    }

    pantalla = "juego";

    if (!sonidoAvatar.isPlaying()) {
      sonidoAvatar.loop();
    }

    return;
  }

  if (pantalla === "creditos") {
    pantalla = "inicio";
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    if (pantalla === "juego") {
      juego.reiniciar();
    }
  }
}
