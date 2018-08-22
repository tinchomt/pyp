import{RouterModule,Routes} from '@angular/router';

import { BuscadorComponent } from './components/buscador/buscador.component';
import { PersonaFisicaComponent } from './components/persona-fisica/persona-fisica.component';


const APP_ROUTES: Routes = [
    
    { path: 'buscar/:valor', component: BuscadorComponent },
    { path: 'personaF/:dni/:sexo', component: PersonaFisicaComponent },
    {path:'**', pathMatch: 'full', redirectTo:'buscar'}
  ];

  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)