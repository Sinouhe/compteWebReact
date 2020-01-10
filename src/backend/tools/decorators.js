const logControllerDecorator = () => {
    return (target, key, descriptor) => {
        const oldValue = descriptor.value;
        console.log(descriptor.value);
        descriptor.value = function() {
            console.log('*************************************');
            console.log(`Calling "${name}" with`, arguments);
            console.log('*************************************');
            return oldValue.apply(null, arguments);
        };

          return descriptor;
    }
  }


module.exports = logControllerDecorator;