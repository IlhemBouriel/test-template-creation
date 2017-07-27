import { Component } from '@angular/core';
import {TestService} from '../../services/test.service';
import {DefVar} from '../../../DefVar';
import {UnDefVar} from '../../../UnDefVar';
import {Choice} from '../../../Choice';

@Component({
  moduleId: module.id,
  selector: 'tests',
  templateUrl: 'tests.component.html',

})

export class TestsComponent { 
  	

  	defVars: DefVar[];
  	undefVars: UnDefVar[];
  	filterargs = {name: ''};
  	filterargs_val: string = '';
  	qtd:any[] = {};
  	choices : Choice[];
    urlValues:string[];
    dnValues:string[];
    edValues:string[];
    pathValues:string[];
    hostValues:string[];
    res:string;
    toShow:string;
    stepNum:number ;
    




    constructor(private testService:TestService){
        this.testService.getDefVars()
            .subscribe(vars => {
                this.defVars = vars.data;
            });

        this.testService.getUnDefVars()
            .subscribe(vars => {
                this.undefVars = vars.data;
            });

        this.testService.getOneDefVar('url')
            .subscribe(vars => {
            this.urlValues = vars.data[0].values;
         });

         this.testService.getOneDefVar('dn')
            .subscribe(vars => {
            this.dnValues = vars.data[0].values;
         });

         this.testService.getOneDefVar('ed')
            .subscribe(vars => {
            this.edValues = vars.data[0].values;
         });

          this.testService.getOneDefVar('path')
            .subscribe(vars => {
            this.pathValues = vars.data[0].values;
         });

         this.testService.getOneDefVar('host')
            .subscribe(vars => {
            this.hostValues = vars.data[0].values;
         });
        this.stepNum =1;
        this.qtd['sn']="Step 1";
        this.choices =[{id: 'choice1','name':'','var':null,'is_edit':true}];
        this.toShow = '';
    }

    addNewChoice()
    {
    	var newItemNo = this.choices.length+1;
    	this.choices.push({'id':'choice'+newItemNo,'name':'','var':null,'is_edit':true});
    }

    removeChoice()
    {
    //remove from qtd (to implement)
    var lastItem = this.choices.length-1;
    this.choices.splice(lastItem);
    }

    changeStatus(choice)
    {
    choice.is_edit = false;
    this.testService.getOneDefVar(choice.name)
            .subscribe(vars => {
            console.log(vars.data.length);
            if(vars.data.length == 1)
            {
                console.log("object: %O", vars.data);
                choice.var = vars.data;
            }
            else
            {
                choice.var = null ;
            }
    });


    }

    createTemplate(doc)
    {
    var content = "'"+document.getElementById("textArea").value+"'";
    content = content.replace(/\n/g, '\r');
    this.testService.createTemplate(doc,content)
            .subscribe(res => {
            this.res = res;

         });
    }

    getNextStep()
    {
    this.stepNum ++;
    this.qtd['sn']="Step "+this.stepNum;
    }

    addToSHow(key,value)
    {
    this.toShow = this.toShow +" "+key+": "+value+"\n";
    }


   
    
}
