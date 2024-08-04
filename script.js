function checker(){
let str=document.getElementById("input").value;
let charsOnly = str.replace(/\s+/g, '').toLowerCase();
    let str1 = charsOnly.split('').reverse().join('');
console.log(str1);
let res;
if(charsOnly===str1)
    res="palindrome";
else
    res="not a palindrome";
let result=document.querySelector(".result")
result.innerHTML="The Given String is "+ res;}
