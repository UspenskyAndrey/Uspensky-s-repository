var func = function(aString,bObject)
{
    if (aString in bObject)
    {}
    else
    {
        bObject[aString] = 'new'
        return bObject
    }
  
}