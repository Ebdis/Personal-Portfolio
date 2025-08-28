// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click", e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({behavior:"smooth"});
  });
});

// Scroll reveal animation
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', ()=>{
  faders.forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.classList.add('visible');
    }
  });
});
