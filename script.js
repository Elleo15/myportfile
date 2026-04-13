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
    bio: "Salam, mən Elvinəm. Ekranda gördüyün hər şeyin arxasında kod var — mən həmin kodu yazıram. Frontend üzərində fokuslanıram: sadə, sürətli, gözəl.",
    cta: "Layihələrimə bax",

    /* Bacarıqlar */
    skills_title:      "Bacarıqlar",
    skill_ai:          "AI Alətləri",
    skill_creative:    "Kreativlik",
    skill_invest:      "İnvestisiya Məsləhəti*",
    skill_invest_tip:  "Öz məsuliyyətinizdədir", /* Tooltip mətni */

    /* Layihələr */
    projects_title: "Layihələr",
    live:           "Canlı bax →",
    p1_title:       "This.is.Coffee — Utena",
    p1_desc:        "Litva'da specialty qəhvə dükanı üçün hazırladığım çoxdilli sayt. Menyu, foto qalereya, iş saatları.",
    p2_title:       "Ərkivan Restoran",
    p2_desc:        "Sumqayıtda Taliş mətbəxi restoranı üçün sayt. Tam menyu, foto qalereya, üç dil dəstəyi.",
    p3_title:       "Bu Portfeyl",
    p3_desc:        "Özüm üçün hazırladığım minimalist portfeyl saytı. Sıfırdan, şablonsuz.",

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
    skill_invest_tip: "At your own risk",

    projects_title: "Projects",
    live:           "Live →",
    p1_title:       "This.is.Coffee — Utena",
    p1_desc:        "A multilingual website for a specialty coffee shop in Lithuania. Menu, photo gallery, opening hours.",
    p2_title:       "Ərkivan Restaurant",
    p2_desc:        "A website for a Talysh cuisine restaurant in Sumqayit. Full menu, photo gallery, three-language support.",
    p3_title:       "This Portfolio",
    p3_desc:        "A minimalist portfolio site I built for myself. From scratch, no templates.",

    contact_title: "Contact",
    contact_sub:   "Got a project? Fill in the details and I'll get back to you on WhatsApp.",
    ph_name:       "Full Name — e.g. John Smith",
    ph_phone:      "Phone — e.g. +994 50 123 45 67",
    ph_title:      "Project title — e.g. Website for a restaurant",
    ph_details:    "Details — what you need, budget, requirements, color preferences...",
    ph_deadline:   "Deadline — e.g. 7 days, 2 weeks",
    submit_btn:    "Send via WhatsApp",
    or_email:      "Or email:",
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
    skill_invest_tip: "На ваш страх и риск",

    projects_title: "Проекты",
    live:           "Открыть →",
    p1_title:       "This.is.Coffee — Utena",
    p1_desc:        "Многоязычный сайт для specialty кофейни в Литве. Меню, фотогалерея, часы работы.",
    p2_title:       "Ресторан Ərkivan",
    p2_desc:        "Сайт для ресторана талышской кухни в Сумгаите. Полное меню, галерея, поддержка трёх языков.",
    p3_title:       "Это портфолио",
    p3_desc:        "Минималистичный портфолио-сайт, который я создал для себя. С нуля, без шаблонов.",

    contact_title: "Контакты",
    contact_sub:   "Есть проект? Заполни форму — отвечу в WhatsApp.",
    ph_name:       "Имя Фамилия — напр. Али Гасанов",
    ph_phone:      "Телефон — напр. +994 50 123 45 67",
    ph_title:      "Название проекта — напр. Сайт для ресторана",
    ph_details:    "Детали — что нужно, бюджет, требования, пожелания по цвету...",
    ph_deadline:   "Срок — напр. 7 дней, 2 недели",
    submit_btn:    "Отправить через WhatsApp",
    or_email:      "Или email:",
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
