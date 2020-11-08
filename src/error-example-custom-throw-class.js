export class ErrorExample2 {
    constructor() { 
        throw new MyError('teste')
    }

};

export class MyError extends Error {
    constructor(message) {
      super(message);
      this.name = 'MyError';
    }
  }
  