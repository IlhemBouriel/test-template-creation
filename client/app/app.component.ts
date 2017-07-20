import { Component } from '@angular/core';
import {TaskService} from './services/task.service';
import {TestService} from './services/test.service';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[TaskService, TestService]
})

export class AppComponent { }
