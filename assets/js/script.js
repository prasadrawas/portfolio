// ========================================
// PRELOADER
// ========================================
(function() {
    const preloader = document.getElementById('preloader');
    const linesEl = document.getElementById('preloaderLines');
    if (!preloader || !linesEl) return;

    const lines = [
        { text: '> loading projects...', delay: 200 },
        { text: '> compiling skills...', delay: 400 },
        { text: '> building UI...', delay: 600 },
        { text: '> prasad.dev ready', delay: 800, cls: 'ready-text' },
    ];

    lines.forEach(({ text, delay, cls }) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.innerHTML = text;
            if (cls) p.classList.add(cls);
            linesEl.appendChild(p);
        }, delay);
    });

    setTimeout(() => {
        preloader.classList.add('done');
    }, 1200);
})();

// ========================================
// CODE RAIN (subtle background effect)
// ========================================
const codeRainCanvas = document.getElementById('codeRain');
if (codeRainCanvas) {
    const ctx = codeRainCanvas.getContext('2d');
    const chars = '{}[]()<>=;:const let var function return if else for while import export async await class new this => + - * / % ! & | ^ ~ . , ? # @ $ _ 0 1'.split(' ');
    let columns = [];
    let drops = [];

    function initRain() {
        codeRainCanvas.width = codeRainCanvas.offsetWidth;
        codeRainCanvas.height = codeRainCanvas.offsetHeight;
        const fontSize = 14;
        columns = Math.floor(codeRainCanvas.width / fontSize);
        drops = Array(columns).fill(1).map(() => Math.random() * -100);
    }

    function drawRain() {
        ctx.fillStyle = 'rgba(10, 10, 11, 0.08)';
        ctx.fillRect(0, 0, codeRainCanvas.width, codeRainCanvas.height);
        ctx.fillStyle = '#6366f1';
        ctx.font = '13px JetBrains Mono, monospace';

        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * 14, drops[i] * 14);
            if (drops[i] * 14 > codeRainCanvas.height && Math.random() > 0.98) {
                drops[i] = 0;
            }
            drops[i] += 0.4;
        }
        requestAnimationFrame(drawRain);
    }

    initRain();
    drawRain();
    window.addEventListener('resize', initRain);
}

// ========================================
// CURSOR GLOW
// ========================================
const cursorGlow = document.getElementById('cursorGlow');
let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top = glowY + 'px';
    requestAnimationFrame(animateGlow);
}
animateGlow();

// ========================================
// TYPEWRITER
// ========================================
const phrases = [
    'Full-Stack Developer',
    'Mobile App Engineer',
    'Flutter & React Native Dev',
    'Open Source Contributor',
    'CI/CD & DevOps Enthusiast'
];

const typewriterEl = document.getElementById('typewriter');
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typewrite() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
        typewriterEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
        delay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 500;
    }

    setTimeout(typewrite, delay);
}
typewrite();

// ========================================
// SCROLL REVEAL
// ========================================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ========================================
// NAV SCROLL EFFECT
// ========================================
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ========================================
// MOBILE MENU
// ========================================
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        mobileMenu.classList.remove('open');
    });
});

// ========================================
// COUNTER ANIMATION
// ========================================
const statNumbers = document.querySelectorAll('.stat-number[data-count]');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseFloat(entry.target.dataset.count);
            const decimals = parseInt(entry.target.dataset.decimal || '0');
            animateCounter(entry.target, target, decimals);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(el => counterObserver.observe(el));

function animateCounter(el, target, decimals) {
    let current = 0;
    const steps = 40;
    const increment = target / steps;
    const duration = 1500;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.textContent = decimals > 0 ? target.toFixed(decimals) : target;
            clearInterval(timer);
        } else {
            el.textContent = decimals > 0 ? current.toFixed(decimals) : Math.floor(current);
        }
    }, stepTime);
}

// ========================================
// EXPERIENCE BARS ANIMATION
// ========================================
const expChart = document.querySelector('.exp-chart');

if (expChart) {
    const expObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const rows = entry.target.querySelectorAll('.exp-row');
                rows.forEach(row => {
                    const count = parseInt(row.dataset.count);
                    const max = parseInt(row.dataset.max);
                    const percentage = (count / max) * 100;
                    const bar = row.querySelector('.exp-bar');
                    const countEl = row.querySelector('.exp-count');

                    bar.style.setProperty('--bar-width', percentage + '%');
                    bar.classList.add('animated');
                    countEl.classList.add('animated');
                });
                expObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    expObserver.observe(expChart);
}

// ========================================
// PROJECT TABS
// ========================================
const projectTabs = document.querySelectorAll('.project-tab');
const projectGroups = document.querySelectorAll('.project-group[data-tab-group]');

projectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        projectTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const selected = tab.dataset.tab;

        projectGroups.forEach(group => {
            if (selected === 'all' || group.dataset.tabGroup === selected) {
                group.classList.remove('tab-hidden');
                group.style.animation = 'fadeInUp 0.4s ease forwards';
            } else {
                group.classList.add('tab-hidden');
            }
        });
    });
});

// ========================================
// EXPAND BUTTONS
// ========================================
function setupExpand(btnId, hiddenClass) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    const hiddenCards = document.querySelectorAll('.' + hiddenClass);

    btn.addEventListener('click', () => {
        const isExpanded = btn.classList.contains('expanded');
        btn.classList.toggle('expanded');

        hiddenCards.forEach((card, i) => {
            if (isExpanded) {
                card.classList.remove('show');
                card.classList.add(hiddenClass);
            } else {
                card.classList.remove(hiddenClass);
                card.classList.add('show');
                card.style.animation = `fadeInUp 0.4s ease ${i * 0.08}s forwards`;
            }
        });

        btn.querySelector('span').textContent = isExpanded
            ? `View All ${btnId === 'expandPro' ? 'Professional' : 'Passion'} Projects`
            : 'Show Less';
    });
}

setupExpand('expandPro', 'pro-hidden');
setupExpand('expandPersonal', 'personal-hidden');

// ========================================
// PROJECT CARD CLICK → DETAIL PAGE
// ========================================
document.querySelectorAll('[data-project]').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
        // Don't navigate if clicking a link inside the card
        if (e.target.closest('a')) return;
        const id = card.dataset.project;
        window.location.href = `project.html?id=${id}`;
    });
});

// Fade-in-up keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// ========================================
// SMOOTH SCROLL FOR NAV LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========================================
// ACTIVE NAV LINK ON SCROLL
// ========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
                link.classList.toggle('active',
                    link.getAttribute('href') === `#${id}`
                );
            });
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '-80px 0px -50% 0px'
});

sections.forEach(section => sectionObserver.observe(section));
