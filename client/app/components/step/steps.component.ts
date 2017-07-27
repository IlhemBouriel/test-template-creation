import { Component ,Input ,Output ,EventEmitter} from '@angular/core';
import {TestService} from '../../services/test.service';
import {DefVar} from '../../../DefVar';
import {UnDefVar} from '../../../UnDefVar';
import {Choice} from '../../../Choice';

@Component({
  moduleId: module.id,
  selector: 'step',
  templateUrl: 'steps.component.html',

})

export class StepsComponent { 
  	
    @Input() numStep:number;
    @Input() template:string;
    @Output() onValidateStep: EventEmitter<any> = new EventEmitter<any>();
    @Output() onValidateTemplate: EventEmitter<any> = new EventEmitter<any>();
  	defVars: DefVar[];
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
    selectedOption:string;

    




    constructor(private testService:TestService){
        this.testService.getDefVars()
            .subscribe(vars => {
                this.defVars = vars.data;
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
        this.qtd['sn']="Step 1";
        this.choices =[{id: 'choice1','name':'','var':null,'is_edit':true}];
        this.toShow = '';
        this.displayPostArea='none';
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
    this.addToSHow();
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

    createTemplate()
    {
    var content = document.getElementById("textArea").value;
    var res = {
        "content":content
    }
    this.onValidateTemplate.emit(res);
    }

    getNextStep(doc)
    {
    var content = document.getElementById("textArea").value;
    var res = {
        "doc":doc,
        "content":content
    }
    this.onValidateStep.emit(res);
    }

    addToSHow()
    {
    this.toShow='';
    for(let i=0;i< this.choices.length;i++)
    {
    this.toShow = this.toShow +" "+this.choices[i].name+": "+this.qtd[this.choices[i].name]+"\n";
    }

    if (this.displayPostArea == "")
    {
    this.toShow = this.toShow+"\n"+this.qtd['body'];
    }
    }


    selectedOption()
    {
    if (this.qtd['type'] == "POST")
    {
      this.displayPostArea = "";
    }
    else
    {
    this.displayPostArea = 'none';
    }
    }


    showBodyContent()
    {
    this.toShow = this.toShow+"\n"+this.qtd['body'];
    }


    createResult()
    {
    if(this.qtd['ed'] != null && this.qtd['ed'] != '')
    {
    var index = this.qtd['ed'].indexOf( "+" );
    this.qtd['result'] = this.qtd['ed'].substring(0,index));
    }
    }

   
    
}