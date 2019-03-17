var clone = {}
var funcclone = function(a)
{
 for (var key in a)
 {
  if (typeof(key) == 'string')
  {
      clone[key] = a[key]
  }
  if (typeof(key) == 'number')
  {
     clone[key] = a[key]
  }
   if (typeof(key) == 'object')
   {
       funcclone(a[key])
   }

 }
 return clone
}