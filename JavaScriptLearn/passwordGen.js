

// let a=Math.floor(Math.random()*10+1);
// console.log(a);

let char="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let len=20;
let pass=""
let num=false;

console.log(char.charAt(0))
if(num)char+=("1223456789")
console.log(char)
for(let i=0;i<len;i++)
{


   let i=(Math.floor(Math.random()*char.length))
   pass+=char.charAt(i)
   
}
console.log(pass)