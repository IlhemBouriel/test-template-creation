import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TestsComponent} from './components/test_template/tests.component';
import {StepsComponent} from './components/step/steps.component';
import {PlanTestComponent} from './components/plan_test/plan.component'
import {TagsComponent}  from './components/tags/tags.component';
import {MyFilterPipe} from './components/shared/my-filter.pipe';
import {ValFilterPipe} from './components/shared/filter-values';
import {HighlightSearch } from './components/shared/high-filter';

import {ConfPlanComponent} from './components/conf_from_plan/conf-plan.component';
import { FileUploadModule } from 'ng2-file-upload';



@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, FileUploadModule],
  declarations: [AppComponent, TestsComponent,StepsComponent,TagsComponent,PlanTestComponent,MyFilterPipe,ValFilterPipe,HighlightSearch,ConfPlanComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
