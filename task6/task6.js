var anotherReduce = function(array, callback, initialValue) {
  var previousValue,
      i = 0;
  if (isNaN(initialValue)) {
    previousValue = array[0];
    ++i;
  } else {
    previousValue = initialValue;
  }
  for (;i < array.length; ++i) {
    previousValue = callback(previousValue, array[i], i, array);
  }
  return previousValue;
}