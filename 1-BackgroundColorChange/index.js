document.getElementById("change").onclick= function(){
 let  colors = ['red', 'yellow', 'blue', 'green', 'skyblue',' purple', 'grey', 'blue-green'];
        
let color=colors[Math.floor(Math.random()*11)];
    
function changeBodyBg(color){
document.body.style.background = color;
    
//uncomment to change button color also

/*document.getElementById("change").style.background=color;*/
    };

changeBodyBg(color);
   }
 