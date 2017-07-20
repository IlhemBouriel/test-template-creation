import { Component } from '@angular/core';
import {TestService} from '../../services/test.service';
import {DefVar} from '../../../DefVar';
import {UnDefVar} from '../../../UnDefVar';


@Component({
  moduleId: module.id,
  selector: 'tests',
  templateUrl: 'tests.component.html',

})

export class TestsComponent { 
  	

  	defVars: DefVar[];
  	undefVars: UnDefVar[];
  	filterargs = {name: ''};

    constructor(private testService:TestService){
        this.testService.getDefVars()
            .subscribe(vars => {
                this.defVars = vars.data;
            });

        this.testService.getUnDefVars()
            .subscribe(vars => {
                this.undefVars = vars.data;
            });
    }
    
}
