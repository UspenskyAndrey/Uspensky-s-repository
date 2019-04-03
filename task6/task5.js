var anotherMap = function(array, callback) {
  var newArr = [];
  for (var i = 0; i < array.length; ++i) {
    newArr.push(callback(array[i], i, array));
  }
  return newArr;
}