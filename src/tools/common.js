const isString = (s) => typeof (s) === 'string' || s instanceof String;
const isEqualObject = (o1, o2) => JSON.stringify(o1) === JSON.stringify(o2);
const isObjectWithData = (o = {}) => typeof o === 'object' && Object.keys(o).length > 0;
const isArrayWithContent = (object, minlength = 1) => Array.isArray(object) && object.length >= minlength;
const isStringWithValue = (s, minlength = 1) => isString(s) && s.trim().length > (minlength - 1);
const includeArrayWithContent = (data, key) => data && data[key] && isArrayWithContent(data[key]);
const isEqualArray = (a1, a2) => isArrayWithContent(a1) && isArrayWithContent(a2) && a1.every((e) => a2.includes(e));
const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const filterDuplicate = (newData, key1, key2) => {
  const uniqueData = {};
  return newData.filter((item) => {
    let isValid = true;

    if (uniqueData[item[key1]]) {
      if (item[key2] === uniqueData[item[key1]]) isValid = false;
    }

    if (isValid) {
      uniqueData[item[key1]] = item[key2];
    }

    return isValid ? item : null;
  });
};

const ReduceArray = (array = []) => {
  const result = [...new Set(array)];

  result.filter((item, index) => array.indexOf(item) === index);

  result.reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]), []);

  return result;
};

const ReduceArrayObjectsDuplicate = (dataArray, keyName) => {
  let uniqueArray = [];
  const array = [...uniqueArray, ...new Set(dataArray.map((i) => ({ ...i })))];
  uniqueArray = array.reduce((unique, item) => (
    unique.findIndex((e) => e[keyName] === item[keyName]) < 0 ? [...unique, item] : unique), []);

  return uniqueArray;
};

export default {
  isArrayWithContent,
  isObjectWithData,
  isString,
  isStringWithValue,
  isEqualObject,
  isEqualArray,
  includeArrayWithContent,
  ReduceArray,
  ReduceArrayObjectsDuplicate,
  sleep,
  filterDuplicate,
};
