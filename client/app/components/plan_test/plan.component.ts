import { Component } from '@angular/core';
import {StepsComponent}from '../step/steps.component';
import {TestService} from '../../services/test.service';

@Component({
  moduleId: module.id,
  selector: 'plan',
  templateUrl: 'plan.component.html'

})


export class PlanTestComponent { 

    testCaseNum:number;
    currentTestCase : number;
    testCase:string;
    description:string;
    evol:string;
    template:string;
    testCases: any[] = [{}];


    constructor(private testService:TestService){
        console.log('PlanComponent created');
        this.testCaseNum = 1;
        this.currentTestCase = 0;
        this.template = '';
        let steps = [
        {
            'dn':'',
            'ed':''
        }];
        this.testCases = [{
        'name':'',
        'description':'',
        'stepNum':1,
        'steps':steps
        }];
   }


    removeTestCase()
    {
      this.testCaseNum --;
      this.testCases.splice(this.currentTestCase,1);
      if (this.currentTestCase == 0)
      {
        this.currentTestCase ++;
      }
      else
      {
      this.currentTestCase -- ;
      }
   }


    getNextStep(testCase)
    {
      this.testCases[this.currentTestCase].stepNum ++;
      this.testCases[this.currentTestCase].steps.push({ 
                'dn': "",
                'ed': "",
            });
      if (this.testCases[this.currentTestCase].stepNum == 8)
      {
        this.nextTestCase();
      }

    }


    RemoveStep(index)
    {
      this.testCases[this.currentTestCase].steps.splice(index,1);
      this.testCases[this.currentTestCase].stepNum --;

    }

    validateTemplate()
    {
      this.testCaseNum = 11;
     /* for (let step of this.steps) 
      {
        this.template = this.template + 'Step'+step.num+'\t'+step.dn+'\t'+step.ed+'\n';
      }*/

    }



    nextTestCase()
    {
      if (this.currentTestCase + 1 == this.testCases.length)
      {
      this.testCaseNum ++;
      let steps = [
        {
            'num':1,
            'dn':'',
            'ed':''
        }];
      this.testCases.push({
        'name':'',
        'description':'',
        'stepNum':1,
        'steps':steps
      });
      }
      this.currentTestCase ++;

    }


    previousTestCase()
    {
      this.currentTestCase = 0 ;
      if(this.testCaseNum == 11)
      {
      this.testCaseNum = this.testCases.length  ;
      }
    }


   
}
