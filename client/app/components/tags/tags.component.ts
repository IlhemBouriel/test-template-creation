import { Component ,Input ,Output ,EventEmitter} from '@angular/core';
import {TagService} from '../../services/tags.service';
import {TagFile} from '../../../TagFiles';


@Component({
  moduleId: module.id,
  selector: 'tagFile',
  templateUrl: 'tags.component.html',
  styleUrls: ['tags.component.css'],

})

export class TagsComponent { 

    tagFiles: TagFile[];
    selectedTagFile:string;
    contentTagFile:string;


    constructor(private tagService:TagService){
        this.tagService.getTagFiles()
            .subscribe(vars => {
                this.tagFiles = vars.data;
            });
        this.selectedTagFile = '';    
    }

    onSelectTagFile(newFile)
    {
    if (newFile.length > 0)
    {
        this.tagService.getTagFileContent(this.selectedTagFile)
            .subscribe(vars => {
                this.contentTagFile = vars.data;
                document.getElementById("textArea").value=this.contentTagFile;
            });
    }
    else
    {
    this.contentTagFile = '';
    }
    }


    saveTagFile()
    {
        var content = (<HTMLInputElement>document.getElementById("textArea")).value;
        this.tagService.editTagFile(this.selectedTagFile,content)
            .subscribe(vars => {
           // console.log("object: %O", vars);
            this.contentTagFile = vars.data;
            });
    }

    reloadTagFile()
    {
        //reload file
    }


}
