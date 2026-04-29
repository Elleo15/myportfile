/* ══════════════════════════════════════════
   ƏSAS SABİTLƏR
   ► WhatsApp nömrəni dəyişmək üçün WHATSAPP_NUMBER-i yenilə
   ► Email ünvanını dəyişmək üçün EMAIL-i yenilə (index.html-də də dəyiş)
══════════════════════════════════════════ */
const WHATSAPP_NUMBER = "994773453070"; // ölkə kodu ilə, + və boşluqsuz
const EMAIL = "elvin.eyvazov1@mail.ru";


/* ══════════════════════════════════════════
   DİL TƏRCÜMƏLƏRİ
   Yeni mətn əlavə etmək: hər üç dilə eyni açar ilə yaz
   Mövcud mətni dəyişmək: müvafiq dil blokunda dəyəri yenilə
══════════════════════════════════════════ */
const translations = {
  az: {
    /* Nav */
    nav_about:    "Haqqımda",
    nav_projects: "Layihələr",
    nav_contact:  "Əlaqə",

    /* Hero */
    bio: "Salam, mən Elvinəm. Ekranda gördüyün hər şeyin arxasında kod var — mən həmin kodu yazıram. Frontend və Backend üzərində işləyirəm.",
    cta: "Layihələrimə bax",

    /* Bacarıqlar */
    skills_title:      "Bacarıqlar",
    skill_ai:          "AI Alətləri",
    skill_creative:    "Kreativlik",
    skill_invest:      "İnvestisiya Məsləhəti*",
    skill_invest_tip:  "Öz məsuliyyətinizdədir :) ", /* Tooltip mətni */

    /* Layihələr */
    projects_title: "Layihələr",
    live:           "Canlı bax →",
    p1_title:       "This.is.Coffee — Utena",
    p1_desc:        "Litva'da specialty qəhvə dükanı üçün hazırladığım çoxdilli sayt. Menyu, foto qalereya, iş saatları.",
    p2_title:       "Ərkivan Restoran",
    p2_desc:        "Sumqayıtda Taliş mətbəxi restoranı üçün sayt. Tam menyu, foto qalereya, üç dil dəstəyi.",
    p3_title:       "Bu Portfeyl",
    p3_desc:        "Özüm üçün hazırladığım minimalist portfeyl saytı. Sıfırdan, şablonsuz.",
    p4_title:       "La Chateau Restoran",
    p4_desc:        "Sumqayıtda Xəzər dənizi kənarında yerləşən La Chateau restoranı üçün hazırladığım sayt. Rezervasiya sistemi, menyu, foto qalereya.",
    p5_title:       "Sənən Ət",
    p5_desc:        "Sumqayıtda fəaliyyət göstərən halal ət mağazası üçün hazırladığım sayt. Ön sifariş sistemi, məhsul qalereyası, WhatsApp inteqrasiyası.",
    p6_title:       "Melan Lounge",
    p6_desc:        "Sumqayıtda premium lounge üçün hazırladığım sayt. Tam menyu, məkan qalereyası, video bölməsi, rezervasiya sistemi.",
    p7_title:       "Sky Cake",
    p7_desc:        "Bakıda əl işi tort və şirniyyat mağazası üçün hazırladığım sayt. Sifariş sistemi, məhsul kataloqu, foto qalereya.",
    p8_title:       "Yavər Sərdarlı — Barber",
    p8_desc:        "Sumqayıtda professional barber üçün hazırladığım sayt. Rezervasiya sistemi, xidmətlər, foto qalereya, üç dil dəstəyi.",
    p9_title:       "KOMEDİXANA",
    p9_desc:        "Xəzər TV-nin məşhur komediya verilişi üçün hazırladığım rəsmi sayt. Bilet sistemi, bölümlər, aktyor heyəti, sponsor bölməsi.",

    /* Əlaqə */
    contact_title: "Əlaqə",
    contact_sub:   "Bir layihən var? Məlumatları doldur, WhatsApp-dan cavab verəcəm.",
    ph_name:       "Ad Soyad — məs. Əli Hüseynov",
    ph_phone:      "Telefon — məs. +994 50 123 45 67",
    ph_title:      "Layihə başlığı — məs. Restoran üçün sayt",
    ph_details:    "Detallar — nə istədiyin, büdcə, tələblər, rəng üstünlükləri...",
    ph_deadline:   "Neçə günə lazımdır? — məs. 7 gün, 2 həftə",
    submit_btn:    "WhatsApp-dan göndər",
    or_email:      "Və ya email:",
    stat_projects:     "Layihə",
    stat_langs:        "Dil dəstəyi",
    stat_satisfaction: "% Müştəri məmnuniyyəti",
  },

  en: {
    nav_about:    "About",
    nav_projects: "Projects",
    nav_contact:  "Contact",

    bio: "Hi, I'm Elvin. Behind everything you see on screen, there's code — I write that code. I focus on frontend: clean, fast, and beautiful.",
    cta: "View my projects",

    skills_title:     "Skills",
    skill_ai:         "AI Tools",
    skill_creative:   "Creativity",
    skill_invest:     "Investment Advice*",
    skill_invest_tip: "At your own risk :) ",

    projects_title: "Projects",
    live:           "Live →",
    p1_title:       "This.is.Coffee — Utena",
    p1_desc:        "A multilingual website for a specialty coffee shop in Lithuania. Menu, photo gallery, opening hours.",
    p2_title:       "Ərkivan Restaurant",
    p2_desc:        "A website for a Talysh cuisine restaurant in Sumqayit. Full menu, photo gallery, three-language support.",
    p3_title:       "This Portfolio",
    p3_desc:        "A minimalist portfolio site I built for myself. From scratch, no templates.",
    p4_title:       "La Chateau Restaurant",
    p4_desc:        "A website for La Chateau restaurant on the Caspian Sea coast in Sumqayit. Reservation system, menu, photo gallery.",
    p5_title:       "Sənən Ət",
    p5_desc:        "A website for a halal butcher shop in Sumqayit. Pre-order system, product gallery, WhatsApp integration.",
    p6_title:       "Melan Lounge",
    p6_desc:        "A website for a premium lounge in Baku. Full menu, venue gallery, video section, reservation system.",
    p7_title:       "Sky Cake",
    p7_desc:        "A website for a handcrafted cake and pastry shop in Sumqayit. Order system, product catalogue, photo gallery.",
    p8_title:       "Yavər Sərdarlı — Barber",
    p8_desc:        "A website for a professional barber in Sumqayit. Reservation system, services, photo gallery, three-language support.",
    p9_title:       "KOMEDİXANA",
    p9_desc:        "Official website for KOMEDİXANA, Azerbaijan's popular comedy show on Xəzər TV. Ticket system, episodes, cast, sponsors.",
     

    contact_title: "Contact",
    contact_sub:   "Got a project? Fill in the details and I'll get back to you on WhatsApp.",
    ph_name:       "Full Name — e.g. John Smith",
    ph_phone:      "Phone — e.g. +994 50 123 45 67",
    ph_title:      "Project title — e.g. Website for a restaurant",
    ph_details:    "Details — what you need, budget, requirements, color preferences...",
    ph_deadline:   "Deadline — e.g. 7 days, 2 weeks",
    submit_btn:    "Send via WhatsApp",
    or_email:      "Or email:",
    stat_projects:     "Projects",
    stat_langs:        "Language support",
    stat_satisfaction: "% Client satisfaction",
  },

  ru: {
    nav_about:    "Обо мне",
    nav_projects: "Проекты",
    nav_contact:  "Контакты",

    bio: "Привет, я Элвин. За всем, что ты видишь на экране, стоит код — я пишу этот код. Фокусируюсь на frontend: просто, быстро, красиво.",
    cta: "Смотреть проекты",

    skills_title:     "Навыки",
    skill_ai:         "AI-инструменты",
    skill_creative:   "Креативность",
    skill_invest:     "Инвестиционный совет*",
    skill_invest_tip: "На ваш страх и риск :) ",

    projects_title: "Проекты",
    live:           "Открыть →",
    p1_title:       "This.is.Coffee — Utena",
    p1_desc:        "Многоязычный сайт для specialty кофейни в Литве. Меню, фотогалерея, часы работы.",
    p2_title:       "Ресторан Ərkivan",
    p2_desc:        "Сайт для ресторана талышской кухни в Сумгаите. Полное меню, галерея, поддержка трёх языков.",
    p3_title:       "Это портфолио",
    p3_desc:        "Минималистичный портфолио-сайт, который я создал для себя. С нуля, без шаблонов.",
    p4_title:       "Ресторан La Chateau",
    p4_desc:        "Сайт для ресторана La Chateau на берегу Каспийского моря в Сумгаите. Система бронирования, меню, фотогалерея.",
    p5_title:       "Sənən Ət",
    p5_desc:        "Сайт для халяльного мясного магазина в Сумгаите. Система предзаказа, галерея, интеграция с WhatsApp.",
    p6_title:       "Melan Lounge",
    p6_desc:        "Сайт для премиум-лаунжа в Сумгаите. Полное меню, галерея, видеораздел, система бронирования.",
    p7_title:       "Sky Cake",
    p7_desc:        "Сайт для кондитерской ручной работы в Баку. Система заказов, каталог продуктов, фотогалерея.",
    p8_title:       "Явяр Сярдарлы — Барбер",
    p8_desc:        "Сайт для профессионального барбера в Сумгаите. Система бронирования, услуги, фотогалерея, поддержка трёх языков.",
    p9_title:       "KOMEDİXANA",
    p9_desc:        "Официальный сайт популярного комедийного шоу KOMEDİXANA на Xəzər TV. Система билетов, эпизоды, актёры, спонсоры.",

    contact_title: "Контакты",
    contact_sub:   "Есть проект? Заполни форму — отвечу в WhatsApp.",
    ph_name:       "Имя Фамилия — напр. Али Гасанов",
    ph_phone:      "Телефон — напр. +994 50 123 45 67",
    ph_title:      "Название проекта — напр. Сайт для ресторана",
    ph_details:    "Детали — что нужно, бюджет, требования, пожелания по цвету...",
    ph_deadline:   "Срок — напр. 7 дней, 2 недели",
    submit_btn:    "Отправить через WhatsApp",
    or_email:      "Или email:",
    stat_projects:     "Проектов",
    stat_langs:        "Языковая поддержка",
    stat_satisfaction: "% Удовлетворённость",
  },
};


