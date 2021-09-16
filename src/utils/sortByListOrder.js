export function sortByListOrder(obj, list) {
  return {
    ...list.reduce(function (result, key) {
      result[key] = obj[key];
      return result;
    }, {}),
    ...obj,
  };
}
