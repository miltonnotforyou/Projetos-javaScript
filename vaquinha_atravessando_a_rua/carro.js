//código dos carros

let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3]
let xCarros = [600, 600, 600, 600, 600, 600]
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
    for(let i = 0; i < imageCarros.length; i++){
      image(imageCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
      }
}

function movimentaCarro(){
  for(let i = 0; i < imageCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
    }
  
}

function voltaPosicaoInicialCarro(){
  for(let i = 0; i < imageCarros.length; i++){
    if (passoTodaATela(xCarros[i])) {
      xCarros[i] = 600;

    }
  }
}

function passoTodaATela(xCarros){
  return xCarros < -50;
}