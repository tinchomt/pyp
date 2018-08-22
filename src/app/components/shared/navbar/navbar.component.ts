import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {

  }

  
  buscarPersona(valor:string){

    console.log(valor);
     this.route.navigate( ['/buscar', valor] );

  }

}
