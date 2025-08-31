document.getElementById('yr').textContent = new Date().getFullYear();

// GSAP reveals
window.addEventListener('load', ()=>{
  if(!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.reveal').forEach((el,i)=>{
    gsap.to(el,{opacity:1,y:0,duration:.8,ease:'power2.out',delay:i*0.06,
      scrollTrigger:{trigger:el,start:'top 90%'}})
  });

  // simple hero micro animation
  gsap.from('.hero h1',{y:18,opacity:0,duration:1,ease:'power3.out',delay:.15});

  // index-card hover lift
  document.querySelectorAll('.index-card').forEach(card=>{
    card.addEventListener('mouseenter',()=>gsap.to(card,{y:-6,duration:.18}));
    card.addEventListener('mouseleave',()=>gsap.to(card,{y:0,duration:.18}));
  });
});
