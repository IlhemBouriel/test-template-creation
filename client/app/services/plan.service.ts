import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlanService{
    constructor(private http:Http){
        console.log('TestPlan Service Initialized...');
    }
    

    saveTestPlan(file,content)
    {
         var newFile = {
        fileName:file,
        content:content
        };

        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('/testplan/push',JSON.stringify(newFile),{headers})
        .map(res => res.json());
    }
    


    sendEmailAndSave(file,content)
    {
    console.log('service');
        var newFile = {
        fileName:file,
        content:content
        };

        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('/testplan/send',JSON.stringify(newFile),{headers})
        .map(res => res.json());
    }
}