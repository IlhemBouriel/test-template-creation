import { Component } from '@angular/core';



@Component({
  moduleId: module.id,
  selector: 'conf-plan',
  templateUrl: 'new-conf.component.html',
  styleUrls: ['new-conf.component.css']

})


export class ConfPlanComponent { 

  constructor() { }

  ngOnInit() {
  }

  sendFile(event)
  {
  console.log('here');
    console.log(event);
  }

}