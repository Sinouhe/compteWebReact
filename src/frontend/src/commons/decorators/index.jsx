exports.log = (target, name, descriptor) => {

    const oldValue = descriptor.value;
    
    descriptor.value = function() {
        console.log('*************************************');
        console.log(`Calling "${name}" with`, arguments);
        console.log('*************************************');
        return oldValue.apply(null, arguments);
    };
    
    return descriptor;
};