import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BasicPreModule } from 'ngx-reactive-forms-visualizer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BasicPreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
