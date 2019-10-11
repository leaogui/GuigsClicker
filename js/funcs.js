class Jogador{

    constructor(nome, idade){
        this.idade = idade;
        this.nome = nome;
    }

    getNome(){
        return this.nome;
    }

    getIdade(){
        return this.idade;
    }

    test(){
        alert(this.getIdade());
    }

}

function novoPlayer()
{

    player = new Jogador(document.getElementById("nome").value, document.getElementById("idade").value);

    player.test();

}