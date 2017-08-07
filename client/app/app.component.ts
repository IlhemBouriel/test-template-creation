import { Component } from '@angular/core';
import {TestService} from './services/test.service';
import {TagService} from './services/tags.service';
import {PlanService} from './services/plan.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[TestService,TagService,PlanService]
})

export class AppComponent { }
