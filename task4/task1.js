var mainObj = {test:1,name: 'df'}
var obj = Object.create(mainObj)
obj.acd = 12

var findProp = function(a,b)
{ 
  for (var key in b)
  {
    if ( key === a)
    {
      if (!b.hasOwnProperty(key))
      {
        return true
      }
      else return false
    }
   
  }
 return false
}