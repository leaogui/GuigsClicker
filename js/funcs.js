const Jogador = require('player');

function novoPlayer()
{
    
    player = new Jogador(document.getElementById("nome"), document.getElementById("idade"));

    test();

}