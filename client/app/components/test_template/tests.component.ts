import { Component } from '@angular/core';
import {StepsComponent}from '../step/steps.component';
import {TestService} from '../../services/test.service';

@Component({
  moduleId: module.id,
  selector: 'tests',
  templateUrl: 'tests.component.html'

})


export class TestsComponent { 
  	

    stepNum:number;
    templateString:string;
    templateFile : string;


    constructor(private testService:TestService){
        console.log('TestComponent created');
        this.stepNum = 1;
        this.templateString='';
    }

    buildTemplate(step:any):void
    {
    if(this.stepNum == 1)
    {
      this.templateFile=step.doc+'.conf';
    }
    this.stepNum ++ ;
    this.templateString=step.content;
    }

    createTemplateFile(step:any):void
    {
      if(this.stepNum == 1)
      {
      this.templateFile=step.doc+'.conf';
      }
      this.templateString=step.content;
      var content = "'"+this.templateString+"'";
      content = content.replace(/\n/g, '\r');
      this.testService.createTemplate(this.templateFile,content)
            .subscribe(res => {
            this.res = res;

         });
    }


    lauchTestScript(template:any):void
    {
    if(this.stepNum == 1)
    {
      this.templateFile=step.doc+'.conf';
    }
    this.templateString=template.content;
    var content = "'"+this.templateString+"'";
    content = content.replace(/\n/g, '\r');
    this.testService.launchTemplateTest(this.templateFile,content)
            .subscribe(res => {
            this.res = res.data;

         });
    }

    validateSteps(step:any):void
    {
     if(this.stepNum == 1)
      {
      this.templateFile=step.doc+'.conf';
      }
    this.templateString = step.content;
    this.stepNum = 8 ;
    this.templateString=step.content;
    }
}
