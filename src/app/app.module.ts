import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TranslatePipe } from './translate.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TranslatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
