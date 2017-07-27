import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';


const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'app-plan-write',
  templateUrl: './plan-write.component.html',
  styleUrls: ['./plan-write.component.css']
})
export class PlanWriteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
