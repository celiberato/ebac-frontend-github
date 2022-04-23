import { Component, Input } from '@angular/core';
import { CarsService } from "../app/shared/services/cars.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  listaCarros: any[];
  listaMotos: any[];

  filtroCarro: string;
  filtroMoto: string;

  constructor(protected carsService: CarsService ) {
  }

  generateCarros(){
    this.listaCarros = this.carsService.generateCarros();
  }

  generateMotos(){
    this.listaMotos = this.carsService.generateMotos();
  }

  limparTudo(){
    this.listaCarros = [];
    this.listaMotos = [];
  }

  aplcarFiltroCarro(event){
    const value = event.target.value.toUpperCase();

    this.listaCarros = this.carsService.generateCarros()
      .filter(carro => carro.marca.toUpperCase().includes(value))
  }

  aplcarFiltroMoto(event){
    const value = event.target.value.toUpperCase();

    this.listaMotos = this.carsService.generateMotos()
      .filter(moto => moto.marca.toUpperCase().includes(value))
  }

}
