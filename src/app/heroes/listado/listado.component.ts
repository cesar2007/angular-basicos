import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
  
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Capitan american', 'Thor'];
  heroeBorrado: string = "";

  borrarHeroe(): void {
    console.log('borrando...' + this.heroes[0]);
    this.heroeBorrado = this.heroes.shift() || '';
  };
}
