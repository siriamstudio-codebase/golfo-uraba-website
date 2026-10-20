/* ============ 1. IMÁGENES (único lugar para cambiarlas) ============
   Valor = ID de Unsplash ("photo-...") o ruta propia ("assets/img/foto.jpg").
   null = tarjeta de color con emoji mientras no haya foto. */
const U = {
  beach:'photo-1708716175154-32344ec0868a', isle:'photo-1576475510454-b0af18970e6d',
  aerial:'photo-1618064541372-289bdb6f5b7b', palms:'photo-1655299417498-52f3a304c2a4',
  bay:'photo-1582300857444-5ddd87c86797', green:'photo-1617280325974-f9c5721a4862',
  boats:'photo-1653465255362-2ce1ced1d97d', island:'photo-1631547537962-08c6b4e8e900',
  jungle:'photo-1581778191198-c6c1bbf2c842', dome:'photo-1568322445389-495f4a7d20d4',
  macaw:'photo-1708310945058-d01a27bff936', macaw2:'photo-1608336837853-0e986507a8bd',
  turtle:'photo-1709483095301-2d1f3e95b1d4',
  bed1:'photo-1658595148963-13b7da6dcd6d', bed2:'photo-1658595149281-8d6bb3643eab', bed3:'photo-1576354302919-96748cb8299e',
  bed4:'photo-1683237854712-adb97a9eaa80', bed5:'photo-1658595148983-02cbe203aea7', bed6:'photo-1658595149174-ff76486ec800',
  twin1:'photo-1657639754502-3c138cb24b4c', twin2:'photo-1744187170989-0da1811af435'
};
const IMG = {
  hero: U.beach, intro: U.isle, cta: U.bay,
  'exp-playa': U.aerial, 'exp-aventura': U.jungle, 'exp-cultura': U.dome, 'exp-grupos': U.boats, 'exp-operacion': U.island, 'exp-alojamiento': U.bed1,
  'feat-aves': U.macaw, 'feat-fauna': U.turtle, 'feat-playas': U.palms, 'feat-rios': U.green, 'feat-cultura': U.dome,
  'room-brisa': U.bed1, 'room-brisa-1': U.bed1, 'room-brisa-2': U.bed2, 'room-brisa-3': U.palms,
  'room-manglar': U.bed4, 'room-manglar-1': U.bed4, 'room-manglar-2': U.bed5, 'room-manglar-3': U.green,
  'room-atardecer': U.twin1, 'room-atardecer-1': U.twin1, 'room-atardecer-2': U.twin2, 'room-atardecer-3': U.bay,
  'room-ceiba': U.bed6, 'room-ceiba-1': U.bed6, 'room-ceiba-2': U.bed3, 'room-ceiba-3': U.island,
  'food-almuerzos': null, 'food-mar': null, 'food-desayunos': null, 'food-combos': null, 'food-bebidas': null,
  'pack-sol': U.isle, 'pack-uraba': U.boats, 'pack-darien': U.jungle,
  'form-playa': U.beach, 'form-aventura': U.jungle, 'form-cultura': U.dome, 'form-aves': U.macaw2
};
const EMOJI = {'food-almuerzos':'🍲','food-mar':'🐟','food-desayunos':'🍳','food-combos':'🍽️','food-bebidas':'🥤',food:'🍽️'};
const unsplash = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=70&w=1400`;
const placeholder = key => {
  const e = EMOJI[key] || EMOJI[key.split('-')[0]] || '🌿';
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#619b8a'/><stop offset='1' stop-color='#a1c181'/></linearGradient></defs><rect width='800' height='500' fill='url(#g)'/><text x='400' y='300' font-size='130' text-anchor='middle'>${e}</text></svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
};
document.querySelectorAll('img[data-img]').forEach(img => {
  const key = img.dataset.img, v = IMG[key];
  const src = !v ? placeholder(key) : (v.startsWith('photo-') ? unsplash(v) : v);
  img.draggable = false;
  img.addEventListener('error', () => { img.src = placeholder(key); }, { once: true });
  img.src = src;
});

/* ============ 2. UTILIDADES ============ */
const $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];
const toastEl = Object.assign(document.createElement('div'), { className: 'toast' });
document.body.appendChild(toastEl);
let toastT;
const toast = msg => { toastEl.textContent = msg; toastEl.classList.add('is-on'); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('is-on'), 3800); };

/* ============ 3. HEADER, MENÚ MÓVIL Y PARALLAX ============ */
const header = $('.header'), heroImg = $('.hero__bg img');
const onScroll = () => {
  header.classList.toggle('is-scrolled', scrollY > 40);
  if (heroImg && scrollY < innerHeight) heroImg.style.setProperty('--py', `${scrollY * -0.12}px`);
};
addEventListener('scroll', onScroll, { passive: true }); onScroll();
const burger = $('#burger'), nav = $('#nav');
burger.addEventListener('click', () => { const o = nav.classList.toggle('is-open'); burger.setAttribute('aria-expanded', o); });
$$('#nav a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('is-open'); burger.setAttribute('aria-expanded', false); }));

/* ============ 4. IDIOMA ES/EN (demostrativo) ============ */
const EN = {
  nav_home: 'Home', nav_exp: 'Experiences', nav_nec: 'Necoclí', nav_hotel: 'Hotel', nav_rest: 'Restaurant', nav_how: 'Getting here', nav_contact: 'Contact',
  cta_plan: 'Plan your trip',
  hero_title: 'Between seas and rivers, live the experience',
  hero_sub: 'A new way to discover, feel and tell the story of Urabá: beaches, jungle, living culture and a hotel where the adventure begins.',
  hero_b1: 'Discover the experiences', hero_b2: 'See rooms'
};
const ES = {};
$$('[data-i18n]').forEach(el => ES[el.dataset.i18n] = el.textContent);
$$('.lang__btn').forEach(b => b.addEventListener('click', () => {
  const lang = b.dataset.lang;
  $$('.lang__btn').forEach(x => x.classList.toggle('is-active', x === b));
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach(el => el.textContent = (lang === 'en' ? EN : ES)[el.dataset.i18n]);
  if (lang === 'en') toast('Vista previa del idioma inglés: en el sitio final todo el contenido estará traducido.');
}));

/* ============ 5. MARQUEE INFINITO ============ */
$$('[data-marquee]').forEach(m => m.insertAdjacentHTML('beforeend', m.innerHTML));

/* ============ 6. REVEAL AL HACER SCROLL + CONTADORES ============ */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('is-visible'); io.unobserve(e.target);
}), { threshold: .15 });
$$('.reveal').forEach(el => {
  const i = [...el.parentElement.children].indexOf(el);
  el.style.transitionDelay = `${Math.min(i, 5) * 90}ms`;
  io.observe(el);
});
const countIO = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, end = +el.dataset.count, t0 = performance.now();
  const tick = t => { const p = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick); countIO.unobserve(el);
}), { threshold: .6 });
$$('[data-count]').forEach(el => { if (el.tagName === 'STRONG') countIO.observe(el); });

/* ============ 7. PESTAÑAS (Necoclí y Cómo llegar) ============ */
$$('.tabs').forEach(group => {
  const scope = group.closest('section');
  group.addEventListener('click', e => {
    const btn = e.target.closest('.tabs__btn'); if (!btn) return;
    $$('.tabs__btn', group).forEach(b => b.classList.toggle('is-active', b === btn));
    $$('[data-panel]', scope).forEach(p => p.classList.toggle('is-active', p.dataset.panel === btn.dataset.tab));
  });
});

/* ============ 8. MENÚ DROPDOWN (imagen sigue al cursor) ============ */
$$('.menu__item').forEach(item => {
  const head = $('.menu__head', item);
  item.addEventListener('mousemove', e => {
    const r = item.getBoundingClientRect();
    item.style.setProperty('--mx', `${e.clientX - r.left + 40}px`);
    item.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
  head.addEventListener('click', () => {
    const open = !item.classList.contains('is-open');
    $$('.menu__item').forEach(i => { i.classList.remove('is-open'); $('.menu__head', i).setAttribute('aria-expanded', false); });
    if (open) { item.classList.add('is-open'); head.setAttribute('aria-expanded', true); }
  });
});

/* ============ 9. FORMULARIO INTELIGENTE POR PASOS ============ */
const wiz = $('#wiz'), steps = $$('.wiz__step', wiz), bar = $('#wizBar'), count = $('#wizCount');
const prev = $('#wizPrev'), next = $('#wizNext'), send = $('#wizSend'), ppl = $('#ppl'), summary = $('#summary');
let cur = 0, people = 2;
const WA_NUMBER = '573192366480'; // número de ejemplo tomado del flyer

const data = () => {
  const f = new FormData(wiz);
  return {
    intereses: f.getAll('interes').join(', ') || 'Por definir',
    grupo: f.get('grupo') || 'Por definir',
    personas: people, llegada: f.get('llegada') || 'Por definir',
    noches: f.get('noches') || '0', hab: f.get('hab') || 'Por definir',
    nombre: (f.get('nombre') || '').trim(), tel: (f.get('tel') || '').trim(), msg: (f.get('msg') || '').trim()
  };
};
const message = d => `Hola, soy ${d.nombre || '(nombre)'} y quiero planear un viaje a Necoclí.\n• Me interesa: ${d.intereses}\n• Viajo con: ${d.grupo} (${d.personas} personas)\n• Llegada: ${d.llegada}, ${d.noches} noches\n• Hospedaje: ${d.hab}${d.msg ? '\n• Comentarios: ' + d.msg : ''}`;
const renderSummary = () => {
  const d = data();
  summary.innerHTML = `<b>Tu viaje</b><br>🌿 ${d.intereses}<br>👥 ${d.grupo} · ${d.personas} personas<br>📅 ${d.llegada} · ${d.noches} noches<br>🛏️ ${d.hab}`;
};
const show = i => {
  cur = i;
  steps.forEach((s, n) => s.classList.toggle('is-active', n === i));
  bar.style.width = `${(i + 1) / steps.length * 100}%`;
  count.textContent = `Paso ${i + 1} de ${steps.length}`;
  prev.style.visibility = i === 0 ? 'hidden' : 'visible';
  next.hidden = i === steps.length - 1; send.hidden = !next.hidden;
  if (i === steps.length - 1) renderSummary();
};
next.addEventListener('click', () => show(Math.min(cur + 1, steps.length - 1)));
prev.addEventListener('click', () => show(Math.max(cur - 1, 0)));
$$('[data-count]', wiz).forEach(b => b.addEventListener('click', () => {
  people = Math.max(1, Math.min(60, people + +b.dataset.count)); ppl.textContent = people;
}));
wiz.addEventListener('submit', e => {
  e.preventDefault();
  const d = data();
  if (!d.nombre || d.tel.replace(/\D/g, '').length < 7) { toast('Escribe tu nombre y un WhatsApp válido para continuar.'); return; }
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message(d))}`;
  console.log('WhatsApp (demostración):', url);
  toast('Demostración: en la versión final se abrirá WhatsApp con tu mensaje listo.');
});
show(0);

