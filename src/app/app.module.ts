import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//Modulo presonalizado
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { RouterModule } from '@angular/router';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el local de la app
import localeEs from '@angular/common/locales/es-CO'
import localeFr from '@angular/common/locales/fr'

import { registerLocaleData } from '@angular/common'

registerLocaleData(localeEs)
registerLocaleData(localeFr)



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRouterModule,
    SharedModule,
    VentasModule,


  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



/* 
  !Notas

  141- Cambiar el idioma y su moneda a nivel global de la app
*/
