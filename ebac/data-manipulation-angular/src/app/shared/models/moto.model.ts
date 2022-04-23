import { Automovel } from './automovel.model';

const RODAS_MOTO = 2;


export class Moto extends Automovel{

    constructor(marca: string, modelo: string, valor: number){
        super(marca, modelo, RODAS_MOTO, valor);
    }
}


export default Moto;