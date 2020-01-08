exports.log = (target, name, descriptor) => {

    console.log('descriptor.value');
    console.log(descriptor.value);
    console.log('descriptor.value');

    const oldValue = descriptor.value;
    
    descriptor.value = function() {
        console.log('*************************************');
        console.log(`Calling "${name}" with`, arguments);
        console.log('*************************************');
        return oldValue.apply(null, arguments);
    };
    
    return descriptor;
};