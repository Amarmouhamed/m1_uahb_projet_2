import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListLivreComponent } from './livre/list-livre/list-livre.component';
import { AddLivreComponent } from './livre/add-livre/add-livre.component';
import { EditLivreComponent } from './livre/edit-livre/edit-livre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListLivreComponent,
    AddLivreComponent,
    EditLivreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
