
var checkObject = function(aObject,bKey)
{
    for ( key in aObject)
    {
        if (key == bKey)
        {
            return true
        }
    }
  return false  
}