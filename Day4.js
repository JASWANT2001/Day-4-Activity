var a = [1,2,3,4,5,6,7,8,9];
 
var odd = function(a)
{
    for ( var i = 0; i<a.length; i++)
    {
         if (a[i]%2!=0)
    {console.log(a[i])}
    
    }
    return ;
};
odd(a);