//atores do jogo

//Ator
let yAtor = 366
let xAtor = 85
let colisao = false
let meusPontos = 0

function mostraAtor(){
  image(imageDoAtor, xAtor, yAtor, 30, 30 );
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imageCarros.length; i++){
  colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
  if(colisao){
    voltaAtorParaPosicaoInicial();
    somColisao.play()
    if(PontosMaiorQueZero()){
      meusPontos -= 1;
    }
  }
}
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 360;
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(75,0,130))
  text(meusPontos, width / 5, 30);
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    somDoPonto.play()
    voltaAtorParaPosicaoInicial()
  }
}

function PontosMaiorQueZero(){
  return meusPontos > 0
  
}

function podeSeMover(){
  return yAtor < 360;
  
}
