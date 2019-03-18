var copy = {}
var funccopy = function(a)
{
  for (var key in a)
  {
    copy[key] = a[key]
  }
  return copy
}