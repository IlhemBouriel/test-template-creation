import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {TestsComponent} from './components/test_template/tests.component';
import {MyFilterPipe} from './components/shared/my-filter.pipe';
import {ValFilterPipe} from './components/shared/filter-values';



@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [AppComponent, TasksComponent, TestsComponent,MyFilterPipe, ValFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
