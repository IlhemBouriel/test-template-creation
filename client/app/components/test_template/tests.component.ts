import { Component,Input ,Output  } from '@angular/core';
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
    message: string;
    load: string;
    done: string;
    fullPath: string;
    finalTask: string;
    @Input() definedSteps:Object[];




    constructor(private testService:TestService){
        console.log('TestComponent created');
        this.stepNum = 1;
        this.templateString='';
        this.message = '';
        this.load= __dirname+'/../src/images/loading.gif';
        this.done= __dirname+'/../src/images/spin.gif';
        this.finalTask= __dirname+'/../src/images/check-animation.gif';
        this.fullPath ='';
        
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
      this.fullPath = this.done;
      this.message = 'Saving File is in progress';
      this.openModal();
      if(this.stepNum == 1)
      {
      this.templateFile=step.doc+'.conf';
      }
      this.templateString=step.content;
      var content = this.templateString;
      content = content.replace(/\n/g, '\r');
      this.testService.createTemplate(this.templateFile,content)
            .subscribe(res => {
            this.res = res;
            this.message = 'ConfFile saved successfully';
            this.fullPath=this.done;
            setTimeout(() => 
          {
          this.closeModal();
          },
          1800);

         });
    }


    lauchTestScript(template:any):void
    {
      console.log('test executed');
      this.fullPath = this.load;
      this.message = '';
      this.openModal();
      this.message = 'Test was executed';
            this.fullPath=this.done;
            setTimeout(() => 
          {
          this.closeModal();
          },
          4000);
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
            this.message = 'Test was executed';
            this.fullPath=this.done;
            setTimeout(() => 
          {
          this.closeModal();
          },
          1800);

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

    openModal()
    {
      var modal = document.getElementById('myModalConf');

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      modal.style.display = "block";
    }


    closeModal()
    {
      var modal = document.getElementById('myModalConf');
      modal.style.display = "none";
    }
}
