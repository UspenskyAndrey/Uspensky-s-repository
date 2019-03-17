var funccount = function(a)
{
    var q = 0,w=0,e=0
    for (i=0;i<a.length;++i)
    {
        if (a[i]==0)
        {++e}
        if ((a[i]%2) == 0)
        {++w}
        if ((a[i]%2)!== 0)
        {++q}
    }
    if (e>0)
    {
        console.log ('even:'+w+' odd:'+q+' zero:'+e)
    }
    else
    {
        console.log ('even:'+w+' odd:'+q)
    }
    var ar = [w,q,e]
    return ar
}