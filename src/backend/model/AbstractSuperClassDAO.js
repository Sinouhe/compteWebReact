class AbstractSuperClassDAO {

    #database;
 
    constructor(database) {
      if (this.constructor === AbstractSuperClassDAO) {
        throw new TypeError('Abstract class "AbstractSuperClassDAO" cannot be instantiated directly');
      }

      this.#database = database;
    }
  
    toStringDatabase = (string) => {
      return `'${string}'`;
    }
   
    getDatabase = () => {
      return this.#database;
    }

    setDatabase = () => {
        return this.#database;
    }  
}
   
module.exports = AbstractSuperClassDAO;