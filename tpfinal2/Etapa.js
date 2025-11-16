class Etapa {
  constructor(num) {
    this.num = num;
    this.obstaculos = [];
    this.spawnTimer = 0;

    this.spawnCada = 90 - (num - 1) * 8;
    if (this.spawnCada < 50) this.spawnCada = 50;

    this.fondo = this.colorSegunEtapa();

    if (num === 5) {
      this.enemigo = { x: width - 100, y: height - 120, r: 40 };
      this.derrotado = false;
    } else {
      this.enemigo = null;
      this.derrotado = false;
    }
  }

  colorSegunEtapa() {
    switch (this.num) {
      case 1: return [135, 206, 235];
      case 2: return [60, 160, 60];
      case 3: return [255, 255, 255];
      case 4: return [200, 40, 40];
      case 5: return [0, 0, 0];
    }
  }

  actualizar() {
    if (this.num === 5) return;

    this.spawnTimer++;
    if (this.spawnTimer >= this.spawnCada) {
      this.spawnTimer = 0;

      let minY = height - 220;
      let maxY = height - 60;
      let y = random(minY, maxY);

      this.obstaculos.push(new Obstaculo(width + 30, y, this.num));
    }

    for (let o of this.obstaculos) o.mover();

    this.obstaculos = this.obstaculos.filter(o => !o.fueraDePantalla());
  }

  dibujar() {
  image(imgFondos[this.num], 0, 0, width, height);


    fill(100, 70, 40);
    rect(0, height - 60, width, 60);

    if (this.num === 5) {
      fill(200, 0, 0);
     image(
  imgEnemigo,
  this.enemigo.x - this.enemigo.r,
  this.enemigo.y - this.enemigo.r,
  this.enemigo.r * 2,
  this.enemigo.r * 2
);


      fill(255);
      textAlign(CENTER);
      if (this.derrotado) {
        textSize(18);
      } else {
        textSize(14);
        text("Tocá al enemigo rojo", width/2, 30);
      }
      return;
    }

    for (let o of this.obstaculos) o.dibujar();

    fill(255);
    textSize(12);
    textAlign(RIGHT);
    text("Llegá al borde derecho para avanzar", width - 10, 18);
  }
}
