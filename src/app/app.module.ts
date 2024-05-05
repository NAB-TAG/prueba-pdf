import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { PdfLibTestComponent } from './pdf-lib-test/pdf-lib-test.component';
// import { JsPdfTestModule } from './pdf-lib-test/js-pdf-test.module';



@NgModule({
  declarations: [
    AppComponent,
    PdfLibTestComponent
  ],
  imports: [
    BrowserModule,
    // JsPdfTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
