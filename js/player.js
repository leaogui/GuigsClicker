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
        console.log("oi");
    }

}

module.exports = Jogador;
