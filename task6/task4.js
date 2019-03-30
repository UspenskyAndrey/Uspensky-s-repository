var anotherFilter = function(array, callback) {
  var newArr = [];
  for (var i = 0, j = 0; i < array.length; ++i) {
    if (callback(array[i], i, array)) {
      newArr[j] = array[i];
      ++j;
    }
  }
  return newArr;
}