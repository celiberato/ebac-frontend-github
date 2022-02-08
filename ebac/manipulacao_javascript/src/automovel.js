const RODAS_CARRO = 4;
const RODAS_MOTO = 2;


class Automovel {

    constructor(marca, modelo, rodas, valor){
        this.marca = marca
        this.modelo = modelo
        this.rodas = rodas
        this.valor =  valor
    }

    acelerar(){
        console.log(this.modelo + ' ' + this.marca + ': acelerar')
    }

    freiar(){
        console.log(this.modelo + ' ' + this.marca + ': freiar')
    }

    ligar(){
        console.log(this.modelo + ' ' + this.marca + ': ligar')
    }

    desligar(){
        console.log(this.modelo + ' ' + this.marca + ': desligar')
    }

    rodas(){
        console.log(this.modelo + ' ' + this.marca + ' ' + this.rodas + ' rodas')
    }

    valor(){
        console.log(this.modelo + ' ' + this.marca + ' ' + this.valor + ' Reais')
    }

}

class Carro extends Automovel{
    constructor(marca, modelo, portas, valor){
        super(marca, modelo, RODAS_CARRO, valor);

        this.portas = portas
    }

    portas(){
        console.log(this.modelo + ' ' + this.marca + ' ' + this.portas + ' portas')
    }

}


class Moto extends Automovel{
    constructor(marca, modelo, valor){
        super(marca, modelo, RODAS_MOTO, valor);
    }
}

export { Carro, Moto }