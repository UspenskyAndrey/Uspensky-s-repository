var funcequal = function(a)
{
    var check = a[0]
    var result
    for (i=1;i<a.length;++i)
    {
      if (a[i] == check)
     {
       result = true
       return result
     }
     check = a[i]

    }
    return false
}