import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { PlanWriteComponent } from './plan-write/plan-write.component';
import { PlanUploadComponent } from './plan-upload/plan-upload.component';
import { ConfWriteComponent } from './conf-write/conf-write.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanWriteComponent,
    PlanUploadComponent,
    ConfWriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
