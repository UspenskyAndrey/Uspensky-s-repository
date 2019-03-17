var funcmax = function(input)
{
    var max = input[0]
    for (i=1;i<input.length;++i)
    {
        if (input[i] > max)
        {
            max = input[i]
        }
    }
    return max
   
}