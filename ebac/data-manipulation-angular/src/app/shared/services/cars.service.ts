import { Injectable } from '@angular/core';
import { Carro } from '../models/carro.model';
import { Moto } from '../models/moto.model';

@Injectable({
  providedIn: 'root'
})

export class CarsService {

  constructor() { }

  generateCarros(): any {
    let listaCarros:any = [];

    listaCarros[0] = new Carro("Fiat", "Paleo", 2, 35000);
    listaCarros[1] = new Carro("Volkswagger", "Passat", 4, 65000);
    listaCarros[2] = new Carro("Ford", "Ka", 2, 25000);
    listaCarros[3] = new Carro("Audi", "A3", 2, 45000);

    return listaCarros;
  }


  generateMotos(): any {
    let listaMotos:any = [];

    listaMotos[0] = new Moto("Suzuki", "Honda", 35000);
    listaMotos[1] = new Moto("Xc3", "Honda", 65000);
    listaMotos[2] = new Moto("Ninja", "Honda", 25000);
    listaMotos[3] = new Moto("XT", "Suzuki", 45000);
    listaMotos[4] = new Moto("Harley Deivison - M1", "Harley", 45000);
    listaMotos[5] = new Moto("Harley Deivison - HBAHB", "Harley", 45000);
    listaMotos[6] = new Moto("Harley Deivison - ÇASKD", "Harley", 45000);

    return listaMotos;
  }

}
