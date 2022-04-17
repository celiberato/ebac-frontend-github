import { Automovel } from './automovel.model';

const RODAS_CARRO = 4;

export class Carro extends Automovel{


    constructor(marca, modelo, portas, valor){
        super(marca, modelo, RODAS_CARRO, valor);

        this.portas = portas;
    }

    portas(){
        console.log(this.modelo + ' ' + this.marca + ' ' + this.portas + ' portas')
    }

}

export default Carro;