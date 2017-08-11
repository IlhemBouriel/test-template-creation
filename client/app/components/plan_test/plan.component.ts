import { Component } from '@angular/core';
import {StepsComponent}from '../step/steps.component';
import {TestService} from '../../services/test.service';
import {PlanService} from '../../services/plan.service';

@Component({
  moduleId: module.id,
  selector: 'plan',
  templateUrl: 'plan.component.html',
  styleUrls: ['plan.component.css'],


})


export class PlanTestComponent { 

    testCaseNum:number;
    currentTestCase : number;
    testCase:string;
    description:string;
    evol:string;
    testCases: any[] = [{}];
    contentTestPlan: string;
    message: string;
    load: string;
    done: string;
    fullPath: string;
    finalTask: string;


    constructor(private planService:PlanService){
        console.log('PlanComponent created');
        this.contentTestPlan = '';
        this.message = '';
        this.testCaseNum = 1;
        this.currentTestCase = 0;
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
        this.load= __dirname+'/../src/images/loading.gif';
        this.done= __dirname+'/../src/images/spin.gif';
        this.finalTask= __dirname+'/../src/images/check-animation.gif';
        this.fullPath ='';
      
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
      if (this.evol != null && this.testCases[this.currentTestCase].steps[0].ed != "" &&  this.testCases[this.currentTestCase].steps[0].dn != "" && this.testCases[this.currentTestCase].name != "")
      {
        this.testCaseNum = 11;
        this.contentTestPlan='';
        let sum = 0;
        for (let testCase of this.testCases) 
        {
        this.contentTestPlan =this.contentTestPlan+"TestPlan:\t"+this.evol+ "\n#####################################################################################################################\nTestCase:\t"+testCase.name+"\n Description:\t"+testCase.description+"\n";
        for(let step of testCase.steps)
        {
        sum = testCase.steps.indexOf(step)+1;
          this.contentTestPlan = this.contentTestPlan + "\t\tStep"+sum+"\t\t"+step.dn+"\t\t"+step.ed+"\n";
        }
        this.contentTestPlan=this.contentTestPlan + "#####################################################################################################################\n";
        }

      }
      

    }



    nextTestCase()
    {
      if (this.testCaseNum == 9)
      {
        this.validateTemplate();
      }
      else
      {
        if (this.evol != null && this.testCases[this.currentTestCase].steps[0].ed != "" &&  this.testCases[this.currentTestCase].steps[0].dn != "" && this.testCases[this.currentTestCase].name != "")
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
      }
      
      
    }


    previousTestCase()
    {
      if(this.testCaseNum == 11)
      {
      this.currentTestCase = this.testCases.length - 1 ;
      this.testCaseNum = this.testCases.length  ;
      console.log("go to "+this.testCases.length);
      console.log('nombre = '+this.testCaseNum);
      }
      else
      {
      this.currentTestCase -- ;
      console.log('nombre = '+this.testCaseNum);
      }
    }


    pushFileToRep()
    {
      this.fullPath = this.load;
      this.message = 'Saving is in progress';
      this.openModal();
     var content = "'"+this.contentTestPlan+"'";
      content = content.replace(/\n/g, '\r');
      this.planService.saveTestPlan(this.evol,content)
            .subscribe(res => {
            this.message = 'TestPlan file saved successfully';
            this.fullPath=this.done;
            setTimeout(() => 
          {
          this.closeModal();
          },
          1800);
           
    });
    }

    sendAndSaveTestPlan()
    { 
      this.fullPath = this.load;
      this.message = 'sending is in progress';
      this.openModal();
      var content = this.contentTestPlan;
      content = content.replace(/\n/g, '\r');
      this.planService.sendEmailAndSave(this.evol,content)
            .subscribe(res => {
            this.res = res.data;
            this.message = 'email was sent successfully';
            this.fullPath=this.done;
            //setTimeout(this.closeModal(), 100000000000);
           setTimeout(() => 
          {
          this.closeModal();
          },
          1500);
          this.pushFileToRep();
            

         });
    }


    openModal()
    {
      var modal = document.getElementById('myModal');

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      modal.style.display = "block";
      }


    closeModal()
    {
      var modal = document.getElementById('myModal');
      modal.style.display = "none";
    }


   
}
