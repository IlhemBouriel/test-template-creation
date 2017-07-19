import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
})

export class TasksComponent { 
    tasks: Task[];
    name: string;
    
    constructor(private taskService:TaskService){
        this.taskService.getTasks()
            .subscribe(tasks => {
                this.tasks = tasks;
            });
    }
    
    addTask(event){
        event.preventDefault();
        var newTask = {
            name: this.name,
            isDone: false
        }
        
        this.taskService.addTask(newTask)
            .subscribe(task => {
                this.tasks.push(task);
                this.name = '';
            });
    }

    
   
    deleteTask(title){
        var tasks = this.tasks;
       console.log("deleting "+title);
    }
    
    updateStatus(task){
    
    }



    methode(title)
    {
    console.log('methode called by' + title);
    }
}
