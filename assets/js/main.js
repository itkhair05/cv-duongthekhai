function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else { 
        menuBtn.className = "nav-menu";
    }
}

const themeToggle = document.getElementById('theme-toggle');
const themeInput = themeToggle.querySelector('input');
themeInput.addEventListener('change', () => { 
    document.body.classList.toggle('dark-theme');
    const isDarkTheme = document.body.classList.contains('dark-theme');
    updateParticles(isDarkTheme);
});

const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
let isPlaying = false; 

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicToggle.querySelector('i').classList.remove('uil-pause');
        musicToggle.querySelector('i').classList.add('uil-play');
    } else {
        backgroundMusic.play();
        musicToggle.querySelector('i').classList.remove('uil-play');
        musicToggle.querySelector('i').classList.add('uil-pause');
    }
    isPlaying = !isPlaying; 
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(item => item.classList.remove('active-link'));
        link.classList.add('active-link');
    });
});

const footerLinks = document.querySelectorAll('.footer_menu_list a');
footerLinks.forEach(footerLink => {
    footerLink.addEventListener('click', () => {
        navLinks.forEach(item => item.classList.remove('active-link'));
        const targetHref = footerLink.getAttribute('href');
        const matchingNavLink = Array.from(navLinks).find(navLink => navLink.getAttribute('href') === targetHref);
        if (matchingNavLink) {
            matchingNavLink.classList.add('active-link');
        }
    });
});

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => link.classList.remove('active-link'));
            const matchingNavLink = Array.from(navLinks).find(link => link.getAttribute('href') === `#${id}`);
            if (matchingNavLink) {
                matchingNavLink.classList.add('active-link');
            }
        }
    });
}, { threshold: 0.5 }); 
sections.forEach(section => observer.observe(section));

var typingEffect = new Typed(".typedText", {
    strings: ["Dương Thế Khải"], 
    loop: true, 
    typeSpeed: 90, 
    backSpeed: 70, 
    backDelay: 2000 
});

const sr = ScrollReveal({
    origin: 'top', 
    distance: '60px', 
    duration: 1800, 
    reset: true 
});

sr.reveal('.featured-text', {}); 
sr.reveal('.avatar-container', {delay: 200, duration: 1400, origin: 'bottom'});
sr.reveal('.top-header', {}); 
sr.reveal('.skills-box', {interval: 150}); 
sr.reveal('.hobby-box', {interval: 150}); 
sr.reveal('.project-box', {interval: 150}); 
sr.reveal('.certificate-box', {interval: 150}); 
sr.reveal('.journey-box', {
  delay: 200,
  interval: 150,
  duration: 1000,
  distance: '20px', // Giảm khoảng cách trượt
  origin: 'bottom' // Thay đổi hướng trượt từ dưới lên
});
sr.reveal('.row', {interval: 150}); 
sr.reveal('.contact-box', {interval: 150});

VanillaTilt.init(document.querySelector('.hexagon-frame'), {
    max: 12, 
    speed: 300, 
    glare: true, 
    'max-glare': 0.3 
});

function updateParticles(isDarkTheme) {
    particlesJS('avatar-particles', {
        particles: {
            number: { value: 120, density: { enable: true, value_area: 400 } }, // Increased number, reduced value_area for density
            color: { 
                value: isDarkTheme 
                    ? ['#2b6cb0', '#4fd1c5', '#ffffff'] 
                    : ['#2b6cb0', '#4fd1c5', '#2d3748'] 
            },
            shape: { 
                type: ['circle', 'triangle'], 
                stroke: { width: 0, color: '#000000' },
                polygon: { nb_sides: 5 }
            },
            opacity: { 
                value: 0.5, 
                random: true, 
                anim: { enable: true, speed: 0.7, opacity_min: 0.15, sync: false }
            },
            size: { 
                value: 5, // Increased size for larger particles
                random: true, 
                anim: { enable: true, speed: 1.2, size_min: 1, sync: false } // Adjusted size_min
            },
            line_linked: {
                enable: true,
                distance: 90,
                color: isDarkTheme ? '#e2e8f0' : '#4a5568',
                opacity: 0.3,
                width: 0.6
            },
            move: { 
                enable: true, 
                speed: 2, 
                direction: 'none', 
                random: true, 
                straight: false, 
                out_mode: 'bounce', 
                attract: { enable: true, rotateX: 700, rotateY: 1000 }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { 
                onhover: { enable: true, mode: 'grab' }, 
                onclick: { enable: true, mode: 'push' }, 
                resize: true 
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 0.3 } },
                push: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });
}
const isDarkTheme = document.body.classList.contains('dark-theme');
updateParticles(isDarkTheme);

// Handle form submission feedback
const formButton = document.querySelector('.form-button .btn');
formButton.addEventListener('click', () => {
    const feedback = document.getElementById('form-feedback');
    feedback.style.display = 'block';
    setTimeout(() => {
        feedback.style.display = 'none';
    }, 3000);
});
