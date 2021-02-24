
let button=document.getElementById('change');
let body=document.querySelector("body");
let text=document.getElementById("text");
let hexValue=document.getElementById("hex-value");

let change=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", 'F' ];

    
button.onclick=function(){
let hex="#"; 
    for(i=0; i<6; i++){
let index=Math.floor(Math.random()*change.length);
hex+=change[index];
    }
console.log(hex);
hexValue.innerHTML=hex;
body.style.backgroundColor=hex;
}