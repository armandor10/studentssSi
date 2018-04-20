import { Injectable } from '@angular/core';
import {Students} from './students';

@Injectable()
export class StudentsService {
  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;

  // Placeholder for todos
  students: Students[] = [];

  constructor() { }

  // Simulate POST /todos
  add(student: Students): StudentsService {
    if (!student.id) {
      student.id = ++this.lastId;
    }
    this.students.push(student);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): StudentsService {
    this.students = this.students
      .filter(students => students.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Students {
    let student = this.getTodoById(id);
    if (!student) {
      return null;
    }
    Object.assign(student, values);
    return student;
  }

  // Simulate GET /todos
  getAllTodos(): Students[] {
    return this.students;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Students {
    return this.students
      .filter(student => student.id === id)
      .pop();
  }

}
