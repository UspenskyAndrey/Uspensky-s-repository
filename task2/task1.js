var functype = function(a)
{
    if (typeof(a)== 'string')
    {
        return typeof(a)
    }
    if (isNaN(a) == true) 
    {
        return undefined
    }
    if (typeof(a) == 'number')
    {
        return typeof(a)
    }
}