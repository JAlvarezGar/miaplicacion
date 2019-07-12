import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { APP_ROUTING } from "./app.routes";
import { EncabezadoComponent } from "./components/encabezado/encabezado.component";
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';

import { SegundolinkComponent } from "./components/segundolink/segundolink.component";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Pagina2Component } from './components/pagina2/pagina2.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CuerpoComponent,
    EncabezadoComponent,
    SegundolinkComponent,
    Pagina2Component
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
