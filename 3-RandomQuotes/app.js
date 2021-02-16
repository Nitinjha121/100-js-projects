
let generateQuotes=document.getElementById("quote");
     
let button=document.getElementById("button");
     
let nameOfAutthor=document.getElementById("nameofauthor");
     
button.onclick=function(){

let quotes=[{quote:"Where all think alike, no one thinks very much.",author:"Sam"},
{quote:" Illegal aliens have always been a problem in the United States. Ask any Indian.", author:"Micheal"},
{ quote:"Remember, no matter where you go, there you are.", author:"Eliot"},
{quote:"The human tendency to regard little things as important has produced very many great things.",author:"Logan"},
{quote:"He who boasts of his ancestry is praising the deeds of another.", author:"Author"},
{quote: "For most folks, no news is good news; for the press, good news is not news.", author:"Andrew"}];
    
let random=quotes[Math.floor(Math.random()*quotes.length)];

    
generateQuotes.textContent=random.quote;
    
nameOfAutthor.innerHTML=random.author;
    

}
     