/* ============ 10. WHATSAPP FLOTANTE (solo visual) ============ */
$('.wa').addEventListener('click', e => { e.preventDefault(); toast('Botón de muestra: en el sitio final abrirá el WhatsApp del negocio.'); });

/* ============ 11. WHATSAPP DEMO GENÉRICO ============ */
const waLink = t => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t)}`;
$$('[data-wa]').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  console.log('WhatsApp (demostración):', waLink(a.dataset.wa));
  toast('Demostración: aquí se abrirá WhatsApp con el mensaje de la habitación.');
}));

/* ============ 12. WIDGET DE DISPONIBILIDAD (hero) ============ */
const aIn = $('#aIn'), aOut = $('#aOut');
const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
const nextDay = (d, n = 1) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
aIn.min = iso(new Date());
aOut.min = iso(nextDay(new Date()));
aIn.addEventListener('change', () => {
  const min = iso(nextDay(aIn.value + 'T12:00'));
  aOut.min = min;
  if (!aOut.value || aOut.value <= aIn.value) aOut.value = min;
});
$('#avail').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target), a = f.get('in'), b = f.get('out');
  if (!a || !b) { toast('Elige tu fecha de llegada y de salida.'); return; }
  const n = Math.round((new Date(b) - new Date(a)) / 864e5);
  const msg = `Hola, quiero consultar disponibilidad del ${a} al ${b} (${n} noche${n === 1 ? '' : 's'}) para ${f.get('g')}. Habitación: ${f.get('r')}.`;
  console.log('WhatsApp (demostración):', waLink(msg));
  toast(`Demostración: ${n} noche${n === 1 ? '' : 's'}. En el sitio final se abrirá WhatsApp con tu consulta.`);
});

/* ============ 13. SLIDER DE EXPERIENCIAS ============ */
const makeSlider = root => {
  const track = $('.slider__track', root), slides = $$('.slide', root), bar = $('.slider__bar i', root), vp = $('.slider__viewport', root);
  let i = 0, x0 = null;
  const per = () => +getComputedStyle(root).getPropertyValue('--per') || 3;
  const max = () => Math.max(0, slides.length - per());
  const go = n => {
    i = Math.max(0, Math.min(n, max()));
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.style.transform = `translateX(${-(slides[i].offsetLeft - gap)}px)`;
    bar.style.width = `${(i + per()) / slides.length * 100}%`;
  };
  $$('[data-dir]', root).forEach(b => b.addEventListener('click', () => go(i + +b.dataset.dir)));
  vp.addEventListener('pointerdown', e => { x0 = e.clientX; });
  vp.addEventListener('pointerup', e => {
    if (x0 === null) return;
    const d = e.clientX - x0; x0 = null;
    if (Math.abs(d) > 50) go(i + (d < 0 ? 1 : -1));
  });
  addEventListener('resize', () => go(i));
  go(0);
};
$$('.slider').forEach(makeSlider);

/* ============ 14. PANELES EXPANDIBLES (Necoclí) ============ */
const panels = $$('.panel');
panels.forEach(p => {
  const activate = () => panels.forEach(x => x.classList.toggle('is-active', x === p));
  p.addEventListener('click', activate);
  p.addEventListener('focus', activate);
  p.addEventListener('mouseenter', () => { if (matchMedia('(hover:hover)').matches) activate(); });
});

/* ============ 15. CARRUSEL DEL HOTEL ============ */
const hc = $('.hcar');
if (hc) {
  const hs = $$('.hslide', hc), tabsH = $$('.hcar__tabs button', hc);
  let hi = 0, timer;
  const showRoom = n => {
    hi = (n + hs.length) % hs.length;
    hs.forEach((s, k) => s.classList.toggle('is-active', k === hi));
    tabsH.forEach((t, k) => t.classList.toggle('is-active', k === hi));
  };
  const stop = () => clearInterval(timer);
  tabsH.forEach((t, k) => t.addEventListener('click', () => { stop(); showRoom(k); }));
  $$('[data-dir]', hc).forEach(b => b.addEventListener('click', () => { stop(); showRoom(hi + +b.dataset.dir); }));
  hs.forEach(s => {
    const bg = $('.hslide__bg', s);
    $$('.hslide__gallery img', s).forEach(im => im.addEventListener('click', () => {
      stop(); const t = bg.src; bg.src = im.src; im.src = t;   // intercambia foto principal y miniatura
    }));
  });
  timer = setInterval(() => showRoom(hi + 1), 8000);
  hc.addEventListener('mouseenter', stop);
}