import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonasService } from '../../servicios/personas.service';
import {Persona} from "../../model/persona.model";
import {Moviles} from "../../model/moviles.model";

@Component({
  selector: 'app-persona-fisica',
  templateUrl: './persona-fisica.component.html',
  styles: []
})

export class PersonaFisicaComponent implements OnInit {

  personaFisica:any[] = [];
  cargando:boolean=true;
  score:string;
  listaScore:any[] = [];
  listaExistenciaFisica:any[] = [];
  persona:Persona;
  listaMoviles: any[] =  [];
  moviles : Moviles[] = [];
  colsMoviles: any[];
  selectedCar2: Moviles;

  score_imagen:string;
  lista_rango_socioeconomico:any[] = [];
  rango_socioeconomico_numb:number;
  rango_socioeconomico:string;
  lista_emails: any[] = [];
  listaRelDependenciaTrabajador:any[] = [];
  listaRelDependenciaEmpleador:any[] = [];

  capacidadEndeudamiento:string;

  listaHistoriaLaboral:any[];




  constructor(private route: ActivatedRoute,private _personasService:PersonasService) { 

    console.log("DNI: ",this.route.snapshot.params['dni'])
    console.log("Sexo: ",this.route.snapshot.params['sexo'])
    
      // console.log( parametros );
    
      _personasService.consultarPersonaF( this.route.snapshot.params['dni'], this.route.snapshot.params['sexo'])
          .subscribe( res=> {
            
            this.personaFisica = res.json();
            this.cargando = false;
            
            console.log( this.personaFisica );            
            //console.log( JSON.stringify(this.personaFisica));

            //Obtengo Score
            this.listaScore= this.personaFisica['lista_Score'];
           // console.log("Score: "+this.personaFisica['lista_Score'].score);
            this.score = this.listaScore['score'];
            //console.log("Score 1: "+this.listaScore['score']);
            this.score_imagen = "http://www.peype.com/score/GraficoScore?score="+this.score;
            //console.log("Score Img: "+this.score_imagen);

            //Obtengo Existencia Fisica
            this.persona = this.personaFisica['listaExistenciaFisica'];
            //console.log("Nombre: "+ this.persona.ape_nom );



            //Obtengo Moviles
             // console.log("Moviles: "+ this.personaFisica['listaBienesMoviles']);
              if(this.personaFisica['listaBienesMoviles'] != undefined){
                this.colsMoviles = [                  
                  { field: 'c_dominio', header: 'Dominio' },
                  { field: 'mca_autom', header: 'Marca' },
                  { field: 'x_modelo', header: 'Modelo' }
                ];
                if(this.personaFisica['listaBienesMoviles'].length > 1){
                  this.listaMoviles = this.personaFisica['listaBienesMoviles'];
                  this.moviles = this.personaFisica['listaBienesMoviles'];
                  console.log("Moviles 1: "+ this.moviles.length)
                }else{
                
                  this.listaMoviles.push(this.personaFisica['listaBienesMoviles']);
                  this.moviles.push(this.personaFisica['listaBienesMoviles']);
                  console.log("Moviles 2: "+ this.moviles.length)
                  
                }           
              }

            //Obtengo Rango Socioeconomico
            if(this.personaFisica['listaRangoSocioeconomico'] != undefined){            
                this.lista_rango_socioeconomico = this.personaFisica['listaRangoSocioeconomico']; 
                this.rango_socioeconomico_numb =  this.lista_rango_socioeconomico['RANGO_SOCIOECONOMICO']; 
               // console.log("Rango: "+this.rango_socioeconomico_numb  );
                if(this.rango_socioeconomico_numb < 10){

                  this.rango_socioeconomico= "R0"+this.rango_socioeconomico_numb+"_2";
                }else{
                  this.rango_socioeconomico= "R"+this.rango_socioeconomico_numb+"_2";
                }
                //console.log("Rango 2:  "+this.rango_socioeconomico  );
            }

             //Obtengo Mails
              //console.log("Mails: "+ this.personaFisica['listaEmails']);
              if(this.personaFisica['listaEmails'] != undefined){
                if(this.personaFisica['listaEmails'].length > 1){
                  this.lista_emails = this.personaFisica['listaEmails'];
                }else{
                  this.lista_emails.push(this.personaFisica['listaEmails']);
                }           
              }

              //Obtengo Capacidad Endeudamiento
              this.capacidadEndeudamiento = this.personaFisica['listaCapacidadEndeudamiento'].capacidad_endeudamiento;
              console.log("Cap Endeuda: "+this.personaFisica['listaCapacidadEndeudamiento'].capacidad_endeudamiento);

            // console.log("Lista: "+ this.personaFisica['listaBienesMoviles'] );
            // this.listaMoviles = this.personaFisica['listaBienesMoviles'];            
            // console.log("Lista 2: "+ this.listaMoviles);
            // console.log( JSON.stringify(this.personaFisica));
            // console.log("Moviles1: "+ this.listaMoviles.length );
          

            //Obtengo Persona Relacion Dependencia Datos Trabajador
            console.log("Trabajador: "+ this.personaFisica['listaPersonaRelDepDatosTrabajador']);
            if(this.personaFisica['listaPersonaRelDepDatosTrabajador'] != undefined){
              if(this.personaFisica['listaPersonaRelDepDatosTrabajador'].length > 1){
                this.listaRelDependenciaTrabajador = this.personaFisica['listaPersonaRelDepDatosTrabajador'];
              }else{
                this.listaRelDependenciaTrabajador.push(this.personaFisica['listaPersonaRelDepDatosTrabajador']);
              }           
            }

            //Obtengo Persona Relacion Dependencia Datos Empleador
            // console.log("Empleador: "+ this.personaFisica['listaPersonaRelDepDatosEmpleador']);
            if(this.personaFisica['listaPersonaRelDepDatosEmpleador'] != undefined){
              if(this.personaFisica['listaPersonaRelDepDatosEmpleador'].length > 1){
                this.listaRelDependenciaEmpleador = this.personaFisica['listaPersonaRelDepDatosEmpleador'];
              }else{
                this.listaRelDependenciaEmpleador.push(this.personaFisica['listaPersonaRelDepDatosEmpleador']);
              }           
            }

            
            // Historia Laboral
            console.log("Historia Laboral: "+ this.personaFisica['listaPersonaRelDepHistoriaLaboral']);
            if(this.personaFisica['listaPersonaRelDepHistoriaLaboral'] != undefined){
              if(this.personaFisica['listaPersonaRelDepHistoriaLaboral'].length > 1){
                this.listaHistoriaLaboral = this.personaFisica['listaPersonaRelDepHistoriaLaboral'];
              }else{
                this.listaHistoriaLaboral.push(this.personaFisica['listaPersonaRelDepHistoriaLaboral']);
              }           
            }

          });

  }

  ngOnInit() {
  }

  
  selectCarWithButton(car: Moviles) {
    this.selectedCar2 = car;
    console.log(this.selectedCar2.c_dominio);

    // this.messageService.add({severity:'info', summary:'Car Selected', detail:'Vin: ' + car.vin});
}
}
