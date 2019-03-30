var anotherMap = function(array, callback) {
  var newArr = [];
  for (var i = 0, j = 0; i < array.length; ++i, ++j) {
    newArr[j] = callback(array[i], i, array);
  }
  return newArr;
}