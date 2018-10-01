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

const incrementor = () => {
	if(!incrementor.sum) incrementor.sum = 0;
    function f() {
        incrementor.sum++;
        return f;
    }
      
    f.valueOf = function() {
        incrementor.sum++;
        return incrementor.sum;
    };
      
    return f;
}

const asyncIncrementor = async () => {
	if(!asyncIncrementor.sum) asyncIncrementor.sum = 0;
    return new Promise((resolve, reject)=>{
        resolve(++asyncIncrementor.sum);
        reject(new Error(":("));
    });
}

const createIncrementer = function * () {
	let value = 0;
	for(;;){
		yield ++value;
	}
}

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param);
        }, 1000);
    });
}

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