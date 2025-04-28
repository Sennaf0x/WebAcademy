//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const us = document.getElementById('us');
const br = document.getElementById('br');
const check = document.querySelector('.check');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "Bob já dizia! Uma molécula de :insertx: pode apresentar o estado físico :inserty:. Dependendo das condições de :insertz:. Sendo o ponto de ebulição ou fusão representados em :grau:";
const insertX = ["água", "gás Carbônico", "amônia"];
const insertY = ["líquido", "gasoso", "sólido"];
const insertZ = ["Temperatura", "Pressão", "Entalpia"];
let grau = "° F" + "(Grau Fahrenheit)";

us.addEventListener('click', usa);

function usa() {
    
    if(us.checked) {
        br.checked = false
    }
}
    
randomize.addEventListener('click', result);

function result() {
    
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    
    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }
    
    if(document.getElementById("br").checked) {
        document.getElementById("us").checked = false
        let grau = "°C"+" (grau Celsius)"
        newStory = newStory.replace(':grau:', grau);
    } else {
        newStory = newStory.replace(':grau:', grau);

    }   
    
    story.textContent = newStory;
    story.style.visibility = 'visible';
}