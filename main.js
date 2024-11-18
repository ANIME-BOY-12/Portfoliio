const texts =[
  "WEB DEVELOPER"
]
const text2 =[
  "Skills"
]
const text3 =[
  "EDUCATION"
]

const textElement = document.getElementById("work");
let charIndex = 0;
function typeWritter(){
  if(charIndex<texts[0].length){
    textElement.innerHTML = textElement.innerHTML + texts[0].charAt(charIndex);
    charIndex++;
    setTimeout(typeWritter,200);
  }
  else{
    textElement.innerHTML = " "
    charIndex =0;
    setTimeout(typeWritter,200);
  }
}
typeWritter()

const skills = document.getElementById("skill");
let charIndex1 = 0;
function typeWritter1(){
  if(charIndex<texts[0].length){
    skills.innerHTML = skills.innerHTML + text2[0].charAt(charIndex1);
    charIndex1++;
    setTimeout(typeWritter1,200);
  }
  else{
    skills.innerHTML = " "
    charIndex1 =0;
    setTimeout(typeWritter1,50);
  }
}
typeWritter1()


const edu = document.getElementById("edu");
let charIndex3 = 0;
function typeWritter3(){
  if(charIndex<texts[0].length){
    edu.innerHTML = edu.innerHTML + text3[0].charAt(charIndex3);
    charIndex3++;
    setTimeout(typeWritter3,200);
  }
  else{
    edu.innerHTML = " "
    charIndex3 =0;
    setTimeout(typeWritter3,50);
  }
}
typeWritter3();