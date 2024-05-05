
const containerE1 = document.querySelector(".container");

const  careers = ["youtuber ","web developer","freelancer","instructor"];

let careerIndex = 0;
let characterIndex = 0;

updateText();
//function updatetext

function updateText(){

    containerE1.innerHTML= `<h1> i am a ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
   characterIndex++;

   if( characterIndex === careers[careerIndex].length){
    careerIndex++
    characterIndex = 0;
   }
   if(careerIndex === careers.length){
    careerIndex = 0;
   }
    setTimeout(updateText,400);
}
    