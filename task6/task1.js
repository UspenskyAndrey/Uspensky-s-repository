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
  for (var i = begin; i < end; ++i) {
    newArr.push(array[i]);
  }
  return newArr;
}