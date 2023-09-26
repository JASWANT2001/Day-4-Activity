// 1. Print odd numbers in an array.

//  Print odd numbers using Anonyms function:
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

//  Print odd numbers using IIFE:
 var a = [1,2,3,4,5,6,7,8,9];
 
 (function (a)
 {
     for ( var i = 0; i<a.length; i++)
     {
          if (a[i]%2!=0)
     {console.log(a[i])}
     
     }
     return ;
 })
 (a);

//-----------------------------------------------------------------------------------------------

// 2. Convert all the strings to title caps in a string array.

//  Convert all the strings to title caps in a string array using Anonyms function:

 var a = "guvi zen portal";
 var b = a.split(" ")
 
 var title = function()
 {
    for ( var i = 0; i<a.length ; i++)
    {
    
     b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1)
     console.log(b[i])
    } return 
 }();

// Convert all the strings to title caps in a string array using IIFE:

var a = "guvi zen portal";
 
 
 (function title ()
 {
    for ( var i = 0; i<a.length ; i++)
    {
     var b = a.split(" ");
     b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1);
     console.log(b[i]);
    } return; 
 }) 
 () ;

//-----------------------------------------------------------------------------------------------

// 3. Sum of all numbers in an array:

// Sum of all numbers in an array using Anonyms function:

 var a = [1,2,3,4,5];
 var sum = 0;
 
 var add = function()
 {
    for ( var i = 0; i<a.length ; i++)
    {
     sum = sum + a[i];
     
    }
}; add();

console.log(sum);

// Sum of all numbers in an array using IIFE:

 var a = [1,2,3,4,5];
 var sum = 0;
 
 (function()
 {
    for ( var i = 0; i<a.length ; i++)
    {
     sum = sum + a[i];
     
    }
}) ();

console.log(sum);

//-----------------------------------------------------------------------------------------------





