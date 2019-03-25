var upCase = function(a) {
  var str = new String(a);
  for (var i = 0; i < str.length; ++i) {               // ищем первый символ в слове
    if (str[i] !== ' ') {
     var x = str.slice(0, i);
     var y = str.slice(i, str.length);
     y = y.replace(str[i], str[i].toUpperCase());
     str = x + y;
     while ((str[i] !== ' ') && (i < str.length)) {   // ищем первый символ следующего слова
       ++i;
     }
    }
  }
  return str.toString();
}