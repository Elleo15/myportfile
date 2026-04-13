# Elvin Eyvazov — Portfeyl Saytı

## 📁 Fayl Strukturu

```
portfolio/
├── index.html          ← Səhifənin strukturu (HTML)
├── style.css           ← Dizayn və rənglər (CSS)
├── script.js           ← Funksionallıq, dil sistemi, WhatsApp formu (JS)
├── profile-picture.jpg ← Profil şəkli
└── README.md           ← Bu fayl
```

---

## ✏️ Tez-tez dəyişilən şeylər

### 📱 WhatsApp nömrəsini dəyişmək

`script.js` faylını aç, birinci sətirdə:

```js
const WHATSAPP_NUMBER = "994703453070"; // ← bunu dəyiş
```

### 📧 Email ünvanını dəyişmək

İki yerdə dəyiş:

1. `script.js` → `const EMAIL = "elvin.eyvazov1@mail.ru";`
2. `index.html` → əlaqə bölməsindəki `<a href="mailto:...">` linki

### 🖼️ Profil şəklini dəyişmək

`profile-picture.jpg` faylını eyni adla əvəz et.
Başqa ad istəsən `index.html`-də `src="YENİ_AD.jpg"` yaz.

### 📝 Bio mətni dəyişmək

`script.js` → `translations` obyekti → `az / en / ru` blokları → `bio` açarı

### 🗂️ Yeni layihə əlavə etmək

`index.html`-də mövcud `.project-card` div-ini kopyala, içindəki
`data-key` dəyərlərini yenilə, sonra `script.js`-dəki `translations`
obyektinə üç dildə müvafiq mətnləri əlavə et.

### 🌐 Sosial media linklərini dəyişmək

`index.html` → footer bölməsi → `.social-links` içindəki `href` dəyərlərini yenilə.

---

## 🚀 Saytı canlıya çıxarmaq (GitHub Pages)

1. GitHub-da repo aç
2. Bütün faylları yüklə
3. Repo → **Settings** → **Pages** → **Source: main branch / root**
4. Bir neçə dəqiqədən sonra `https://istifadəçiadın.github.io/repo-adı` ünvanında işləyir

Öz domain (elvineyvazov.shop) üçün:

- DNS idarə panelində `CNAME` yazısı əlavə et: `istifadəçiadın.github.io`
- Repoda `CNAME` adlı fayl yarat, içinə `elvineyvazov.shop` yaz

---

## 🛠️ Saytda nə var

| Xüsusiyyət   | Təfərrüat                              |
| ------------ | -------------------------------------- |
| Dizayn       | Minimalist / təmiz, ağ fon             |
| Şriftlər     | Montserrat (başlıqlar) + Outfit (mətn) |
| Dil dəstəyi  | AZ · EN · RU                           |
| Mobil uyumlu | Tam responsive, hamburger menyu        |
| Layihələr    | 3 layihə kartı, hover effektli         |
| Əlaqə formu  | WhatsApp ilə birbaşa mesaj             |
| Animasiya    | Scroll fade-in effekti                 |
| Profil       | Siyah-ağ foto                          |
