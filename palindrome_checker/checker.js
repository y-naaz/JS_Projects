const inputElement = document.getElementById("value");
const para = document.getElementsByTagName('p')[0];
function reverse(str){
    return str.split("").reverse().join("");
}
function check(){
    const value = inputElement.value;
    const reversed = reverse(value);
    if(reversed===value) para.innerHTML="palindrome";
    else {
        para.innerHTML='Not a Palindrome';
    }
}
const btn=document.querySelector('.btn');
btn.addEventListener('click',()=>{
    check();
    inputElement.value="";
});

