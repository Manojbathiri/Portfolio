/**
 * Manoj Kumar Bathiri - Portfolio Script
 * Handles Theme Toggle, Typing Animation, Mobile Menu, Filter, Form, and Toasts
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================
       1. Typewriter Effect in Hero Section
       ========================================================== */
    const typingElement = document.getElementById('typing-text');
    const roles = [
        'Web Developer',
        'Frontend Developer',
        'JavaScript Enthusiast',
        'Problem Solver'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1600;

    function typeWriter() {
        if (!typingElement) return;

        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentRole.length) {
            currentSpeed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            currentSpeed = 400;
        }

        setTimeout(typeWriter, currentSpeed);
    }

    typeWriter();

    /* ==========================================================
       2. Dark / Light Theme Switcher
       ========================================================== */
    const themeButton = document.getElementById('theme-button');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    // Check saved theme in localStorage or system preference
    const savedTheme = localStorage.getItem('manoj-portfolio-theme') || 'dark';
    applyTheme(savedTheme);

    function applyTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('manoj-portfolio-theme', theme);

        if (themeIcon) {
            if (theme === 'light') {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            } else {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
        }
    }

    if (themeButton) {
        themeButton.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }

    /* ==========================================================
       3. Mobile Navigation Menu Toggle
       ========================================================== */
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if (navClose && navMenu) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Close menu when clicking on any navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('show-menu');
            }
        });
    });

    // Close menu on click outside
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('show-menu')) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('show-menu');
            }
        }
    });

    /* ==========================================================
       4. Active Navigation Link on Scroll
       ========================================================== */
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const navAnchor = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

            if (navAnchor) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navAnchor.classList.add('active-link');
                } else {
                    navAnchor.classList.remove('active-link');
                }
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    /* ==========================================================
       5. Project Filtering Logic
       ========================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category') || '';
                const categories = category.split(/\s+/);
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    /* ==========================================================
       6. Toast Notification Helper
       ========================================================== */
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');
    let toastTimeout;

    function showToast(message, type = 'success') {
        if (!toast || !toastMessage) return;

        toastMessage.textContent = message;

        if (type === 'success') {
            toast.style.background = '#10b981';
            if (toastIcon) toastIcon.className = 'fa-solid fa-circle-check';
        } else if (type === 'info') {
            toast.style.background = '#6366f1';
            if (toastIcon) toastIcon.className = 'fa-solid fa-info-circle';
        } else {
            toast.style.background = '#ef4444';
            if (toastIcon) toastIcon.className = 'fa-solid fa-triangle-exclamation';
        }

        toast.classList.add('show');

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    /* ==========================================================
       7. Copy Email to Clipboard
       ========================================================== */
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const email = copyEmailBtn.getAttribute('data-email') || 'manojkumar191952@gmail.com';
            navigator.clipboard.writeText(email)
                .then(() => {
                    showToast('Email address copied to clipboard!', 'success');
                })
                .catch(() => {
                    showToast('Failed to copy. Email: ' + email, 'info');
                });
        });
    }

    /* ==========================================================
       8. Interactive Contact Form Submission
       ========================================================== */
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('form-submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('user-name').value.trim();
            const email = document.getElementById('user-email').value.trim();
            const subject = document.getElementById('user-subject').value.trim();
            const message = document.getElementById('user-message').value.trim();

            if (!name || !email || !message) {
                showToast('Please fill in all required fields.', 'error');
                return;
            }

            // Button visual feedback
            if (submitBtn) {
                const originalHtml = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Preparing...';

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalHtml;
                    contactForm.reset();

                    showToast('Thank you Manoj! Opening your email client...', 'success');

                    // Open client mail application pre-filled
                    const targetEmail = 'manojkumar191952@gmail.com';
                    const mailtoBody = encodeURIComponent(
                        `Hi Manoj,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                    );
                    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry: ${subject}`);
                    
                    window.location.href = `mailto:${targetEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
                }, 1000);
            }
        });
    }

    /* ==========================================================
       9. Back to Top Button & Header Shadow on Scroll
       ========================================================== */
    const header = document.getElementById('header');
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 40) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = 'none';
            }
        }

        if (scrollTopBtn) {
            if (window.scrollY > 400) {
                scrollTopBtn.style.opacity = '1';
                scrollTopBtn.style.pointerEvents = 'auto';
            } else {
                scrollTopBtn.style.opacity = '0.5';
            }
        }
    });

    /* ==========================================================
       10. Footer Current Year
       ========================================================== */
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});
