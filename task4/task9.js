var newStr = function(a, b, c) {
  var arr = a.split(' ');
  arr.splice(c + 1, 0, b);
  return arr.join(' ');
}