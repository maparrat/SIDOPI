import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonanteComponent } from './donante/donante.component';
import { ReceptorComponent } from './receptor/receptor.component';

@NgModule({
  declarations: [
    AppComponent,
    DonanteComponent,
    ReceptorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
