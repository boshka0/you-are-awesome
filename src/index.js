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

const getDeepPropertiesCount = (obj) => {
    let count = Object.keys(obj).length;
    let array = Object.keys(obj);
    array.forEach(function(elem){
        const arrLength = Object.keys(obj[elem]).length;
        if(arrLength > 0){
            count += getDeepPropertiesCount(obj[elem]);
        }
    })
    return count;
};

const createSerializedObject = () => {
    return new String(JSON.stringify({name: "Nastya"}))
};

const sortByProto = (arr) => {
    const orderSym = Symbol("order");
	const arrWithOrder = arr.map(item => Object.assign(item, {[orderSym] : countProtosBeforeObjectPrototype(item)}));
    const sortedArr = arrWithOrder.sort((a, b) => {
  	    return b[orderSym] - a[orderSym];
    });
    function countProtosBeforeObjectPrototype(obj) {
        let count = 0;
        let current = obj;
        while (current.__proto__ !== Object.prototype) {
            count++;
            current = current.__proto__; 
        }
        return count;
    }
    return sortedArr;
}

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