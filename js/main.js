/* ============ 1. IMÁGENES (único lugar para cambiarlas) ============
   Valor = ID de Unsplash ("photo-...") o ruta propia ("assets/img/foto.jpg").
   null = tarjeta de color con emoji mientras no haya foto. */
const U = {
  beach:'assets\\uso-comun\\necocli.jpg', grupo_lancha:'assets\\uso-comun\\grupo-lancha.jpg', isle:'photo-1618064541372-289bdb6f5b7b', isle2:'photo-1653465255362-2ce1ced1d97d',
  playa_necocli:'assets\\uso-comun\\playa cristalina.jpg', atardecer_estadero:'assets\\uso-comun\\atardecer-estadero.jpeg' , palms:'photo-1655299417498-52f3a304c2a4', playa_necocli_angulo: 'assets\\uso-comun\\playa-otro-angulo.jpg',
  bay:'photo-1582300857444-5ddd87c86797', green:'photo-1617280325974-f9c5721a4862',
  boats:'assets\\uso-comun\\grupo-muelle-close-up.jpg', island:'photo-1631547537962-08c6b4e8e900', necocli_parque: 'assets\\uso-comun\\necocli-parque.jpg', aerial:'photo-1617280325974-f9c5721a4862',
jungle:'photo-1581778191198-c6c1bbf2c842', exp_cultura:'assets\\uso-comun\\bullerengue-uraba.jpg', dome:'photo-1653465255362-2ce1ced1d97d',
  macaw:'photo-1708310945058-d01a27bff936', macaw2:'photo-1608336837853-0e986507a8bd', tucan: 'assets\\uso-comun\\tucan-arcoiris.jpg', titi:'assets\\uso-comun\\titi-cabeciblanco.jpg', manglar: 'assets\\uso-comun\\ensenada.png', grupo_bullerengue: 'assets\\uso-comun\\bullerengue-grupo-uraba.webp',
  individual1:'assets\\habitaciones\\individual-cerca.jpg', baño_individual:'assets\\habitaciones\\baño.jpg', individual_exterior:'assets\\habitaciones\\habitacion-individual-exterior.jpg',
  h_pareja_completa:'assets\\habitaciones\\pareja-completa.jpg', h_pareja_cerca:'assets\\habitaciones\\habitacion-pareja-cerca.jpg', h_pareja_baño:'assets\\habitaciones\\baño-interior.jpg', h_grupal_frente:'assets\\habitaciones\\habitacion-grupo-frente.jpg', h_grupo_tv:'assets\\habitaciones\\grupotv.jpg', h_grupal:'assets\\habitaciones\\habitacion-grupo.jpg',
  h_familiar_completa:'assets\\habitaciones\\habitacion-familia-ventana.jpg', h_familiar_interior:'assets\\habitaciones\\familiar-interior.jpg', h_familiar_exterior:'assets\\habitaciones\\familiar-exterior.jpg', manglar_hotel: 'assets\\logo-aliados\\manglar-real.png', asotunec: 'assets\\logo-aliados\\asotunec.png', caribe: 'assets\\logo-aliados\\el-caribe.png', casa_costa: 'assets\\logo-aliados\\casa-costa.png',
  letras_cafe: 'assets\\logo-aliados\\letras-cafe.png', tak_nakuet: 'assets\\logo-aliados\\tak-nakuet.png', celebracion_pareja: 'assets\\uso-comun\\celebracion-pareja.avif', picolino: 'assets\\uso-comun\\picolino-estante.webp', letras_lib: 'assets\\uso-comun\\letras-cafe-interior.webp',
  pescado_frente_mar: 'assets\\uso-comun\\pescado-mar.jpg', carambolo: 'assets\\uso-comun\\carambolo.jpg', estadero: 'assets\\uso-comun\\estadero.jpg', arroz_coco: 'assets\\uso-comun\\arroz-coco.jpg', borojo: 'assets\\uso-comun\\borojo-servido.jpg', ceviche: 'assets\\uso-comun\\mar-a-mesa.jpg', sancocho: 'assets\\uso-comun\\sancocho-gallina.jpg',
  lancha_capurgana: 'assets\\uso-comun\\guia de lancha.jpg', cuatri_necocli: 'assets\\uso-comun\\cuatrimotos-necocli.jpg', volcan: 'assets\\uso-comun\\volcan de lodo.jpg', cobre: 'assets\\uso-comun\\virgen-cobre.jpg', mutata: 'assets\\uso-comun\\mutata-bedo.jpg', sapzurro: 'assets\\uso-comun\\sapzurro-miel.jpg'
};
const IMG = {
  hero: U.beach, intro: U.grupo_lancha, cta: U.atardecer_estadero,
  'exp-playa': U.playa_necocli, 'exp-aventura': U.jungle, 'exp-cultura': U.exp_cultura, 'exp-grupos': U.boats, 'exp-operacion': U.necocli_parque, 'exp-alojamiento': U.individual1,
  'feat-aves': U.tucan, 'feat-fauna': U.titi, 'feat-playas': U.playa_necocli_angulo, 'feat-rios': U.manglar, 'feat-cultura': U.grupo_bullerengue,
  'room-brisa': U.individual1, 'individual-cerca': U.individual1, 'individual-baño': U.baño_individual, 'individual-exterior': U.individual_exterior,
  'room-manglar': U.bed4, 'pareja-completa': U.h_pareja_completa, 'pareja-cerca': U.h_pareja_cerca, 'baño-pareja': U.h_pareja_baño,
  'room-atardecer': U.twin1, 'familiar-completa': U.h_familiar_completa, 'familiar-exterior': U.h_familiar_exterior, 'familiar-interior': U.h_familiar_interior,
  'room-ceiba': U.bed6, 'grupal-completa': U.h_grupal_frente, 'grupal': U.h_grupal, 'grupal-tv': U.h_grupo_tv,
  'food-almuerzos': null, 'food-mar': null, 'food-desayunos': null, 'food-combos': null, 'food-bebidas': null,
  'pack-sol': U.isle, 'pack-uraba': U.boats, 'pack-darien': U.jungle,
  'form-playa': U.beach, 'form-aventura': U.jungle, 'form-cultura': U.exp_cultura, 'form-aves': U.macaw2,
  'gastro-1': U.pescado_frente_mar, 'gastro-2': U.carambolo, 'gastro-3': U.estadero, 'gastro-carta': U.arroz_coco,
'gastro-mar': U.ceviche, 'gastro-coco': U.arroz_coco, 'gastro-sancocho': U.sancocho, 'gastro-frutas': U.borojo,
'gal-1': U.beach, 'gal-2': U.macaw, 'gal-3': U.turtle, 'gal-4': U.boats, 'gal-5': U.exp_cultura,
'gal-6': U.jungle, 'gal-7': U.bay, 'gal-8': U.green, 'gal-9': U.aerial, 'gal-10': U.isle, 'hotel-manglar-real': U.manglar_hotel,
'lib-1': U.letras_lib, 'lib-2': U.picolino, 'hotel-evento': U.celebracion_pareja,
'plan-capurgana': U.lancha_capurgana, 'plan-sendero': U.jungle, 'plan-3playas': U.sapzurro, 
'plan-cuatri': U.cuatri_necocli, 'plan-volcan': U.volcan, 'plan-cobre': U.cobre, 'plan-mutata': U.mutata, 'letras-cafe-lib': U.letras_cafe, 'tak-nakuet': U.tak_nakuet, 'caribe': U.caribe, 'casa-costa': U.casa_costa, 'asotunec': U.asotunec
};
const EMOJI = {'food-almuerzos':'🍲','food-mar':'🐟','food-desayunos':'🍳','food-combos':'🍽️','food-bebidas':'🥤',food:'🍽️', 'gastro-mar':'🐟','gastro-coco':'🥥','gastro-sancocho':'🍲','gastro-frutas':'🍹', gastro:'🍽️', lib:'📚',
  'plan-cuatri':'🏍️','plan-volcan':'🌋','plan-cobre':'🌋','plan-mutata':'💧'
 };
