var getCamelCase = function(a) {
  var str = new String(a);
  for (var i = 0; i < str.length; ++i) {  
    if (str[i] !== ' ') {
      var x = str.slice(0, i),
          y = str.slice(i, str.length);
          y = y.replace(str[i], str[i].toUpperCase());
          str = x + y;
    }
    while ((str[i] !== ' ') && (i < str.length)) {         // пропускаем символы в слове
      ++i;
    }
    while ((str[i] == ' ') && (i < str.length)) {         // вырезаем пробелы
      str = str.slice(0, i) + str.slice(i+1, str.length);
      --i;
    }
  }
  return str.toString();
}