
var funccopy = function(a)
{
  var copy = {}
  for (var key in a)
  {
    copy[key] = a[key]
  }
  return copy
}