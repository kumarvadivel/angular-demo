export function reject(array, predicate) {
  return array.filter(element => !predicate(element));
}

export function isNull(obj) {
  return obj === null;
}

export function isEqual(obj1, obj2) {
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  if (typeof obj1 !== 'object' || obj1 === null) {
    return obj1 === obj2;
  }

  if (Array.isArray(obj1)) {
    if (!Array.isArray(obj2) || obj1.length !== obj2.length) {
      return false;
    }

    for (let i = 0; i < obj1.length; i++) {
      if (!isEqual(obj1[i], obj2[i])) {
        return false;
      }
    }

    return true;
  }
}

export function find(collection, predicate:any = (item) => item, fromIndex = 0) {
  const isArray = Array.isArray(collection);
  const length = isArray ? collection.length : collection.size;
  const findAllmatch=(value,_predicate,allMatch)=>{
    let allMatchDone = allMatch;
    for (const [key, expectedValue] of Object.entries(_predicate)) {
      if (value[key] !== expectedValue) {
        allMatchDone = false;
        break;
      }
    }
    return allMatchDone
  }
  for (let index = fromIndex; index < length; index++) {
    const value = isArray ? collection[index] : collection.get(index);
    // Handle predicate as a function or an object (shallow comparison)
    if (typeof predicate === 'object' && predicate !== null) {
      let allMatch = true;
      allMatch = findAllmatch(value,predicate,allMatch)
      if (allMatch) {
        return value;
      }
    }
  }

  return undefined;
}

export function assign(source,target) {
return {...source,...target};
}

export function uniqBy(array, iteratee) {
  return Object.values([...array].reverse().reduce((m, i) => {m[iteratee.split('.').reduce((a, p) => a?.[p], i)] = i; return m;}, {}))
}

export function findLastIndex(array, predicate) {
if (!Array.isArray(array)) {
  throw new TypeError('Input must be an array');
}

if (typeof predicate !== 'function') {
  throw new TypeError('Predicate must be a function');
}

for (let i = array.length - 1; i >= 0; i--) {
  if (predicate(array[i], i, array)) {
    return i;
  }
}

return -1;
}

export function cloneDeep(value, seen = new WeakMap()) {
  // Handle basic types:
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  // Detect cycles using WeakMap (handles cyclic references with mutable objects):
  if (seen.has(value)) {
    return seen.get(value);
  }
  seen.set(value, value); // Mark value as processed

  // Handle different object types:
  if (Array.isArray(value)) {
    return value.map(innerValue => cloneDeep(innerValue, seen));
  } else if (value instanceof Date) {
    return new Date(value.getTime()); // Create a new Date instance
  } else if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags); // Create a new RegExp instance
  } else if (typeof value === 'function') {
    // Handle functions (limited clone without closures):
    return () => value.toString(); // Caution: limited functionality
  } else {
    const clonedObject = Object.create(Object.getPrototypeOf(value)); // Maintain prototype chain
    Object.keys(value).forEach(key => {
      clonedObject[key] = cloneDeep(value[key], seen);
    });
    return clonedObject;
  }
}


 export function startCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export function lowerCase(str){
  return str.toLowerCase();
}

export function findIndex(array,desiredId){
  return array.findIndex(obj => obj === desiredId);
}

