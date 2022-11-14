//imagens e sons do jogo
let imageDaEstrada;
let imageDoAtor;
let imageCarro;
let imageCarro2;
let imageCarro3;

//sons do jogo
let somDaTrilha;
let somColisao;
let somDoPonto;

function preload(){
  imageDaEstrada = loadImage("images/estrada.png")
  imageDoAtor = loadImage("images/ator-1.png")
  imageCarro = loadImage("images/carro-1.png")
  imageCarro2 = loadImage("images/carro-2.png")
  imageCarro3 = loadImage("images/carro-3.png")
  imageCarros = [imageCarro, imageCarro2, imageCarro3, imageCarro, imageCarro2, imageCarro3]
  
  somDaTrilha = loadSound("sons/trilha.mp3")
  somColisao = loadSound("sons/colidiu.mp3")
  somDoPonto = loadSound("sons/pontos.wav")

}
