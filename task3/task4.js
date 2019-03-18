var func = function(aString,bObject)
{
    if (!(aString in bObject))
    {
        bObject[aString] = 'new'
        return bObject
    }
  
}