import { Component } from '@angular/core';
import {TestService} from './services/test.service';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[TestService]
})

export class AppComponent { }
