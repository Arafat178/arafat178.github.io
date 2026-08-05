document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Theme Toggle (Dark/Light Mode) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // --- 2. Mobile Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- 3. Navbar Scroll Effect & Scroll Progress Bar ---
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Navbar background
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Scroll progress width calculation
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;

        // Back to top button visibility
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Back to top functionality
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- 4. Typing Animation ---
    const typedTextSpan = document.getElementById('typed-text');
    const textArray = ["Mechanical Engineer", "CAD Designer", "Automation Enthusiast", "Game Developer", "CAD Automation Engineer"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }
    
    // Start typing effect on load
    if(textArray.length) setTimeout(type, newTextDelay);

    // --- 11. Dynamic Projects Loading ---
    const projectsContainer = document.getElementById('dynamic-projects-container');

    if (projectsContainer) {
        myProjects.forEach(project => {
            
            // টেক-স্ট্যাক স্প্যান তৈরি
            let techSpans = '';
            project.techStack.forEach(tech => {
                techSpans += `<span>${tech}</span>`;
            });

            // বাটনগুলো ডাইনামিকভাবে তৈরি করা
            let buttonsHTML = ''; // প্রথমে বাটনের জায়গাটি একেবারে ফাঁকা রাখব

            // গিটহাব লিঙ্ক থাকলে তবেই বাটন যোগ হবে
            if (project.githubLink) {
                buttonsHTML += `<a href="${project.githubLink}" target="_blank" class="btn btn-outline btn-sm">GitHub</a>`;
            }

            // লাইভ ডেমো লিঙ্ক থাকলে বাটন যোগ হবে
            if (project.liveDemoLink) {
                buttonsHTML += `<a href="${project.liveDemoLink}" target="_blank" class="btn btn-primary btn-sm">Live Demo</a>`;
            }

            // ইউটিউব লিঙ্ক থাকলে বাটন যোগ হবে
            if (project.youtubeLink) {
                buttonsHTML += `<a href="${project.youtubeLink}" target="_blank" class="btn btn-secondary btn-sm" style="color: #ff0000; border-color: #ff0000;">YouTube</a>`;
            }

            // সম্পূর্ণ প্রজেক্ট কার্ডের HTML 
            const projectCardHTML = `
                <div class="project-card glass-card scroll-animate" data-category="${project.category}">
                    
                    <!-- ছবির কন্টেইনার -->
                    <div class="project-image-container">
                        <img src="${project.image}" alt="${project.title}" class="project-img">
                    </div>

                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="tech-stack">
                            ${techSpans}
                        </div>
                        
                        <!-- ডাইনামিক বাটনগুলো এখানে বসবে -->
                        <div class="project-links">
                            ${buttonsHTML}
                        </div>
                    </div>
                </div>
            `;

            projectsContainer.innerHTML += projectCardHTML;
        });
    }

    // --- 5. Intersection Observer for Scroll Animations & Active Nav ---
    const sections = document.querySelectorAll('section');
    const scrollAnimateElements = document.querySelectorAll('.scroll-animate');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.02
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Section link highlighting
            if (entry.isIntersecting && entry.target.tagName.toLowerCase() === 'section') {
                const id = entry.target.getAttribute('id');
                links.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }

            // Reveal animations
            if (entry.isIntersecting && entry.target.classList.contains('scroll-animate')) {
                entry.target.classList.add('show');
                
                // If it's a skill bar, trigger width animation
                const progressBar = entry.target.querySelector('.progress');
                if (progressBar) {
                    progressBar.style.width = progressBar.getAttribute('data-width');
                }

                // If it's a counter, trigger count animation
                if (entry.target.classList.contains('counter-box')) {
                    const counter = entry.target.querySelector('.counter');
                    updateCounter(counter);
                }
                
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
    scrollAnimateElements.forEach(el => observer.observe(el));

    // --- 6. Counter Animation Logic ---
    function updateCounter(counter) {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 50; // Speed adjustment

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => updateCounter(counter), 40);
        } else {
            counter.innerText = target;
        }
    }

    // --- 7. Project Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
                    card.style.display = 'flex';
                    setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => { card.style.display = 'none'; }, 300);
                }
            });
        });
    });

    // --- 8. Form Validation ---
    const contactForm = document.getElementById('contact-form');
    const successMsg = document.getElementById('success-msg');

    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Basic validation
            if (name.value.trim() === '') {
                name.parentElement.classList.add('error');
                isValid = false;
            } else {
                name.parentElement.classList.remove('error');
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                email.parentElement.classList.add('error');
                isValid = false;
            } else {
                email.parentElement.classList.remove('error');
            }

            if (message.value.trim() === '') {
                message.parentElement.classList.add('error');
                isValid = false;
            } else {
                message.parentElement.classList.remove('error');
            }

            if (isValid) {
                // Simulate AJAX request
                const btn = contactForm.querySelector('button[type="submit"]');
                const originalText = btn.innerText;
                btn.innerText = 'Sending...';
                
                setTimeout(() => {
                    contactForm.reset();
                    btn.innerText = originalText;
                    successMsg.style.display = 'block';
                    setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
                }, 1500);
            }
        });
    }

    // --- 9. Button Ripple Effect ---
    const buttons = document.querySelectorAll('.ripple');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;
            
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            ripples.classList.add('ripple-span');
            this.appendChild(ripples);
            
            setTimeout(() => { ripples.remove() }, 600);
        });
    });

    // --- 10. Engineering Geometric Particle Background (Canvas) ---
    const canvas = document.getElementById('particle-canvas');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        let particlesArray;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        });

        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        function init() {
            particlesArray = [];
            let numberOfParticles = (canvas.height * canvas.width) / 12000;
            // Cap max particles for performance
            if (numberOfParticles > 100) numberOfParticles = 100;

            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            const particleColor = isLight ? 'rgba(59, 130, 246, 0.2)' : 'rgba(6, 182, 212, 0.3)';

            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 3) + 1;
                let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 1) - 0.5;
                let directionY = (Math.random() * 1) - 0.5;

                particlesArray.push(new Particle(x, y, directionX, directionY, size, particleColor));
            }
        }

        // Draw structural connecting lines
        function connect() {
            let opacityValue = 1;
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                                 + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = isLight ? `rgba(59, 130, 246, ${opacityValue * 0.2})` : `rgba(6, 182, 212, ${opacityValue * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connect();
        }

        // Re-init canvas particles on theme toggle to match colors
        themeToggleBtn.addEventListener('click', () => {
            setTimeout(init, 50); // slight delay to allow theme var swap
        });

        init();
        animate();
    }

    // 12--- Hero Image Slider ---
    const heroImg = document.getElementById('hero-slider-img');

    if (heroImg) {
        // আপনার ৩ বা ৪টি ছবির লোকেশন একটি Array তে রাখুন
        const images = [
            "Assets/arafatPhoto/arafatPhoto1.png",
            "Assets/arafatPhoto/arafatPhoto2.png",
            "Assets/arafatPhoto/arafatPhoto3.png",
            "Assets/arafatPhoto/arafatPhoto4.png",
            "Assets/arafatPhoto/arafatPhoto5.png"
        ];
        
        let currentImgIndex = 0; // প্রথম ছবির ইনডেক্স ০

        // setInterval ব্যবহার করে প্রতি ৩ সেকেন্ড (3000ms) পরপর ফাংশনটি চলবে
        setInterval(() => {
            // ১. প্রথমে ছবিটির opacity 0 করে লুকিয়ে ফেলব
            heroImg.classList.add('fade-out');
            
            // ২. ০.৫ সেকেন্ড (500ms) অপেক্ষা করব যেন fade-out অ্যানিমেশনটি শেষ হয়
            setTimeout(() => {
                // ইনডেক্স ১ করে বাড়াব। Array এর শেষে গেলে আবার ০ তে ফিরে আসবে।
                currentImgIndex = (currentImgIndex + 1) % images.length;
                
                // ছবির সোর্স (src) পরিবর্তন করব
                heroImg.src = images[currentImgIndex];
                
                // নতুন ছবি বসানোর পর fade-out ক্লাস রিমুভ করে দেব, ফলে ছবি আবার ভেসে উঠবে
                heroImg.classList.remove('fade-out');
                
            }, 500); 

        }, 4000); // 3000ms = ৩ সেকেন্ড
    }

});