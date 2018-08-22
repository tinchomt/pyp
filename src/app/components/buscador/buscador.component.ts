import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PersonasService } from '../../servicios/personas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  personas:any[] = [];
  parametro:string;
  cargando:boolean=true;
  

  constructor(private activatedRoute:ActivatedRoute,
              private _personasService:PersonasService) { 

                activatedRoute.params.subscribe( parametros => {

                  // console.log( parametros );
                  console.log( parametros['valor'] );
                  _personasService.buscarPersona( parametros['valor'] )
                      .subscribe( res=> {
                        
                        this.parametro = parametros['valor'];
                        this.personas = res.json();
                        this.cargando = false;
                        console.log( this.personas );
                  });
            
                } )

              }

  ngOnInit() {


    
  }

}
