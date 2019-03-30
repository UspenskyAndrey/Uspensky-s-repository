var anotherSlice = function(array, begin, end) {
  var newArr = [];
  if (isNaN(begin)) {
    begin = 0;
  }
  if (isNaN(end)) {
    end = array.length;
  }
  if (begin < 0) {
    begin = array.length + begin;
  }
  if (end < 0) {
    end = array.length + end;
  }
  for (var i = begin, j = 0; i < end; ++i, ++j) {
    newArr[j] = array[i];
  }
  return newArr;
}