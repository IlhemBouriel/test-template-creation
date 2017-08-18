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
    message: string;
    load: string;
    done: string;
    fullPath: string;
    finalTask: string;


    constructor(private tagService:TagService){
        this.tagService.getTagFiles()
            .subscribe(vars => {
                this.tagFiles = vars.data;
            });
        this.selectedTagFile = '';   
        this.load= __dirname+'/../src/images/loading.gif';
        this.done= __dirname+'/../src/images/spin.gif';
        this.finalTask= __dirname+'/../src/images/check-animation.gif';
        this.fullPath =''; 
        this.message='';
    }

    onSelectTagFile(newFile)
    {
    if (newFile.length > 0)
    {
        this.message="File "+this.selectedTagFile+" is loading " ;
        this.fullPath=this.load;
        this.openModal();
        this.tagService.getTagFileContent(this.selectedTagFile)
            .subscribe(vars => {
                this.contentTagFile = vars.data;
                document.getElementById("textAreaTag").value=this.contentTagFile;
                this.message = 'File has fully loaded';
                this.fullPath=this.finalTask;
                setTimeout(() => 
                {
                    this.closeModal();
                },
                2000);
                });
    }
    else
    {
    this.contentTagFile = ' ';
    }
    
           
    }


    reloadTagFile(newFile)
    {
    this.message="File "+this.selectedTagFile+" is loading " ;
    this.fullPath=this.load;
    this.openModal();
        if (newFile.length > 0)
    {
        this.tagService.reloadTagFileContent(this.selectedTagFile)
            .subscribe(vars => {
                this.contentTagFile = vars.data;
                document.getElementById("textAreaTag").value=this.contentTagFile;
            });
    }
    else
    {
    this.contentTagFile = '';
    }

    this.message = 'File has fully reloaded';
    this.fullPath=this.finalTask;
    setTimeout(() => 
          {
          this.closeModal();
          },
          2000);
           
    }


    saveTagFile()
    {
        this.message="File "+this.selectedTagFile+" is loading " ;
        this.fullPath=this.load;
        this.openModal();
        var content = (<HTMLInputElement>document.getElementById("textAreaTag")).value;
        this.tagService.editTagFile(this.selectedTagFile,content)
            .subscribe(vars => {
           // console.log("object: %O", vars);
            this.contentTagFile = vars.data;
            });
        this.message = 'file saved successfully';
        this.fullPath=this.finalTask;
        setTimeout(() => 
          {
          this.closeModal();
          },
          2000);
           
    }


    openModal()
    {
      var modal = document.getElementById('ModalTag');


      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      modal.style.display = "block";
      }


    closeModal()
    {
      var modal = document.getElementById('ModalTag');
      modal.style.display = "none";
    }

    


}
