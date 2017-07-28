import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService{
    constructor(private http:Http){
        console.log('Test Service Initialized...');
    }
    
    getDefVars(){
        return this.http.get('/def')
            .map(res => res.json());      
    }
    

    getUnDefVars(){
        return this.http.get('/undef')
            .map(res => res.json());        
    }

    getOneDefVar(name)
    {
        return this.http.get('/def/one/'+name)
            .map(res => res.json());
    }

    createTemplate(file,content)
    {
        var newFile = {
        fileName:file,
        content:content
        };

        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('/def/template',JSON.stringify(newFile),{headers})
        .map(res => res.json());
    }

    launchTemplateTest(file,content)
    {
        var newFile = {
        fileName:file,
        content:content
        };

        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('/def/launch',JSON.stringify(newFile),{headers})
        .map(res => res.json());
    }

   
    
    
}