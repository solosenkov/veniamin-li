/* Вениамин Ли — сайт-визитка. Ванильный JS, без зависимостей. */

(function () {
  'use strict';

  /* ---------- i18n: RU / EN ---------- */
  var I18N = {
    en: {
      nav_experience: 'Experience',
      nav_skills: 'Skills',
      nav_contact: 'Contact',
      hero_badge: 'Open to work · Nha Trang, Vietnam',
      hero_sub: 'A manager in education, service and hospitality. 14 years — from a district administration in Russia to a cooking studio in Tel Aviv. I speak Russian, Hebrew and some English.',
      cta_telegram: 'Message on Telegram',
      cta_cv: 'Download CV (PDF)',
      sec_experience: 'Experience',
      sec_experience_desc: 'Seven years managing education and culture in Russia. Seven years in service and hospitality in Tel Aviv.',
      job1_role: 'Manager',
      job1_text: 'Ran the day-to-day operations of a cooking studio: hands-on classes, private and corporate events. Coordinated a team of chefs, purchasing, scheduling and service standards.',
      job2_role: 'Administrator / Assistant Manager',
      job2_text: 'Point-of-sale operations, stock receiving and inventory, opening and closing store locations. Assisted the manager with staff scheduling, stocktakes and customer service in Hebrew.',
      job3_role: 'Junior Chef',
      job3_text: 'Prepared European, Asian and Mediterranean dishes for hotel restaurants and banquets. Worked in a large kitchen team under strict sanitary standards.',
      job4_role: 'Deputy Head of the District Education Department',
      job4_text: 'Coordinated subordinate schools and kindergartens; staffing, methodology and reporting.',
      job5_role: 'Director',
      job5_text: 'Led a team of teachers: children\u2019s and youth programs, budgeting, district-wide events.',
      job6_role: 'Lead Specialist, Organizational and Methodological Work',
      job6_text: 'Methodological support for cultural institutions; organized district events and competitions.',
      sec_education: 'Education',
      edu1_title: 'Public and Municipal Administration',
      edu1_text: 'VSUUT, Ulan-Ude — professional retraining',
      edu2_title: 'Historian–Political Scientist (applied profile)',
      edu2_text: 'MPGU, Moscow — university degree',
      sec_skills: 'Skills',
      sk1: 'Team management',
      sk2: 'Event organization',
      sk3: 'Extracurricular education',
      sk4: 'Working with children and youth',
      sk5: 'Budgeting',
      sk6: 'Customer service',
      sk7: 'POS and paperwork',
      sk8: 'MS Office',
      sk9: 'Multinational teams',
      sec_languages: 'Languages',
      lang_ru: 'native',
      lang_he: 'Hebrew — fluent',
      lang_en: 'English — basic',
      sec_contact: 'Contact',
      contact_sub: 'Open to offers in education, tourism, hotels and restaurants. I reply quickly.',
      footer_note: 'Nha Trang, Vietnam'
    }
  };

  var TITLES = {
    ru: 'Вениамин Ли — управленец в образовании, сервисе и гостеприимстве',
    en: 'Veniamin Li — manager in education, service and hospitality'
  };

  var toggle = document.getElementById('langToggle');
  var current = null;

  function applyLang(lang) {
    if (lang === current) return;
    var prev = current;
    current = lang;

    if (I18N[lang]) {
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (I18N[lang][key] !== undefined) el.textContent = I18N[lang][key];
      });
    }

    document.documentElement.lang = lang;
    document.title = TITLES[lang] || TITLES.ru;
    if (toggle) {
      toggle.textContent = lang === 'en' ? 'RU' : 'EN';
      toggle.title = lang === 'en' ? 'Переключить на русский' : 'Switch to English';
    }

    try { localStorage.setItem('lang', lang); } catch (e) {}
    /* если язык менялся не при загрузке — уведомить слушателей нечего */
    if (prev !== null && typeof CustomEvent === 'function') {
      document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
    }
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      applyLang(current === 'en' ? 'ru' : 'en');
    });
  }

  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (saved === 'en') applyLang('en');

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- Scrollspy для навигации ---------- */
  var navLinks = document.querySelectorAll('.nav-links a');
  if ('IntersectionObserver' in window && navLinks.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Год в футере ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();