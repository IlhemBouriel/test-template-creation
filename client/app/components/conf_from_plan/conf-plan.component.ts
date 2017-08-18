import { Component } from '@angular/core';
import {PlanConfService} from '../../services/plan-conf.service';


@Component({
  moduleId: module.id,
  selector: 'conf-plan',
  templateUrl: 'conf-plan.component.html',
  styleUrls: ['conf-plan.component.css']
})


export class ConfPlanComponent { 
filesToUpload: Array<File> = [];
uploadStatus: string;
content: :any[] = [{}];

  constructor(private planConfService : PlanConfService) 
  {
  this.uploadStatus= 'empty';
  this.content = [];
  }


  upload() 
  {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append("uploads[]", files[0], files[0]['name']);
    this.planConfService.uploadTestPlan(formData)
            .subscribe(res => {
            this.res = res;
            this.getUploadedFileContent(files[0]['name']);
  });
  }
    
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.content = [];
    this.uploadStatus = "empty";
  }


  remove()
  {
    this.filesToUpload = [];
    this.uploadStatus = "empty";
    this.content =[];
  }

  getUploadedFileContent(fileName)
  {

       this.planConfService.getFileContent(fileName)
            .subscribe(res => {
            if (res.data)
            {

  setTimeout(()=>{
              this.content = JSON.parse(res.data);
  });
              this.uploadStatus = 'done';

              console.log("object: %O", this.content);
              
            }
            else
            {
              this.content = [];
            }    

  });
  }



}

