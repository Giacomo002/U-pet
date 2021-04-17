
const pet = document.querySelector('#pet');
const dog = document.querySelector('#dog');
const dogclass = document.querySelectorAll('.dog');
const cat = document.querySelector('#cat');
const catclass = document.querySelectorAll('.cat');
const fish = document.querySelector('#fish');
const fishclass = document.querySelectorAll('.fish');
const bird = document.querySelector('#bird');
const birdclass = document.querySelectorAll('.bird');

pet.addEventListener('click', e => {
    catclass.forEach(a => a.style.display = "block");
    dogclass.forEach(a => a.style.display = "block");
    fishclass.forEach(a => a.style.display = "block");
    birdclass.forEach(a => a.style.display = "block");
})
cat.addEventListener('click', e => {
    catclass.forEach(a => a.style.display = "block");
    dogclass.forEach(a => a.style.display = "none");
    fishclass.forEach(a => a.style.display = "none");
    birdclass.forEach(a => a.style.display = "none");
})
dog.addEventListener('click', e => {
    dogclass.forEach(a => a.style.display = "block");
    catclass.forEach(a => a.style.display = "none");
    fishclass.forEach(a => a.style.display = "none");
    birdclass.forEach(a => a.style.display = "none");
})
fish.addEventListener('click', e => {
    fishclass.forEach(a => a.style.display = "block");
    dogclass.forEach(a => a.style.display = "none");
    catclass.forEach(a => a.style.display = "none");
    birdclass.forEach(a => a.style.display = "none");
})
bird.addEventListener('click', e => {
    birdclass.forEach(a => a.style.display = "block");
    dogclass.forEach(a => a.style.display = "none");
    catclass.forEach(a => a.style.display = "none");
    fishclass.forEach(a => a.style.display = "none");
})

