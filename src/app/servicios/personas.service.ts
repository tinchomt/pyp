import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class PersonasService {


  personas:any[] = []

  cargando:boolean=true;

  constructor(private http:Http) {
    console.log("Servicio listo para usar");

    // this.buscarPersona("27898586");

   }

   buscarPersona(valor:string){

    console.log("cargar: "+valor);      

    return this.http.get(`http://192.200.29.204:8080/web-api-pyp-1.0/api/buscaPersona/${ valor }/M`);
    
   }


   consultarPersonaF(dni:string, sexo:string){

    console.log("cargar: "+dni);      

    // console.log(`http://localhost:8080/PypAPI/rest/serviciospyp/persona/mati_nue/s4b3rl4/${ dni }/${ sexo }/json/`);      
    // return this.http.get(`http://localhost:8080/PypAPI/rest/serviciospyp/persona/mati_nue/s4b3rl4/${ dni }/${ sexo }/json/`);

    console.log(`http://localhost:8080/PypAPI/rest/utils/buscarPersona/${ dni }/${ sexo }`);      
    return this.http.get(`http://localhost:8080/PypAPI/rest/utils/buscarPersona/${ dni }/${ sexo }`);


    // return this.http.get(`https://www.pypdatos.com.ar/PypAPI/rest/serviciospyp
    //                         /persona/mati_nue/s4b3rl4/${ dni }/${ sexo }/json/`);

    
   }


}
