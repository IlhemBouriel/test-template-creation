import { Component } from '@angular/core';
import {StepsComponent}from '../step/steps.component';
import {TestService} from '../../services/test.service';

@Component({
  moduleId: module.id,
  selector: 'plan',
  templateUrl: 'plan.component.html'

})


export class PlanTestComponent { 
  	

    stepNum:number;
    testCase:string;
    description:string;
    evol:string;
    steps: any[] = [{}];
    template:string;


    constructor(private testService:TestService){
        console.log('PlanComponent created');
        this.stepNum = 1;
        this.testCase='';
        this.description = '';
        this.template = '';
        this.steps = [
        {
            'num':1,
            'dn':'',
            'ed':''
        }];
    

    }


    getNextStep()
    {
      this.stepNum ++;
      this.steps.push({ 
                'num': this.stepNum, 
                'dn': "",
                'ed': "",
            });
    }


    RemoveStep()
    {
      this.stepNum --;
      this.steps.splice(this.steps.length-1,1);
    }

    validateTemplate()
    {
    this.stepNum = 8;
    for (let step of this.steps) 
    {
    this.template = this.template + 'Step'+step.num+'\t'+step.dn+'\t'+step.ed+'\n';
    }

    }



   
}
