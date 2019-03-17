var funcsimple= function(a)
{
    if ((a>1000) || (a<2) )
    {
        return 'value is not correct'
    }
    var check = 0
    for (i=2;i<a;++i)
    {
        if (a%2 == 0)
        {
            ++check
        }
    }
 if (check == 0)
 {
     return 'value is simple'
 }
 else
  return 'value is not simple'
}