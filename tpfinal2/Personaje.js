class Personaje {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.ancho = 30;
    this.alto = 40;

    this.vel = 3;

    this.velY = 0;
    this.gravedad = 0.8;
    this.salto = -12;
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) this.x -= this.vel;
    if (keyIsDown(RIGHT_ARROW)) this.x += this.vel;

    // SALTO
    if (keyIsDown(UP_ARROW) || keyIsDown(32)) { 
      if (this.enSuelo()) {
        this.velY = this.salto;
      }
    }

    this.velY += this.gravedad;
    this.y += this.velY;

    if (this.enSuelo()) {
      this.y = height - 60 - this.alto;
      this.velY = 0;
    }

    this.x = constrain(this.x, 0, width - this.ancho);
  }

  enSuelo() {
    return this.y + this.alto >= height - 60;
  }

  reset() {
    this.x = 20;
    this.y = height - 120;
    this.velY = 0;
  }

   dibujar() {
  image(imgPersonaje, this.x, this.y, this.ancho, this.alto);
}


  chocaCon(o) {
    let px = constrain(this.x + this.ancho/2, o.x - o.r, o.x + o.r);
    let py = constrain(this.y + this.alto/2, o.y - o.r, o.y + o.r);

    let d = dist(px, py, o.x, o.y);
    return d < o.r;
  }
}
