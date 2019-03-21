var funcHigh = function(a) {
  var str = new String(a)
  var b = str[0].toUpperCase()
  str = str.replace(str[0] , b)
  return str
}