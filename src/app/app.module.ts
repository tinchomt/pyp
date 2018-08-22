import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";


//Rutas
import{APP_ROUTING} from './app.routes';

//Servicios
import{PersonasService} from './servicios/personas.service'
 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PersonaFisicaComponent } from './components/persona-fisica/persona-fisica.component';
import { ProcesaListaPipe } from './pipes/procesa-lista.pipe';

import { ButtonModule } from 'primeng/button';

import {PanelModule} from 'primeng/panel';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuscadorComponent,
    PersonaFisicaComponent,
    ProcesaListaPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    HttpModule,
    ButtonModule,
    PanelModule,
    TableModule
  ],
  providers: [ 
    PersonasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
