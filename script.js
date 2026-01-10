let themeCta = document.querySelector(".theme-cta");

themeCta.addEventListener("click", () => {
  document.documentElement.classList.toggle("second");
  themeCta.classList.toggle("dark");
});

let menuBtn = document.querySelector('.menu-icon');
let navList = document.querySelectorAll('.nav__list-item');
let navContent = document.querySelector('.nav-wrapper');
let navListItem = document.querySelectorAll('.nav__list-item a');

function menuActive(){
  menuBtn.addEventListener('click' ,function () {
    menuBtn.classList.toggle('menu_active');
    navContent.classList.toggle('menu_active');
    navList.forEach((navList) => navList.classList.toggle('menu_active'));
    themeCta.classList.toggle('menu_active');
  });
};

menuActive();

function menuInactive(){
  navListItem.forEach((navListItem) => navListItem.addEventListener('click' , function() {
    menuBtn.classList.remove('menu_active');
    navContent.classList.remove('menu_active');
    navList.forEach((navList) => navList.classList.remove('menu_active'));
    themeCta.classList.remove('menu_active');
  }));
};

menuInactive();

window.addEventListener('scroll' , reveal);
window.addEventListener('scroll' , ()=>{
  document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight))
}, false);


var connectIcons = document.querySelectorAll('.connect-icon');
var connectTexts = document.querySelector('.connect-txt');


function reveal() {
  
  for (var i = 0; i < connectIcons.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = connectIcons[i].getBoundingClientRect().top;
    var revealPoint = -50; 

    if(revealTop < windowHeight - revealPoint){
      connectIcons[i].classList.add('show');
    } else {
      connectIcons[i].classList.remove('show');
    }
    if(connectIcons[i].classList.contains('show')){
      connectTexts.classList.add('show');
    } else {
      connectTexts.classList.remove('show');
    }
  }

}

window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
})

document.addEventListener('DOMContentLoaded', () => {
    // Select the quote container
    const quoteText = document.querySelector('.quote .abt-h1');
    
    if (quoteText) {
        // 1. Process the Text Logic
        const nodes = Array.from(quoteText.childNodes);
        let newHTML = '';

        nodes.forEach(node => {
            // Check if it's a Text Node (The "Bright" keywords like 'empathy')
            if (node.nodeType === 3) { // Node.TEXT_NODE
                const text = node.textContent.trim();
                if (text.length > 0) {
                    // Split into words and mark as HIGHLIGHT
                    const words = text.split(' ');
                    words.forEach(word => {
                        newHTML += `<span class="word-mask"><span class="word highlight">${word}</span></span> `;
                    });
                }
            } 
            // Check if it's an Element Node (The spans with var(--white-06))
            else if (node.nodeType === 1) { // Node.ELEMENT_NODE
                const text = node.textContent.trim();
                if (text.length > 0) {
                    // Split into words and mark as DIM
                    const words = text.split(' ');
                    words.forEach(word => {
                        newHTML += `<span class="word-mask"><span class="word dim">${word}</span></span> `;
                    });
                }
            }
        });

        // Update the HTML with our new structure
        quoteText.innerHTML = newHTML;

        // 2. Set up the Stagger Delays
        const allWords = quoteText.querySelectorAll('.word');
        allWords.forEach((word, index) => {
            // Delay increases by 0.03s per word for a smooth wave
            word.style.transitionDelay = `${index * 0.03}s`;
        });

        // 3. Scroll Trigger (Intersection Observer)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    quoteText.classList.add('in-view');
                    observer.unobserve(entry.target); // Run only once
                }
            });
        }, { threshold: 0.2 }); // Trigger when 20% of the quote is visible

        observer.observe(quoteText);
    }
});