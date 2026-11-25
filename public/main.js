document.getElementById('year').textContent = new Date().getFullYear();
const cur = document.getElementById('cursor');
addEventListener('mousemove', e => { cur.style.left = e.clientX + 'px'; cur.style.top = e.clientY + 'px'; });
document.querySelectorAll('a,.card').forEach(el => {
  el.addEventListener('mouseenter', () => cur.classList.add('big'));
  el.addEventListener('mouseleave', () => cur.classList.remove('big'));
});
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  e.target.querySelectorAll('[data-count]').forEach(n => {
    const t = +n.dataset.count; let v = 0;
    const s = setInterval(() => { v += Math.ceil(t / 40); if (v >= t) { v = t; clearInterval(s); } n.textContent = v; }, 30);
  });
  io.unobserve(e.target);
}), { threshold: .15 });
document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 80 + 'ms'; io.observe(el); });
