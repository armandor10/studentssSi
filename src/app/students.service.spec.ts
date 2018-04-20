import { TestBed, inject } from '@angular/core/testing';
import {Students} from './students';
import { StudentsService } from './students.service';

describe('StudentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsService]
    });
  });

  it('should be created', inject([StudentsService], (service: StudentsService) => {
    expect(service).toBeTruthy();
  }));


  describe('#getAllTodos()', () => {

    it('should return an empty array by default', inject([StudentsService], (service: StudentsService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos', inject([StudentsService], (service: StudentsService) => {
      let todo1 = new Students({name: 'Diego', lastname:'Prens'});
      let todo2 = new Students({name: 'Armando', lastname:'Ramos'});
      service.add(todo1);
      service.add(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));

  });

  describe('#save(todo)', () => {

    it('should automatically assign an incrementing id', inject([StudentsService], (service: StudentsService) => {
      let todo1 = new Students({name: 'Diego', lastname:'Prens'});
      let todo2 = new Students({name: 'Armando', lastname:'Ramos'});
      service.add(todo1);
      service.add(todo2);
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    }));

  });

  describe('#deleteTodoById(id)', () => {

    it('should remove todo with the corresponding id', inject([StudentsService], (service: StudentsService) => {
      let todo1 = new Students({name: 'Diego', lastname:'Prens'});
      let todo2 = new Students({name: 'Armando', lastname:'Ramos'});
      service.add(todo1);
      service.add(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([StudentsService], (service: StudentsService) => {
      let todo1 = new Students({name: 'Diego', lastname:'Prens'});
      let todo2 = new Students({name: 'Armando', lastname:'Ramos'});
      service.add(todo1);
      service.add(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));

  });

  describe('#updateTodoById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', inject([StudentsService], (service: StudentsService) => {
      let todo = new Students({name: 'Diego', lastname:'Prens'});
      service.add(todo);
      let updatedTodo = service.updateTodoById(1, {
        name: 'new title'
      });
      expect(updatedTodo.name).toEqual('new title');
    }));

    it('should return null if todo is not found', inject([StudentsService], (service: StudentsService) => {
      let todo = new Students({name: 'Diego', lastname:'Prens'});
      service.add(todo);
      let updatedTodo = service.updateTodoById(2, {
        name: 'new title'
      });
      expect(updatedTodo).toEqual(null);
    }));

  });

});