/* ══════════════════════════════════════════
   DİL SİSTEMİ
   setLang() funksiyası data-key atributlu bütün
   elementləri tapır və mətni əvəz edir.
══════════════════════════════════════════ */
let currentLang = "az";

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];

  /* Mətn elementlərini yenilə */
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* Placeholder-ları yenilə */
  document.querySelectorAll("[data-key-ph]").forEach(el => {
    const key = el.dataset.keyPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  /* Tooltip data-tip atributunu yenilə */
  document.querySelectorAll("[data-tip-key]").forEach(el => {
    const key = el.dataset.tipKey;
    if (t[key] !== undefined) el.setAttribute("data-tip", t[key]);
  });

  /* HTML lang atributunu yenilə */
  document.documentElement.lang = lang;

  /* Aktiv dil düyməsini işarələ */
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.textContent === lang.toUpperCase());
  });
}

/* Səhifə açılanda AZ dili ilə başla */
setLang("az");


/* ══════════════════════════════════════════
   PROFİL ŞƏKLİ FALLBACK
   Şəkil tapılmadıqda "EE" placeholder göstərir
══════════════════════════════════════════ */
const profileImg = document.getElementById("profile-img");
if (profileImg) {
  profileImg.addEventListener("error", () => {
    const ph = document.createElement("div");
    ph.className = "profile-placeholder";
    ph.textContent = "EE";
    profileImg.replaceWith(ph);
  });
}


