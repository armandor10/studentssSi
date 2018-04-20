export class Students {
    id: number;
    name: string = '';
    lastname: string = '';
    address:string = '';
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
