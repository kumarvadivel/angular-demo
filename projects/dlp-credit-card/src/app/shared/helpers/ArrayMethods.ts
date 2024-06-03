import { Injectable } from "@angular/core"

@Injectable()
export class ArrayMethod {

  //unconventional method to deep copy
  deepCopy = (inObject) => {
    let outObject, value, key
    if (typeof inObject !== "object" || inObject === null) {
      return inObject // Return the value if inObject is not an object
    }
    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {}
    for (key in inObject) {
      value = inObject[key]
      // Recursively (deep) copy for nested objects, including arrays
      outObject[key] = this.deepCopy(value)
    }
    return outObject
  }

  //method to insert another array into a array from a given position will return the array
  insertAt(sourceArray, destinationArray, position) {
    return sourceArray.slice(0, position).concat(destinationArray).concat(sourceArray.slice(position));
  }

  // flattening the nested objects
  flattenObject = (obj) => {
    const flattened = {}
    Object.keys(obj).forEach((key) => {
      const value = obj[key]
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.assign(flattened, this.flattenObject(value))
      } else {
        flattened[key] = value
      }
    })

    return flattened
  }
  //get unique values of a list
  getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
  }

  //remove a perticular key from a object recursively on a deep nested object too
  removeKeys(obj, keys) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop) && typeof (obj[prop]) == 'object') {
        if (keys.indexOf(prop) > -1) {
          delete obj[prop];
        } else {
          this.removeKeys(obj[prop], keys);
        }
      }
      if (obj.hasOwnProperty(prop) && keys.indexOf(prop) > -1) {
        delete obj[prop];
      }
    }
    return obj
  }


  getCircularReplacer = () => {
    const seen = new WeakSet();
    return (value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  //masking the data
  maskData(input_string) {
    let len_tobemasked = String(input_string).length - 4
    input_string = String(input_string)
    return `${input_string[0]}${input_string[1]}${'X'.repeat(len_tobemasked)}${input_string[input_string.length - 2]}${input_string[input_string.length - 1]}`
  }

  getPropFromObj(obj, prop) {
    let valueToFindByKey;
    if (!Array.isArray(obj) && obj !== null && typeof obj === "object") {
      if (obj.hasOwnProperty(prop)) {

        valueToFindByKey = obj[prop];
        return valueToFindByKey
      } else {

        let i;
        for (i = 0; i < Object.keys(obj).length; i++) {


          let val = this.getPropFromObj(obj[Object.keys(obj)[i]], prop);
          if (val != null) {
            return val
          }
        }
      }

    }
    return null;

  }

  getPathVal(obj, path) {
    let current = obj;
    if (path) {
      if (path.includes("[APPEND]")) {
        current = this.appendPathFetch(path, current);
      } else {
        if (path.includes("[HARD_CODEDED]")) {
          current = this.hardcodedPathFetch(path, current);
        } else {
          current = this.normalPathFetch(path, current);
        }
      }
    } else {
      return null;
    }
    return current;
  }

  hardcodedPathFetch(path, current) {
    path = path.replace("[HARD_CODEDED]", "");
    if (path == "") {
      current = null;
    } else {
      current = path;
    }
    return current;
  }

  appendPathFetch(path, obj) {
    path = path.replace("[APPEND]", "");
    path = path.split("+");
    let val = "";
    path.map((sp) => {
      if (sp.includes("[STATIC]")) {
        sp = sp.replace("[STATIC]", "");
        val = val + sp;
      } else {
        let curr = obj;
        curr = this.normalPathFetch(sp, curr);
        val = val + curr;
      }
    });
    return val;
  }

  normalPathFetch(mainpath, current) {
    for (let key of mainpath.split(".")) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        return null;
      }
    }

    return current;
  }
}