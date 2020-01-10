/**
 * Contract all model class for DAO (data access object) need to serve
 * 
 * if no database is pass to the model DAO constructor class, it takes the global database of the project.
 * 
 * model is divided in 2 part :
 * - DAO class for database object model relational.
 * - class for business logic
 * 
 */


class AbstractSuperClassDAO {

    #database;
 
    constructor(database = global.database) {
      if (this.constructor === AbstractSuperClassDAO) {
        throw new TypeError('Abstract class "AbstractSuperClassDAO" cannot be instantiated directly');
      }

      if (this.saveOne_DAO_Promise === undefined) {
        throw new TypeError(`you must implement method saveOne_DAO_Promise due to AbstractSuperClass extends in ${this.constructor}`);
      }

      if (this.findById_DAO_Promise === undefined) {
        throw new TypeError(`you must implement method findById_DAO_Promise due to AbstractSuperClass extends in ${this.constructor}`);
      }

      if (this.deleteOneById_DAO_Promise === undefined) {
        throw new TypeError(`you must implement method deleteOneById_DAO_Promise due to AbstractSuperClass extends in ${this.constructor}`);
      }

      this.#database = database;
    }
   
    getDatabase = () => {
      return this.#database;
    }

    setDatabase = () => {
        return this.#database;
    }  

    
}
   
module.exports = AbstractSuperClassDAO;