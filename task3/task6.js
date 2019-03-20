
var funcclone = function(a)
{
 var clone = {} 
 for ( var key in a)
 {
  var getType = typeof(a[key])
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
    if (Array.isArray(a[key]))
    {
     clone[key] = Object.values(funcclone(a[key]))
    } 
    else
    { 
    clone[key] = funcclone(a[key])
    }
  }
 }
 return clone
}