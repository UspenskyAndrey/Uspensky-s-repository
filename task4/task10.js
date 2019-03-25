var strReverse = function(a) {
  var str = new String(a),
      str1 = new String();
  for (var i = str.length - 1; i > -1; --i) {
    str1 += str[i];
  }
  return str1.toString();
}