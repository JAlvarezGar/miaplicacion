import { Routes, RouterModule } from "@angular/router";

import { HeaderComponent } from './components/header/header.component';
import { SegundolinkComponent } from './components/segundolink/segundolink.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';

const APP_ROUTES: Routes = [
    
    { path: "link_1", component: Pagina2Component },
    { path: "link_2", component: SegundolinkComponent }
    
    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
