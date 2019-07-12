import { Routes, RouterModule } from "@angular/router";

import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';

const APP_ROUTES: Routes = [
    
    { path: "link_1", component: Pagina1Component },
    { path: "link_2", component: Pagina2Component }
    
    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