const unsplash = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=70&w=1400`;

const placeholder = (key, label) => {
  if (/^(logo|aliado)-/.test(key)) {                       // placeholder de logos: cuadro con el nombre
    const w = (label || key).split(' '), m = Math.ceil(w.length / 2);
    const l1 = w.slice(0, m).join(' '), l2 = w.slice(m).join(' ');
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'><rect width='400' height='240' rx='24' fill='#fff'/><rect x='6' y='6' width='388' height='228' rx='20' fill='none' stroke='#cfc8b3' stroke-width='3' stroke-dasharray='10 10'/><text x='200' y='108' font-family='Georgia,serif' font-size='30' text-anchor='middle' fill='#233d4d'>${l1}</text><text x='200' y='148' font-family='Georgia,serif' font-size='30' text-anchor='middle' fill='#233d4d'>${l2}</text><text x='200' y='200' font-family='Arial' font-size='16' letter-spacing='3' text-anchor='middle' fill='#fe7f2d'>LOGO</text></svg>`;
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
  }
  const e = EMOJI[key] || EMOJI[key.split('-')[0]] || '🌿';
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#619b8a'/><stop offset='1' stop-color='#a1c181'/></linearGradient></defs><rect width='800' height='500' fill='url(#g)'/><text x='400' y='300' font-size='130' text-anchor='middle'>${e}</text></svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
};

