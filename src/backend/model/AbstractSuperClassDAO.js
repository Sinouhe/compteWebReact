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