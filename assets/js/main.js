// Hàm toggle menu điều hướng trên thiết bị di động
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else { 
        menuBtn.className = "nav-menu";
    }
}

// Chuyển đổi giao diện sáng/tối
const themeToggle = document.getElementById('theme-toggle');
const themeInput = themeToggle.querySelector('input');
themeInput.addEventListener('change', () => { 
    document.body.classList.toggle('dark-theme');
    const isDarkTheme = document.body.classList.contains('dark-theme');
    updateParticles(isDarkTheme);
});

// Điều khiển phát/tạm dừng nhạc nền
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

// Hiệu ứng gõ chữ tự động với Typed.js
var typingEffect = new Typed(".typedText", {
    strings: ["Dương Thế Khải"], 
    loop: true, 
    typeSpeed: 100, 
    backSpeed: 80, 
    backDelay: 2000 
});

const sr = ScrollReveal({
    origin: 'top', 
    distance: '80px', 
    duration: 2000, 
    reset: true 
});

// Áp dụng hiệu ứng reveal cho các phần tử với các tùy chỉnh riêng
sr.reveal('.featured-text', {}); 
sr.reveal('.avatar-container', {delay: 300, duration: 1500, origin: 'bottom'});
sr.reveal('.top-header', {}); 
sr.reveal('.skills-box', {interval: 200}); 
sr.reveal('.hobby-box', {interval: 200}); 
sr.reveal('.project-box', {interval: 200}); 
sr.reveal('.certificate-box', {interval: 200}); 
sr.reveal('.row', {interval: 200}); 

// Khởi tạo hiệu ứng nghiêng 3D với VanillaTilt
VanillaTilt.init(document.querySelector('.hexagon-frame'), {
    max: 15, 
    speed: 400, 
    glare: true, 
    'max-glare': 0.4 
});

// Hàm khởi tạo và cập nhật particles.js
function updateParticles(isDarkTheme) {
    particlesJS('avatar-particles', {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 600 } }, // Maintained dense particle count
            color: { 
                value: isDarkTheme 
                    ? ['#6e57e0', '#00c9ff', '#ff4b8b', '#ffffff'] // Vibrant for dark theme
                    : ['#6e57e0', '#00c9ff', '#ff4b8b', '#444444'] // Muted for light theme
            },
            shape: { 
                type: ['circle', 'triangle'], // Mixed shapes for variety
                stroke: { width: 0, color: '#000000' },
                polygon: { nb_sides: 5 }
            },
            opacity: { 
                value: 0.6, 
                random: true, 
                anim: { enable: true, speed: 0.8, opacity_min: 0.2, sync: false } // Gentle fade
            },
            size: { 
                value: 3.5, // Increased particle size for larger particles
                random: true, 
                anim: { enable: true, speed: 1.5, size_min: 0.8, sync: false } // Adjusted min size
            },
            line_linked: {
                enable: true,
                distance: 80, // Reduced distance for denser connections
                color: isDarkTheme ? '#ffffff' : '#555555', // Theme-adaptive lines
                opacity: 0.4, // Slightly increased opacity for visibility
                width: 0.7 // Thin lines for elegance
            },
            move: { 
                enable: true, 
                speed: 2.5, // Slower for calm effect
                direction: 'none', 
                random: true, 
                straight: false, 
                out_mode: 'bounce', 
                attract: { enable: true, rotateX: 800, rotateY: 1200 }
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
                grab: { distance: 150, line_linked: { opacity: 0.4 } }, // Subtle grab effect
                push: { particles_nb: 3 } // Moderate particle addition
            }
        },
        retina_detect: true
    });
}

// Khởi tạo particles.js với theme ban đầu
const isDarkTheme = document.body.classList.contains('dark-theme');
updateParticles(isDarkTheme);