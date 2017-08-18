import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlanConfService{

    constructor(private http:Http)
    {
        console.log('PlanConfService Service Initialized...');
    }


    uploadTestPlan(formData)
    {
        return this.http.post('/upload',formData)
        .map(res => res.json()); 
    }


    getFileContent(file)
    {
    	return this.http.get('/content/'+file)
    	.map(res => res.json()); 
    }
    

}