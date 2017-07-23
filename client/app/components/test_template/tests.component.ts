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
    defVar: DefVar;




    constructor(private testService:TestService){
        this.testService.getDefVars()
            .subscribe(vars => {
                this.defVars = vars.data;
            });

        this.testService.getUnDefVars()
            .subscribe(vars => {
                this.undefVars = vars.data;
            });
        this.choices =[{id: 'choice1','name':'','var':this.defVar,'is_edit':true}];
    }

    addNewChoice()
    {
    	var newItemNo = this.choices.length+1;
    	this.choices.push({'id':'choice'+newItemNo,'name':'','var':null,'is_edit':true});
    }

    removeChoice()
    {
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


   
    
}
