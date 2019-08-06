import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { APP_ROUTING } from './app.routes';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/navbar/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { PruebaService } from './servicios/prueba.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CuerpoComponent,
    EncabezadoComponent,
    Pagina2Component,
    Pagina1Component
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
