var cutString = function(a, b) {
  var str = new String(a); 
  if (b <= 1) {
    return str[0];
  }
  if (b = 2) {
    return str.slice(0, 1) + '.';
  }
  if (str.length > b) {
    str = str.slice(0, b - 3) + '...';
    return str.toString();
  }
}