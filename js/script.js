// Get the button and the features section
const joinNowBtn = document.getElementById('join-now');
const featuresSection = document.getElementById('features');

// Add click event listener
joinNowBtn.addEventListener('click', () => {
    // Smooth scroll to features section
    featuresSection.scrollIntoView({ behavior: 'smooth' });
});

// Add a hover effect using mouse events
joinNowBtn.addEventListener('mouseover', () => {
    joinNowBtn.classList.add('bounce');
});

joinNowBtn.addEventListener('mouseout', () => {
    joinNowBtn.classList.remove('bounce');
});

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Get the id without '#'
        const targetSection = document.getElementById(targetId);
        
        // Smooth scroll to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

var menubtn = document.getElementById("menubtn")
    var menubtn = document.getElementById("sidenav")
    var menubtn = document.getElementById("menu")

menubtn.onclick=function(){
    if(sidenav.style.right == "-250px"){
        sidenav.style.right="0";
        menu.src="../assets/close.png"
    }
    else{
        sidenav.style.right = "-250px";
        menu.src="../assets/menu.png"
    }
}
; 