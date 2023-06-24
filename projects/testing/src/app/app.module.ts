import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxReactiveFormsVisualizerModule } from 'ngx-reactive-forms-visualizer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxReactiveFormsVisualizerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
