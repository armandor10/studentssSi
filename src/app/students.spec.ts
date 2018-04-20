import { Students } from './students';

describe('Students', () => {
  it('should create an instance', () => {
    expect(new Students()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let student = new Students({
      name: 'Diego',
      lastname:'Prens',
      address:'Calle 44'
    });
    expect(student.name).toEqual('Diego');
    expect(student.lastname).toEqual('Prens');
  });

});
