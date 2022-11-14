//variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametre = 15;
let raio = diametre / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6

// variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let cRaquete = 10;
let aRaquete = 90;

//variaveis oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeXOponente = 6
let velocidadeYOponente = 6

let colisao = false

// placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

// Chance do oponente errar
let chanceDeErrar = 0;

function preload(){
  trilha = loadSound("trilha.mp3")
  raquetada = loadSound("raquetada.mp3")
  ponto = loadSound("ponto.mp3")
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();  
  verificaTocaBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete1();
  //verificaTocaRaquete(xRaquete, yRaquete)
  colisaoRaquete(xRaquete, yRaquete)
  mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentoRaquete2()
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  incluiPlacar()
  marcaPonto()
  bolinhaNaoFicaPresa()
  }

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametre);  
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaTocaBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0 ){
    velocidadeXBolinha *= -1;  
  }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *=-1  
  }
}

function mostraRaquete(x, y) {
  rect(x, y, cRaquete, aRaquete)
}

function movimentaRaquete1(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete -= -10;
  }
}

function verificaTocaRaquete(){
  if (xBolinha - raio < xRaquete + cRaquete && yBolinha - raio < yRaquete + aRaquete && yBolinha + raio > yRaquete){
   velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function colisaoRaquete(x, y){
  colisao = collideRectCircle(x, y, cRaquete, aRaquete, xBolinha, yBolinha, raio);
  if(colisao){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentoRaquete2(){
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente -= -10;
  }
  
}

function movimentoRaquete2(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - cRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}

function incluiPlacar(){
  stroke(255)
  textSize(16);
  textAlign(CENTER);
  fill(255, 140, 0);
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(255, 140, 0);
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
   pontosOponente += 1;
    ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
