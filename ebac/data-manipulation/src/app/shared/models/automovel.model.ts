import { AbstractModel } from './abstract-model';

export class Automovel extends AbstractModel<number> {

    marca: string;
    modelo: string;
    rodas: Number;
    valor: Number;

    constructor(marca: string, modelo: string, rodas: number, valor: number) {
        super();
        this.marca = marca
        this.modelo = modelo
        this.rodas = rodas
        this.valor = valor
    }

    acelerar() {
        console.log(this.modelo + ' ' + this.marca + ': acelerar')
    }

    freiar() {
        console.log(this.modelo + ' ' + this.marca + ': freiar')
    }

    ligar() {
        console.log(this.modelo + ' ' + this.marca + ': ligar')
    }

    desligar() {
        console.log(this.modelo + ' ' + this.marca + ': desligar')
    }

    quantidadeRodas() {
        console.log(this.modelo + ' ' + this.marca + ' ' + this.rodas + ' rodas')
    }

    valorAutomovel() {
        console.log(this.modelo + ' ' + this.marca + ' ' + this.valor + ' Reais')
    }

}
