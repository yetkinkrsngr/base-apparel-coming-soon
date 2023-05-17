const submit=document.querySelector(".submit");
const error=document.querySelector(".error");
const form= document.querySelector("form");
const input=document.querySelector("input");
// const label=document.querySelector("label");

form.addEventListener("submit",validate);
submit.addEventListener("click",validate);

function validate(e) {
    e.preventDefault();
    const inputValue = input.value;
    console.log(inputValue);
}