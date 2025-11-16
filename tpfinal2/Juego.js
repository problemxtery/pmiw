class Juego {
  constructor() {
    this.etapaActual = 1;
    this.personaje = new Personaje(20, height - 120);
    this.etapa = new Etapa(this.etapaActual);
    this.estado = "jugando";
  }

  actualizar() {
    if (this.estado !== "jugando") return;

    this.etapa.actualizar();
    this.personaje.mover();

    if (this.etapaActual < 5) {
      for (let o of this.etapa.obstaculos) {
        if (this.personaje.chocaCon(o)) {
          this.estado = "perdiste";
          return;
        }
      }

      if (this.personaje.x + this.personaje.ancho >= width) {
        this.siguienteEtapa();
      }
    } else {

      let ene = this.etapa.enemigo;
      if (ene && !this.etapa.derrotado) {
        let d = dist(
          this.personaje.x + this.personaje.ancho/2,
          this.personaje.y + this.personaje.alto/2,
          ene.x, ene.y
        );

        if (d < ene.r + 20) {
          this.etapa.derrotado = true;
          this.estado = "ganaste";
        }
      }
    }
  }

  dibujar() {
    this.etapa.dibujar();
    this.personaje.dibujar();

    fill(255);
    textAlign(CENTER);

    if (this.estado === "perdiste") {
      textSize(30);
      text("¡PERDISTE!", width/2, height/2 - 30);
      textSize(16);
      text("R = reiniciar", width/2, height/2);
    }

    if (this.estado === "ganaste") {
      textSize(22);
      fill(255, 230, 100);
      text("¡Lo derrotaste!", width/2, height/2);
      textSize(14);
      text("R para jugar de nuevo", width/2, height/2 + 30);
    }
  }

  siguienteEtapa() {
    this.etapaActual++;
    if (this.etapaActual > 5) this.etapaActual = 5;

    this.personaje.reset();
    this.etapa = new Etapa(this.etapaActual);
    this.estado = "jugando";
  }

  reiniciar() {
    this.etapaActual = 1;
    this.personaje = new Personaje(20, height - 120);
    this.etapa = new Etapa(this.etapaActual);
    this.estado = "jugando";
  }
}
