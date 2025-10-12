//gonzalez martina, caballero leandro comision 3 david bedoian

let musicaFondo;
let pantalla = 0;
let imagenes = [];

function preload() {
  for (let i = 0; i <= 15; i++) {
    imagenes[i] = loadImage("data/pantalla" + i + ".jpg");
  }

  musicaFondo = loadSound("data/musica.mp3");
}

function setup() {
  createCanvas(640, 480);
  textAlign(CENTER);
  textSize(18);
}

function draw() {
  background(0);
  image(imagenes[pantalla], 0, 0, width, height);
  mostrarPantalla();
}

function mostrarPantalla() {
  fill(255);
  noStroke();

  if (pantalla == 0) {
    text("La guerra entre la Nación del Fuego y el resto de las naciones sigue arrasando.\nAang, el último Maestro Aire, debe restaurar el equilibrio.", width / 2, height / 2 - 190);
    dibujarBoton(width / 2, 400, 160, 50, "Comenzar", color(255, 100, 0));
  } else if (pantalla == 1) {
    text("El grupo encuentra un mapa y ven que tiene que pasar un desierto\npara llegar a la Tierra del Fuego.", width / 2, height / 2 - 190);
    dibujarBoton(width / 2, 400, 160, 50, "Avanzar", color(255, 200, 0));
  } else if (pantalla == 2) {
    text("Una tormenta separa al grupo de Appa.", width / 2, height / 2 - 190);
    dibujarBoton(width / 2 - 120, 400, 160, 50, "Buscar a Appa", color(0, 150, 255));
    dibujarBoton(width / 2 + 120, 400, 160, 50, "Seguir sin Appa", color(255, 100, 0));
  } else if (pantalla == 3) {
    text("Zuko aparece y desafía a Aang.", width / 2, height / 2 - 130);
    dibujarBoton(width / 2 - 120, 400, 160, 50, "Pelear", color(255, 50, 50));
    dibujarBoton(width / 2 + 120, 400, 160, 50, "Hablar", color(100, 200, 255));
  } else if (pantalla == 4) {
    text("Zuko aparece y desafía a Aang.", width / 2, height / 2 - 130);
    dibujarBoton(width / 2, 400, 160, 50, "Pelear", color(255, 50, 50));
  } else if (pantalla == 5) {
    text("PELEA CON ZUKO\nBatalla intensa. Iroh interviene antes de la derrota.", width / 2, height / 2 - 190);
    dibujarBoton(width / 2, 400, 160, 50, "Avanzar", color(255, 200, 0));
  } else if (pantalla == 6) {
    text("Zuko confiesa sus dudas y propone una alianza.", width / 2, height / 2 - 140);
    dibujarBoton(width / 2, 400, 160, 50, "Avanzar", color(255, 200, 0));
  } else if (pantalla == 7) {
    text("Un dragón enseña a Aang que el fuego es energía vital.", width / 2, height / 2 - 200);
    dibujarBoton(width / 2, 400, 160, 50, "Avanzar", color(255, 200, 0));
  } else if (pantalla == 8) {
    text("El grupo está preparado para enfrentar a Ozai.", width / 2, height / 2 - 190);
    dibujarBoton(width / 2, 400, 160, 50, "Avanzar", color(255, 200, 0));
  } else if (pantalla == 9) {
    text("ENFRENTAMIENTO CON OZAI\nOzai los espera envuelto en fuego azul.", width / 2, height / 2 - 190);
    dibujarBoton(width / 2, 400, 160, 50, "Avanzar", color(255, 200, 0));
  } else if (pantalla == 10) {
    text("DECISIÓN DE AANG\nAang debe decidir cómo terminar la guerra.", width / 2, height / 2 - 190);
    dibujarBoton(width / 2 - 120, 400, 160, 50, "Desatar poder", color(255, 50, 50));
    dibujarBoton(width / 2 + 120, 400, 160, 50, "Buscar equilibrio", color(100, 200, 255));
  } else if (pantalla == 11) {
    text("CONSECUENCIAS (PODER TOTAL)\nAang desata toda su fuerza.", width / 2, height / 2 - 190);
    dibujarBoton(width / 2, 400, 160, 50, "Final", color(255, 200, 0));
  } else if (pantalla == 12) {
    text("AVATAR GUERRERO\nAang destruye a Ozai pero deja un mundo temeroso.", width / 2, height / 2 - 190);
    dibujarBoton(width / 2, 400, 160, 50, "Reiniciar", color(0, 200, 100));
  } else if (pantalla == 13) {
    text("CONSECUENCIAS (ENERGÍA VITAL)\nAang aplica la lección del dragón.", width / 2, height / 2 - 190);
    dibujarBoton(width / 2, 400, 160, 50, "Final", color(255, 200, 0));
  } else if (pantalla == 14) {
    text("AVATAR SABIO\nAang restaura la armonía sin destruir a Ozai.", width / 2, height / 2 - 190);
    dibujarBoton(width / 2, 400, 160, 50, "Reiniciar", color(0, 200, 100));
  } else if (pantalla == 15) {
    text("AVATAR CAÍDO\nAang es derrotado y el mundo cae bajo el fuego.", width / 2, height / 2 - 190);
    dibujarBoton(width / 2, 400, 160, 50, "Reiniciar", color(0, 200, 100));
  }
}

function dibujarBoton(x, y, w, h, texto, col) {
  fill(col);
  rectMode(CENTER);
  rect(x, y, w, h, 10);
  fill(0);
  text(texto, x, y + 6);
}

function mousePressed() {
  if (musicaFondo && !musicaFondo.isPlaying()) {
    userStartAudio().then(() => {
      musicaFondo.loop();
      musicaFondo.setVolume(0.5);
    });
  }

  if (pantalla == 0) pantalla = 1;
  else if (pantalla == 1) pantalla = 2;
  else if (pantalla == 2) {
    if (mouseX < width / 2) pantalla = 3;
    else pantalla = 4;
  } else if (pantalla == 3) {
    if (mouseX < width / 2) pantalla = 5;
    else pantalla = 6;
  } else if (pantalla == 4) pantalla = 15;
  else if (pantalla == 5 || pantalla == 6) pantalla = 7;
  else if (pantalla == 7) pantalla = 8;
  else if (pantalla == 8) pantalla = 9;
  else if (pantalla == 9) pantalla = 10;
  else if (pantalla == 10) {
    if (mouseX < width / 2) pantalla = 11;
    else pantalla = 13;
  } else if (pantalla == 11) pantalla = 12;
  else if (pantalla == 12) {
    if (mouseX > width / 2 - 80 && mouseX < width / 2 + 80 &&
        mouseY > 375 && mouseY < 425) pantalla = 0;
  } else if (pantalla == 13) pantalla = 14;
  else if (pantalla == 14 || pantalla == 15) {
    if (mouseX > width / 2 - 80 && mouseX < width / 2 + 80 &&
        mouseY > 375 && mouseY < 425) pantalla = 0;
  }
}
