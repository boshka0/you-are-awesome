// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propName) => {
    return propName;
};

const createNotEnumerableProperty = (propName) => {
    return Symbol(propName);
};

const createProtoMagicObject = () => {
    let obj = new Function();
    obj.prototype = Object.getPrototypeOf(obj);
    return obj;
};

function sum(){
	var sum = 0;
    function f() {
        sum++;
        return f;
    }
      
    f.valueOf = function() {
        return sum;
    };
      
    return f;
}
const incrementor = sum();

const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;