/* ══════════════════════════════════════════
   NAV SCROLL EFFEKTİ
   Aşağı scroll edəndə nav-a kölgə əlavə olunur
══════════════════════════════════════════ */
window.addEventListener("scroll", () => {
  document.getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 60);
});


/* ══════════════════════════════════════════
   MOBİL HAMBURGER MENYu
══════════════════════════════════════════ */
document.getElementById("hamBtn").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.add("open");
});
document.getElementById("mobileClose").addEventListener("click", closeMobile);

function closeMobile() {
  document.getElementById("mobileMenu").classList.remove("open");
}


/* ══════════════════════════════════════════
   SCROLL FADE-IN ANİMASİYASI
   .fade-in klassı olan hər element,
   ekrana girəndə .visible klassı alır
══════════════════════════════════════════ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); /* Bir dəfə işlər, sonra dayanar */
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

/* Progress bar animasiyası */
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const skillsGrid = document.querySelector('.skills-grid');
if (skillsGrid) barObserver.observe(skillsGrid);

/* ══════════════════════════════════════════
   WHATSAPP FORMU
   Form göndərildikdə bütün sahələri götürüb
   formatlanmış WhatsApp mesajı yaradır.
   Nömrəni dəyişmək üçün yuxarıdakı
   WHATSAPP_NUMBER sabitini yenilə.
══════════════════════════════════════════ */
function submitForm(e) {
  e.preventDefault();

  /* Sahə dəyərlərini al */
  const name     = document.getElementById("f-name").value.trim();
  const phone    = document.getElementById("f-phone").value.trim();
  const title    = document.getElementById("f-title").value.trim();
  const details  = document.getElementById("f-details").value.trim();
  const deadline = document.getElementById("f-deadline").value.trim();

  /* WhatsApp mesajını format et
     Mətni dəyişmək istəsən aşağıdakı şablonu redaktə et */
  const message = encodeURIComponent(
    `💼 *Portfeyl saytından müraciət*\n\n` +
    `👤 Ad: ${name}\n` +
    `📞 Tel: ${phone}\n` +
    `📌 Layihə: ${title}\n` +
    `📝 Detallar: ${details || "—"}\n` +
    `⏱ Müddət: ${deadline || "—"}`
  );

  /* WhatsApp-ı aç */
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");

  /* Düymənin yazısını müvəqqəti dəyiş */
  const btn = document.querySelector("#contact-form button");
  const original = btn.textContent;
  btn.textContent = "✓ Açılır...";
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
    document.getElementById("contact-form").reset();
  }, 3000);
}
/* ══════════════════════════════════════════
   TERMİNAL YAZI EFFEKTİ
   Hero-da adın altında çıxan yazı
   Mətni dəyişmək: lines massivindəki sətirləri yenilə
══════════════════════════════════════════ */
const terminalEl = document.getElementById('terminal-text');
if (terminalEl) {
  const lines = [
    'const dev = "Elvin Eyvazov";',
    'dev.skills = ["HTML", "CSS", "JS", "Node.js"];',
    'dev.status = "Available for work";',
  ];
  let li = 0, ci = 0;
  let current = '';

  function typeTerminal() {
    if (li >= lines.length) { li = 0; current = ''; terminalEl.textContent = '> '; setTimeout(typeTerminal, 1000); return; }
    if (ci < lines[li].length) {
      current += lines[li][ci];
      terminalEl.textContent = '> ' + current + '█';
      ci++;
      setTimeout(typeTerminal, 55);
    } else {
      terminalEl.textContent = '> ' + current;
      ci = 0; li++;
      current = '';
      setTimeout(typeTerminal, 900);
    }
  }
  typeTerminal();
}
/* ══════════════════════════════════════════
   XÜSUSI KURSOR EFFEKTİ
══════════════════════════════════════════ */
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

