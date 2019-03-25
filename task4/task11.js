var countString = function(a) {
  var arr = a.split('');
  var newArr = [];
  arr.forEach(function(item) {
    if (newArr.indexOf(item) === -1){
      newArr.push(item);
    }
  });
  newArr.forEach(function(newItem) {
    var count = 0;
    arr.forEach(function(itemArr) {
      if (newItem === itemArr) {
        ++count;
      }
    })
    console.log(newItem + ':' + count);
  })
}