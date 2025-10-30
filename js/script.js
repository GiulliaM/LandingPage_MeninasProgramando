
// Small scroll reveal implementation
function revealOnScroll(){
  document.querySelectorAll('.reveal').forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < (window.innerHeight - 80)) el.classList.add('visible');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Simple form handling (client-side). Replace with real endpoint when ready.
document.getElementById('volunteerForm').addEventListener('submit', function(e){
  e.preventDefault();
  const result = document.getElementById('volunteerResult');
  result.style.display = 'block';
  result.innerHTML = `<div class="alert alert-success">Obrigada, <strong>${document.getElementById('name').value}</strong>! Recebemos sua inscrição e vamos responder em breve.</div>`;
  this.reset();
});

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const res = document.getElementById('contactResult');
  res.style.display='block';
  res.innerHTML = '<div class="alert alert-success">Mensagem enviada! Obrigada pelo contato.</div>';
  this.reset();
});

// Small decorative animated code lines using JS
(function floatingCodeLines(){
  const container = document.createElement('div');
  container.style.position='fixed'; container.style.inset='0'; container.style.pointerEvents='none';
  for(let i=0;i<8;i++){
    const span = document.createElement('span');
    span.textContent = i%2? '<div></div>':'const x = 10;';
    span.style.position='absolute';
    span.style.left = Math.random()*100 + '%';
    span.style.top = Math.random()*100 + '%';
    span.style.opacity = '0.04';
    span.style.fontFamily = 'monospace';
    span.style.fontSize = '12px';
    span.style.transform = 'translateY(0)';
    span.style.transition = 'transform 6s ease-in-out';
    container.appendChild(span);
    setInterval(()=>{
      span.style.transform = `translateY(${(Math.random()*40)-20}px) translateX(${(Math.random()*30)-15}px)`;
    }, 3000 + Math.random()*4000);
  }
  document.body.appendChild(container);
})();

