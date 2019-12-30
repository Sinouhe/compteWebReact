/**
 * Contract all model class for need to serve
 * 
 * model is divided in 2 part :
 * - DAO class for database object model relational.
 * - class for business logic
 * 
 */

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