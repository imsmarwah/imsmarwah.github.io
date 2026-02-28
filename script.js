// ===== TERMINAL LOADER =====
const lines = [
"> Initializing Sawan_Singh_Marwah.exe",
"> Loading Education...",
"> Loading Skills...",
"> Loading Projects...",
"> Future Goals Activated."
];

let i = 0;
let j = 0;

function typeLine(){
if(i < lines.length){
if(j < lines[i].length){
document.getElementById(`line${i+1}`).innerHTML += lines[i][j];
j++;
setTimeout(typeLine,40);
}else{
i++;
j=0;
setTimeout(typeLine,400);
}
}else{
setTimeout(showMain,800);
}
}

function showMain() {
    const loader = document.getElementById("loader");
    const main = document.getElementById("main-content");

    loader.classList.add("fade-out");

    setTimeout(() => {
        main.classList.add("show-content");
    }, 400);
}

typeLine();

// ===== MOBILE MENU =====
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

// ===== SCROLL REVEAL =====
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

hiddenElements.forEach(el=>observer.observe(el));

// ===== HERO TYPING TEXT =====
const text = "Full Stack Developer | AI Enthusiast | MSc Computer Systems";
let index = 0;
const typingElement = document.querySelector(".typing");

function typeHero(){
if(index < text.length){
typingElement.innerHTML += text.charAt(index);
index++;
setTimeout(typeHero,50);
}
}

typeHero();
