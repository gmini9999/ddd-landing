export function setupScrollAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '-50px'
    }
  );

  const sections = Array.from(document.querySelectorAll('section'));
  const animatedElements = Array.from(document.querySelectorAll('.animate-on-scroll'));

  sections.forEach(section => observer.observe(section));
  animatedElements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
} 