/* Orden de búsqueda: 1) assets/img/<clave>.jpg  2) lo escrito en IMG  3) placeholder */
const LOCAL_DIR = 'assets/img/';
const EXT = {};   // excepciones: EXT['hero'] = 'webp';  EXT['aliado-caribe'] = 'svg';
const extOf = key => EXT[key] || (/^(logo|aliado)-/.test(key) ? 'png' : 'jpg');
document.querySelectorAll('img[data-img]').forEach(img => {
  const key = img.dataset.img, v = IMG[key];
  const chain = [`${LOCAL_DIR}${key}.${extOf(key)}`];
  if (v) chain.push(v.startsWith('photo-') ? unsplash(v) : v);
  chain.push(placeholder(key, img.dataset.name));
  let n = 0; img.draggable = false;
  img.addEventListener('error', () => { if (++n < chain.length) img.src = chain[n]; });
  img.src = chain[0];
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
  hero_b1: 'Discover the experiences', hero_b2: 'See rooms', nav_plans: 'Plans', nav_lib: 'Bookstore', nav_rest: 'Food', nav_more: 'Discover'
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


/* ============ 16. BARRA DE PROMOCIÓN ============ */
$('#promoX')?.addEventListener('click', () => document.body.classList.remove('has-promo'));
addEventListener('scroll', () => document.body.classList.toggle('promo-hidden', scrollY > 80), { passive: true });

/* ============ 17. MODAL DE LA CARTA ============ */
const cartaModal = $('#carta');
if (cartaModal) {
  let lastFocus;
  const openCarta = () => {
    lastFocus = document.activeElement;
    cartaModal.classList.add('is-open');
    cartaModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    $('.modal__body', cartaModal).scrollTop = 0;
    $('.modal__x', cartaModal).focus();
  };
  const closeCarta = () => {
    cartaModal.classList.remove('is-open');
    cartaModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    lastFocus && lastFocus.focus();
  };
  $$('[data-open="carta"]').forEach(b => b.addEventListener('click', openCarta));
  $$('[data-close]', cartaModal).forEach(b => b.addEventListener('click', closeCarta));
  addEventListener('keydown', e => { if (e.key === 'Escape' && cartaModal.classList.contains('is-open')) closeCarta(); });
}

/* ============ 18. GALERÍA HORIZONTAL + LIGHTBOX ============ */
const gal = $('#gal');
if (gal) {
  let down = false, sx = 0, sl = 0, moved = false;
  gal.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = gal.scrollLeft; gal.classList.add('drag'); });
  addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 4) moved = true; gal.scrollLeft = sl - dx; });
  addEventListener('pointerup', () => { down = false; gal.classList.remove('drag'); });
  gal.addEventListener('click', e => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
  $$('[data-gal]').forEach(b => b.addEventListener('click', () => gal.scrollBy({ left: +b.dataset.gal * gal.clientWidth * .7, behavior: 'smooth' })));

  const lb = $('#lb'), stage = $('.lb__stage', lb), cap = $('.lb__cap', lb);
  const openLb = t => {
    if (t.classList.contains('g--video')) {
      const v = t.dataset.video;
      if (!v) { toast('Aquí se mostrará el video de la experiencia.'); return; }
      stage.innerHTML = v.endsWith('.mp4') ? `<video src="${v}" controls autoplay playsinline></video>` : `<iframe src="${v}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    } else stage.innerHTML = `<img src="${$('img', t).src}" alt="">`;
    cap.textContent = $('figcaption', t).textContent;
    lb.classList.add('is-open'); lb.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open');
  };
  const closeLb = () => { lb.classList.remove('is-open'); lb.setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open'); stage.innerHTML = ''; };
  $$('.g').forEach(t => { t.addEventListener('click', () => openLb(t)); t.addEventListener('keydown', e => { if (e.key === 'Enter') openLb(t); }); });
  $('[data-lbclose]', lb).addEventListener('click', closeLb);
  lb.addEventListener('click', e => { if (e.target === lb || e.target === stage) closeLb(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && lb.classList.contains('is-open')) closeLb(); });
}

/* ============ 19. TESTIMONIOS ============ */
const ts = $$('.tslide'), tdots = $$('.tdots button');
if (ts.length) {
  let ti = 0, ttimer;
  const showT = n => { ti = (n + ts.length) % ts.length; ts.forEach((s, k) => s.classList.toggle('is-active', k === ti)); tdots.forEach((d, k) => d.classList.toggle('is-active', k === ti)); };
  tdots.forEach((d, k) => d.addEventListener('click', () => { clearInterval(ttimer); showT(k); }));
  ttimer = setInterval(() => showT(ti + 1), 7000);
  $('.testi__slider').addEventListener('mouseenter', () => clearInterval(ttimer));
}

/* ============ 20. FILTRO DE PLANES ============ */
const fchips = $$('[data-filter]');
fchips.forEach(b => b.addEventListener('click', () => {
  fchips.forEach(x => x.classList.toggle('is-active', x === b));
  const f = b.dataset.filter;
  $$('.plan').forEach(p => {
    const show = f === 'all' || p.dataset.cat.split(' ').includes(f);
    p.classList.toggle('is-hidden', !show);
    if (show) p.classList.add('is-visible');
  });
}));

/* ============ 21. RUTAS DE CUATRIMOTOS ============ */
$$('.routes').forEach(g => {
  const box = g.parentElement;
  g.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('button', g).forEach(x => x.classList.toggle('is-active', x === b));
    $$('.rpanel', box).forEach(p => p.classList.toggle('is-active', p.dataset.r === b.dataset.r));
  });
});


/* ============ 22. MENÚ: DESPLEGABLE "DESCUBRE" Y MENÚ MÓVIL ============ */
const more = $('.nav__more'), moreBtn = $('.nav__more-btn'), hdr = $('.header');
moreBtn?.addEventListener('click', e => {
  e.stopPropagation();
  moreBtn.setAttribute('aria-expanded', more.classList.toggle('is-open'));
});
document.addEventListener('click', e => {
  if (more && !more.contains(e.target)) { more.classList.remove('is-open'); moreBtn.setAttribute('aria-expanded', false); }
});
addEventListener('keydown', e => { if (e.key === 'Escape') more?.classList.remove('is-open'); });
burger.addEventListener('click', () => {
  const open = nav.classList.contains('is-open');
  hdr.classList.toggle('nav-open', open);
  document.body.classList.toggle('modal-open', open);
});
$$('#nav a').forEach(a => a.addEventListener('click', () => {
  hdr.classList.remove('nav-open'); document.body.classList.remove('modal-open'); more?.classList.remove('is-open');
}));