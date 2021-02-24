const form = document.querySelector("form");
const message =document.getElementById("message");
const input = document.querySelector("input");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    message.innerHTML=(input.value).toUpperCase();
})