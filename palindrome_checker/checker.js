const inputElement = document.getElementById("value");
const para = document.getElementsByTagName('p')[0];
function checkIfPalindrom(text){
    text.toLowerCase();
    let s="";
    const n = text.length;

    for(let i = n-1;i>=0;i--){
        s+=text[i];
    }
    if(s===text){
        para.innerHTML= `${text} is a palindorme`;
    }
    else{
        para.innerHTML = `${text} is not a palindrome`;
    }
}
const btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    checkIfPalindrom(inputElement.value);
});