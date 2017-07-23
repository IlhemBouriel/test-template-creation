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
    
    
}