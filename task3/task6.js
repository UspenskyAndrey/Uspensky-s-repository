var clone = {}
var funcclone = function(a)
{ 
 for (var key in a)
 {
  var getType = typeof(key)
  if (getType == 'string')
  {
      clone[key] = a[key]
  }
  if (getType == 'number')
  {
     clone[key] = a[key]
  }
   if (getType == 'object')
   {
       clone[key] = a[key] 
       funcclone(a[key])
   }

 }
 return clone
}