const body = document.getElementsByTagName('body')[0];
//because getElementByTagName will be give list of elements with same tag
function setColor(name){
    body.style.backgroundColor = name;
}
const btnRed = document.querySelector('.red');
btnRed.addEventListener('click',()=>{
    setColor('red');
});
const  btnGreen = document.querySelector('.green');
btnGreen.addEventListener('click',()=>{
    setColor('green');
});
const btnBlue = document.querySelector('.blue');
btnBlue.addEventListener('click',()=>{
    setColor('blue');
});
function RandomColor(){
    // we are going to generate Random R G B values 
    // that lies between 0 - 255
    const red = Math.round(Math.random()*255);
    const green = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);
    const color = `rgb(${red},${green} , ${blue})`;
    body.style.backgroundColor = color;

}
const btnRandom = document.querySelector('.random');
btnRandom.addEventListener('click',()=>{
    RandomColor();
});





