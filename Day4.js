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

// 4.Return all the prime numbers in an array: 

// Return all the prime numbers in an array using Anonyms function:

var prime=function(a){

    var  res=[];
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++;
            }
        }
        if(count==2)
        {
            res.push(a[i]);
        }
    }
    console.log(res);
};
prime([1,2,3,4,5,6,7,8,9,11]);

// Return all the prime numbers in an array using IIFE:

(function(a1){
    var  res1=[];
    for(i=0;i<a1.length;i++){
        count1=0;
        for(j=1;j<=a1[i];j++){
            
            if(a1[i]%j===0){
                count1++;
            }
            
        }
            
        if(count1==2){
                res1.push(a1[i]);
            
        }
    }
    console.log(res1);
 
})
([1,2,3,4,5,6,7,8,9,11]);

//-----------------------------------------------------------------------------------------------

// 5. Return all palindromes in an array:

// Return all palindromes in an array using Anonyms function:

let palindrome = function(arr){
    
    var N=arr.length;
    var out =[];
    for(let i=0;i<arr.length;i++){
        let final = arr[i];
        let str = final.split('').reverse().join('');
        if(str==arr[i])
       out.push(arr[i]);
        }
     console.log(out);
   
};
var arr =["abc", "mom", "dad", "madam", "teacher"];

palindrome(arr);

// Return all palindromes in an array using IIFE:

(function(){
    var arr1 =["abc", "mom", "dad", "madam", "teacher"];
    var N1=arr1.length;
    var out =[];
    for(let i=0;i<arr1.length;i++){
        let final = arr1[i];
        let str = final.split('').reverse().join('');
        if(str==arr1[i])
       out.push(arr1[i]);
        }
     console.log(out);
   
})(); 

//-----------------------------------------------------------------------------------------------


// 6.Return median of two sorted arrays of the same size:

// Return median of two sorted arrays of the same size using Anonyms function:

let median = function (arr1,arr2){
    let arr = [...arr1, ...arr2];
    
    arr.sort((a,b) => a-b);
    let len = arr.length;
  
    if(len%2!==0){

 let ans = arr[Math.round(len/2)-1];
 let final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;

}
console.log(final);
};
var arr1 = [3,2,1,4,5];
var arr2 = [8,6,7,9,10];
median(arr1,arr2);

// Return median of two sorted arrays of the same size using IIFE:

var arr1 = [3,2,1,4,5];
var arr2 = [8,6,7,9,10];
(function (){
   
let arr = [...arr1, ...arr2];
    
    arr.sort((a,b) => a-b);
    let len = arr.length;
  
    if(len%2!==0){

 let ans = arr[Math.round(len/2)-1];
 let final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;
 }
 console.log(final);
})(arr1,arr2);

//-----------------------------------------------------------------------------------------------

// 7. Remove dupliactes from an array:
// Remove dupliactes from an array using Anonyms function:

var dup=function(arr){
    var frequency = {};
   
    for(let i = 0; i < arr.length; i++) {
       if(frequency[arr[i]]) {
         frequency[arr[i]] = frequency[arr[i]] + 1;
       } else {
         frequency[arr[i]] = 1;
       }
    }
   
   let final = [];
   for(let x in frequency) {
     if(frequency[x] === 1) {
       final.push(x);
     }
   }
   
   console.log(final); 
   
   };
   dup([1,12,11,3,4,5,12]);

// Remove dupliactes from an array using IIFE:

 
   (function (arr){
     var frequency = {};
   
    for(let i = 0; i < arr.length; i++) {
       if(frequency[arr[i]]) {
         frequency[arr[i]] = frequency[arr[i]] + 1;
       } else {
         frequency[arr[i]] = 1;
       }
    }
   
   let final = [];
   for(let x in frequency) {
     if(frequency[x] === 1) {
       final.push(x);
     }
   }
   
   console.log(final);   
   })([1,2,3,4,4,5,6,7,5]);
//-----------------------------------------------------------------------------------------------

// 8. Rotate an array by K times:
// Rotate an array by K times using Anonyms function:

let rotation = function (arr,n,d)
{
    let p = 1;
        while (p <= k) {
            let last = arr[0];
            for (let i = 0; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[n - 1] = last;
            p++;
            
        }
         let out = [];
        for (let i = 0; i < n; i++) {
           out.push(arr[i]);
            
        }
        console.log(out);
};
var arr =[4,5,6,1,2,3];
var n = arr.length;
var k = 3;

rotation(arr, n,k);

// Rotate an array by K times using IIFE:

var arr =[4,5,6,1,2,3];
var n = arr.length;
var k = 3;

(function(arr,n,k){
   let p = 1;
        while (p <= k) {
            let last = arr[0];
            for (let i = 0; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[n - 1] = last;
            p++;
            
        }
         let out = [];
        for (let i = 0; i < n; i++) {
            out.push(arr[i]);
            
        }
        console.log(out);  
})(arr,n,k);

//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------



// 1. Print ood numbers in an array using Arrow function:
let numberArray = [1, 2, 3, 4, 5, 6,7,8,9];

let odd1=numberArray.filter((x) => {

return x % 2 !== 0;
});
console.log(odd1);
//-----------------------------------------------------------------------------------------------

// 2.Convert all the strings to title caps in a string array using arrow function:
   let str2 = ["siva", "is", "a", "good", "person"];

 let strCaps = str2.map((item) => {

    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();

});
console.log( strCaps.join(' '));
//-----------------------------------------------------------------------------------------------

//3.Sum of all numbers in an array using arrow function:
var arr=[1,2,3,4,5,6];
const add1=arr.reduce((a,b)=>a+b);
console.log([add1]);
//-----------------------------------------------------------------------------------------------

//4.Return all the prime numbers in an array
let prime1 = (arr) => {
    return arr.filter((n) => {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    });
  };
  console.log(prime1([1,2,3,4,5,6,7,8,9,10]));
//-----------------------------------------------------------------------------------------------

//5.Return all the palindromes in an array
var arr =["abc", "mom", "dad", "madam", "teacher"];
arr = arr.filter((s) =>{
let len = s.length;
for (var i = 0; i<len / 2; i++) {
if (s[i] == s[len - i - 1]){
return true;
}
else{
return false;
}
}
});
console.log(arr);

//-----------------------------------------------------------------------------------------------



