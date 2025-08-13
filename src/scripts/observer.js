let delay = 0.2;
const observerOptions ={
    root: null,
    rootMargin: '0px',
    threshold: 0.95
}
const observerCards = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const { isIntersecting } = entry
        if (isIntersecting) {
            entry.target.style.animation = 'none'; 
            entry.target.style.animation = "var(--animate-bounceIcon)";
            entry.target.style.animationDelay = `${delay}s`;
            delay += 0.6;
        }
    });
  }, observerOptions)

delay = 0.2;
const serviceCard = document.querySelectorAll('.service-card')
serviceCard.forEach(card => observerCards.observe(card)); 