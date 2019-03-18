var functype = function(a)
{
    getType = typeof(a)
    if (getType== 'string')
    {
        return getType
    }
    if (isNaN(a) == true) 
    {
        return undefined
    }
    if (getType == 'number')
    {
        return getType
    }
}