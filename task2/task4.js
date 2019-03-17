var funcequal = function(a)
{
    var check = a[0]
    var result
    for (i=0;i<a.length;++i)
    {
      if (a[i] !== check)
      {
          result=false
          break
      }
      else
      {
          result = true
      }

    }
   console.log(result) 
}