if (cursor && cursorRing) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    setTimeout(() => {
      cursorRing.style.left = e.clientX + 'px';
      cursorRing.style.top  = e.clientY + 'px';
    }, 80);
  });

  document.querySelectorAll('a, button, .project-card, .skill-bar').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('grow');
      cursorRing.classList.add('grow');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('grow');
      cursorRing.classList.remove('grow');
    });
  });
}
/* ══════════════════════════════════════════
   MATRİX EFFEKTİ
   Sürəti dəyişmək: interval dəyərini artır/azalt
   Sıxlığı dəyişmək: fontSize dəyərini dəyiş
   Rəngi dəyişmək: fillStyle rəngini dəyiş
══════════════════════════════════════════ */
const canvas = document.getElementById('matrix-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const fontSize = 14;
  const cols = Math.floor(canvas.width / fontSize);
  const drops = Array(cols).fill(1);
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF';

  function drawMatrix() {
    ctx.fillStyle = 'rgba(250, 250, 248, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#22c55e';
    ctx.font = fontSize + 'px monospace';

    drops.forEach((y, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, y * fontSize);
      if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }

  setInterval(drawMatrix, 80); /* 80ms — dəyişmək üçün bu rəqəmi yenilə */

  window.addEventListener('resize', () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
/* Back to top düyməsi */
const backTop = document.getElementById('back-top');
if (backTop) {
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 400);
  });
}
/* ══════════════════════════════════════════
   AKTİV NAV LİNK
   Scroll edəndə hansı bölmədəsənsə
   nav-da o link işıqlanır
══════════════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('nav-active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('nav-active');
    }
  });
});
/* ══════════════════════════════════════════
   PARALLAX EFFEKTİ
   Scroll edəndə profil şəkli yavaş hərəkət edir
   Sürəti dəyişmək: 0.3 dəyərini dəyiş
══════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  const img = document.querySelector('.profile-img') || document.querySelector('.profile-placeholder');
  if (img) {
    img.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }
});
/* ══════════════════════════════════════════
   LAYİHƏ MODALI
   Karta klik edəndə açılır
══════════════════════════════════════════ */
function openModal(title, desc, meta, link) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDesc').textContent = desc;
  document.getElementById('modalMeta').textContent = meta;
  document.getElementById('modalLink').href = link;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
