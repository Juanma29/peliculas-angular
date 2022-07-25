import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { PeliculaAleatoriaComponent } from './components/pelicula-aleatoria/pelicula-aleatoria.component';
import { AnfitrionComponent } from './components/anfitrion/anfitrion.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    JuegosComponent,
    PeliculaAleatoriaComponent,
    AnfitrionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
