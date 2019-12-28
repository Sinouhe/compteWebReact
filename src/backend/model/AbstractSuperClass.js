class AbstractSuperClass {
 
  constructor() {
    if (this.constructor === AbstractSuperClass) {
      throw new TypeError('Abstract class "AbstractSuperClass" cannot be instantiated directly');
    }
    
    if (this.objectToJson === undefined) {
        throw new TypeError(`you must implement method objectToJson due to AbstractSuperClass extends in ${this.constructor}`);
    }

  }

}
 
module.exports = AbstractSuperClass;