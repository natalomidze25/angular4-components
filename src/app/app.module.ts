import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { ButtonSearchComponent } from './button-search/button-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent,
    StudentInfoComponent,
    ButtonSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
