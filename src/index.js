// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {return property};
const createNotEnumerableProperty = (property) => {
  Object.defineProperty(Object.prototype, property, {
    enumerable: false,
    value: 'value'
  });
  return property;
};
const createProtoMagicObject = () => {magicObj = () => {}
  magicObj.prototype = magicObj.__proto__;
  return magicObj;
};
const incrementor = () => { 
  if ( !incrementor.counter ) incrementor.counter = 0;
  incrementor.valueOf = function() {
  	return incrementor.counter }
  incrementor.counter++;
  return incrementor;
};
const asyncIncrementor = () => {  
  if ( !asyncIncrementor.counter ) asyncIncrementor.counter = 0;
  asyncIncrementor.counter++;
  return asyncIncrementor.counter;
};
const createIncrementer = () => {
  let i = 0;
  function* next(){
    let i = 0;
    while(i < 3)
      yield ++i;
    }
  return next();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) =>   
  new Promise((resolve) => {
  setTimeout(() => resolve(param), 1111);
});
const getDeepPropertiesCount = (obj) => {
  let k = 0;
  let counter = (obj) => {
    for (let keys in obj) {
      if (typeof obj[keys] === "object") {
        counter(obj[keys]);
      }
      k++;
    }
    return k;
  }
  return counter(obj);
};

const createSerializedObject = () => {
  return null;
};
const toBuffer = () => {};
const sortByProto = (arr) => {
  return arr;
};

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