import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TagService{
    constructor(private http:Http){
        console.log('TagFile Service Initialized...');
    }
    
    getTagFiles(){
        return this.http.get('/edit/tags')
            .map(res => res.json());      
    }

    getTagFileContent(fileName)
    {
        return this.http.get('/edit/tag/'+fileName)
            .map(res => res.json()); 
    }
    
    reloadTagFileContent(file)
    {
        return this.http.get('/reload/tag/'+file)
            .map(res => res.json()); 
    }

    editTagFile(fileName,content)
    {
    	var newFile = {
        fileName:fileName,
        content:content
        };

        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('/change/tag',JSON.stringify(newFile),{headers})
        .map(res => res.json());
    }
}