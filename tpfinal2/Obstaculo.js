class Obstaculo {
  constructor(x, y, etapa) {
    this.x = x;
    this.y = y;
    this.r = 12;
    this.vel = 4 + etapa;
  }

  mover() {
    this.x -= this.vel;
  }

  dibujar() {
  image(imgObstaculo, this.x - this.r, this.y - this.r, this.r*2, this.r*2);
}

  fueraDePantalla() {
    return this.x + this.r < 0;
  }
}
