import { Component } from '@angular/core';

import { StudentsService } from './students.service';
import {Students} from './students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentsService]
})
export class AppComponent {
  newStudent = new Students();

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  constructor(private todoDataService: StudentsService) {
  }

  // Service is now available as this.todoDataService
  toggleTodoComplete(todo) {
    //this.todoDataService.toggleTodoComplete(todo);
  }

  add() {
    if (!this.newStudent.id){
      this.todoDataService.add(this.newStudent);     
    }
    else{
      this.todoDataService.updateTodoById(this.newStudent.id, this.newStudent );
    }
    this.newStudent = new Students();
  }

  remove(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get students() {
    return this.todoDataService.getAllTodos();
  }

  edit(student){
    this.newStudent = student;
  }
}
