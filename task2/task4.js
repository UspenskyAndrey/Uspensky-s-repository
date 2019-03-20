var funcequal = function(a)
{
    var check = a[0]
    var result
 for ( var j = 1; j<a.length; ++j) // цикл для позиционирования 
 {
   for (var i = j ; i<a.length; ++i) // цикл для проверки
   {
     if (check == a[i])
     {
       return true
     }
   }
   check = a[j]
 }


    return false
}
