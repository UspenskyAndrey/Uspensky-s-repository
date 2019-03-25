var deleteBlank = function(a) {
  var str = new String(a);
  for (var i = 0; i < str.length; ++i) {         // начниаем искать первый пробел с начала строки
    if (str[i] === ' ') {
      var x = str.slice(0, i);
      var y = str.slice(i+1, str.length);
      str = x+y;
      break;
    }
  }
  for (var i = str.length - 1; i !== 0; --i) {   // начинаем искать первый пробел с конца строки
    if (str[i] === ' ') {
      var x = str.slice(0,i);
      var y = str.slice(i+1, str.length);
      str = x + y;
      break;
    }
  }
  return str.toString();
}