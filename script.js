document.addEventListener('DOMContentLoaded', () => {
    // Interactive Signature Element (Glow Orb Follows Mouse slowly)
    const orb = document.getElementById('glow-orb');
    
    // Only apply on non-touch devices for better performance
    if (window.matchMedia("(pointer: fine)").matches && orb) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let currentX = window.innerWidth / 2;
        let currentY = window.innerHeight / 2;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth follow animation
        function animateOrb() {
            const ease = 0.05;
            currentX += (mouseX - currentX) * ease;
            currentY += (mouseY - currentY) * ease;
            orb.style.transform = `translate(calc(-50% + ${currentX - window.innerWidth / 2}px), calc(-50% + ${currentY - window.innerHeight / 2}px))`;
            requestAnimationFrame(animateOrb);
        }
        animateOrb();
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.glass-card, h2, p, .reveal-target');
    
    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
