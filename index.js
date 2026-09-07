const contentPairs = [
  ["Skip to main content", "Lewati ke konten utama"],
  ["Open menu", "Buka menu"],
  ["Close", "Tutup"],
  ["About", "Tentang"],
  ["Experience", "Pengalaman"],
  ["Projects", "Proyek"],
  ["Community", "Komunitas"],
  ["Contact", "Kontak"],
  ["Hello, I'm", "Halo, aku"],
  ["Start Exploring", "Mulai Jelajahi"],
  ["Let's Connect", "Mari Terhubung"],
  ["Choose a portrait below", "Pilih potret di bawah"],
  ["A QUICK MAP", "PETA SINGKAT"],
  ["Inside this portfolio.", "Isi portofolio ini."],
  ["About Me", "Tentang Saya"],
  ["Education", "Pendidikan"],
  ["Selected Projects", "Proyek Pilihan"],
  ["Awards", "Penghargaan"],
  ["Credentials", "Kredensial"],
  ["Activities & Community", "Aktivitas & Komunitas"],
  ["Peer Reviews", "Catatan Rekan"],
  ["01 / ABOUT ME", "01 / TENTANG SAYA"],
  ["I'm interested in making information easier to understand, organize, and use.", "Aku ingin membuat informasi lebih mudah dipahami, dirapikan, dan dipakai."],
  ["GPA / 4.00", "IPK / 4.00"],
  ["ITS Graduate", "Lulusan ITS"],
  ["Areas of interest", "Bidang minat"],
  ["TOOLKIT", "TOOLKIT"],
  ["Tools I explore and apply.", "Perangkat yang kupelajari dan gunakan."],
  ["Data Work", "Kerja Data"],
  ["System Delivery", "Pengembangan Sistem"],
  ["Communication & Coordination", "Komunikasi & Koordinasi"],
  ["02 / EDUCATION", "02 / PENDIDIKAN"],
  ["My learning path started with curiosity, then grew through practice.", "Perjalanan belajarku dimulai dari rasa ingin tahu, lalu tumbuh lewat praktik."],
  ["Click a card to turn it over.", "Klik kartu untuk melihat sisi lainnya."],
  ["Click to turn over", "Klik untuk membalik"],
  ["THE FOUNDATION", "DASAR"],
  ["THE PRACTICE", "PRAKTIK"],
  ["Information Systems", "Sistem Informasi"],
  ["03 / EXPERIENCE", "03 / PENGALAMAN"],
  ["Learning from real work: systems, processes, people, and the small details that need to work.", "Belajar dari pekerjaan nyata: sistem, proses, orang, dan detail kecil yang harus beres."],
  ["Two internships that made me more attentive to documentation, testing, user needs, and workflows people can actually follow.", "Dua pengalaman magang yang membuatku lebih peka pada dokumentasi, pengujian, kebutuhan pengguna, dan alur kerja yang bisa diikuti."],
  ["INTERNSHIP", "MAGANG"],
  ["04 / SELECTED PROJECTS", "04 / PROYEK PILIHAN"],
  ["A few works that record how I try, analyze, and build.", "Beberapa karya yang merekam caraku mencoba, menganalisis, dan membangun."],
  ["All", "Semua"],
  ["Research & NLP", "Riset & NLP"],
  ["Data & BI", "Data & BI"],
  ["Forecasting", "Peramalan"],
  ["RESEARCH / NLP", "RISET / NLP"],
  ["~50K reviews · 5 aspects · 0.7624 Macro-F1", "~50K ulasan · 5 aspek · 0.7624 Macro-F1"],
  ["7 dimensions · 2 fact tables · 46.95% low performance", "7 dimensi · 2 fact table · 46.95% performa rendah"],
  ["60 months · 3 models · 8.41% best reported MAPE", "60 bulan · 3 model · 8.41% MAPE terbaik"],
  ["05 / AWARDS", "05 / PENGHARGAAN"],
  ["A few milestones that remind me to keep trying.", "Beberapa pencapaian yang jadi pengingat untuk terus mencoba."],
  ["IS COMPETITION 2023", "IS COMPETITION 2023"],
  ["Team Vitakastara", "Team Vitakastara"],
  ["PURPOSE LED 1 · 2024", "PURPOSE LED 1 · 2024"],
  ["RANK 9 OF 42 TEAMS · 2025", "PERINGKAT 9 DARI 42 TIM · 2025"],
  ["Top 10 - IMOTION Mini Marketing Case", "Top 10 - IMOTION Mini Marketing Case"],
  ["Team Three Musketeers · Jago", "Team Three Musketeers · Jago"],
  ["Marketing Case", "Marketing Case"],
  ["Campaign Strategy", "Campaign Strategy"],
  ["Consumer Insight", "Consumer Insight"],
  ["Competition", "Competition"],
  ["Smart City", "Smart City"],
  ["Teamwork", "Teamwork"],
  ["Case Analysis", "Case Analysis"],
  ["Research", "Research"],
  ["Recommendation", "Recommendation"],
  ["06 / CREDENTIALS", "06 / KREDENSIAL"],
  ["A learning trail I choose with intention.", "Jejak belajar yang kupilih dengan sadar."],
  ["Credentials and course completions that reflect the focus of my learning journey.", "Credential dan course completion yang merekam fokus belajar sepanjang perjalanan."],
  ["07 / ACTIVITIES & COMMUNITY", "07 / AKTIVITAS & KOMUNITAS"],
  ["Outside classrooms and offices, I learn to lead, tell stories, and work with many people.", "Di luar kelas dan kantor, aku belajar memimpin, bercerita, dan bekerja bareng banyak orang."],
  ["A growing gallery of creative work, organizational activities, and collaboration.", "Galeri yang terus bertumbuh dari kegiatan kreatif, organisasi, dan kolaborasi."],
  ["DWDG Future Leaders", "DWDG Future Leaders"],
  ["Vice Head of ICON · 3 flagship programs · 300+ total participants", "Vice Head of ICON · 3 program utama · 300+ total peserta"],
  ["Student Score 3.6 · Training Attendance 87.5%", "Student Score 3.6 · Kehadiran pelatihan 87.5%"],
  ["Head of Information Media, HMSI ITS · 25 members · 150+ contents · 6 platforms", "Head of Information Media, HMSI ITS · 25 anggota · 150+ konten · 6 platform"],
  ["08 / PEER REVIEWS", "08 / CATATAN REKAN"],
  ["Space for stories from people I have worked with.", "Ruang untuk cerita dari orang-orang yang pernah bekerja bareng."],
  ["Peer note slot", "Slot catatan rekan"],
  ["Verified quote pending", "Menunggu kutipan terverifikasi"],
  ["Dinanti Vira Rachman", "Dinanti Vira Rachman"],
  ["Information Systems'22", "Sistem Informasi 2022"],
  ["09 / LET'S CONNECT", "09 / MARI TERHUBUNG"],
  ["Have an idea, a question, or an opportunity to learn and create together?", "Punya ide, pertanyaan, atau kesempatan untuk belajar dan berkarya bersama?"],
  ["I'd be happy to exchange stories about data, technology, and things we can make useful.", "Aku senang bertukar cerita tentang data, teknologi, dan hal-hal yang bisa kita buat berguna."],
  ["A living record of work, learning, and curiosity.", "Rekam jejak hidup tentang karya, belajar, dan rasa ingin tahu."]
];

const longTranslations = [
  ["I'm Diva, an Information Systems graduate drawn to what data can become: a clearer picture, a better decision, or the start of something useful. I enjoy exploring technology and learning how to turn that potential into practice.", "Aku Diva, lulusan Sistem Informasi yang tertarik pada potensi data: menjadi gambaran yang lebih jelas, keputusan yang lebih baik, atau awal dari sesuatu yang berguna. Aku senang mengeksplorasi teknologi dan belajar mengubah potensinya menjadi praktik."],
  ["Exploring data, technology, and the ideas that connect them to everyday needs.", "Mengeksplorasi data, teknologi, dan gagasan yang menghubungkannya dengan kebutuhan sehari-hari."],
  ["I'm an Information Systems graduate from ITS who enjoys working across data, systems, communication, and teamwork. Through analytics projects, research, applications, documentation, and organizational work, I keep learning how clearer information can help people understand problems and move forward with more confidence.", "Aku lulusan Sistem Informasi ITS yang senang berada di tengah data, sistem, komunikasi, dan kerja tim. Dari proyek analitik, riset, aplikasi, dokumentasi, sampai kegiatan organisasi, aku belajar bahwa informasi yang rapi bisa membantu orang melihat masalah dengan lebih jelas dan mengambil langkah berikutnya dengan lebih percaya diri."],
  ["Where an early interest in communication, organizations, and creative work grew before expanding into systems and technology.", "Tempat awal ketertarikan pada komunikasi, organisasi, dan karya kreatif tumbuh sebelum berkembang ke bidang sistem dan teknologi."],
  ["Learning to connect data, business processes, technology, and people in one solution. The most formative subjects included systems analysis, databases, ERP, data warehouse and ETL, data visualization, and natural language processing.", "Mempelajari cara menghubungkan data, proses bisnis, teknologi, dan manusia dalam satu solusi. Fokus pembelajaran yang paling membekas: analisis sistem, basis data, ERP, data warehouse dan ETL, visualisasi data, serta natural language processing."],
  ["At IDEtama, I learned a lot about the back side of a system: how data structures are read, turned into documentation, and tested so the flow is easier to understand. I documented 5+ PostgreSQL schemas for ScyllaX ERP using DBeaver, designed an ERD for a factory alarm monitoring system, prepared a 73-page SYPIU user manual, and helped log findings during functional testing in staging.", "Di IDEtama, aku banyak belajar tentang sisi belakang sebuah sistem: bagaimana struktur data dibaca, ditulis ulang menjadi dokumentasi, lalu diuji agar alurnya lebih mudah dipahami. Aku mendokumentasikan 5+ schema PostgreSQL untuk ScyllaX ERP dengan DBeaver, merancang ERD untuk sistem monitoring alarm pabrik, menyusun user manual SYPIU 73 halaman, dan ikut mencatat temuan saat pengujian fungsional di staging."],
  ["At AHM, I helped improve an employee assessment process that previously relied on archived forms and manual work. Together with the team, I developed an application using Microsoft Power Apps and Microsoft Lists for QnA and Written assessments in the EPP Analyst Assy and Casting area. My work covered the Assessor UI, assessment overview, page and data routing, Admin recap, app finishing, and notes feature.", "Di AHM, aku ikut membantu merapikan proses asesmen karyawan yang sebelumnya masih bertumpu pada arsip form dan pekerjaan manual. Bersama tim, aku mengembangkan aplikasi berbasis Microsoft Power Apps dan Microsoft Lists untuk penilaian QnA dan Written di area EPP Analyst Assy dan Casting. Bagian yang kukerjakan mencakup UI Assessor, overview asesmen, routing page/data, rekap Admin, finishing aplikasi, dan fitur notes."],
  ["A collection of projects from coursework, research, internships, and competitions. Each card keeps the question, approach, and visible outcome behind the work.", "Kumpulan proyek dari perkuliahan, riset, magang, dan kompetisi. Setiap kartu menyimpan pertanyaan yang ingin dijawab, pendekatan yang digunakan, dan hasil yang bisa ditunjukkan."],
  ["Credentials and course completions that reflect the focus of my learning journey.", "Credential dan course completion yang merekam fokus belajar sepanjang perjalanan."],
  ["Some came from teamwork, some from making sense of a difficult case, and some from the courage to finish what I had started.", "Ada yang lahir dari kerja tim, ada yang dari proses memahami kasus, dan ada juga yang dari keberanian untuk menyelesaikan apa yang sudah dimulai."],
  ["With Team Vitakastara, I received 1st Place in the Kota Cerdas category through ResQ Emergency Smart Traffic Light, a traffic-priority concept for emergency vehicles in Surabaya.", "Bersama Team Vitakastara, aku menerima Juara 1 kategori Kota Cerdas lewat konsep ResQ Emergency Smart Traffic Light, sebuah ide prioritas lalu lintas untuk kendaraan darurat di Surabaya."],
  ["Recognition from DWDG Future Leaders ITS for an analysis of PT Astra International based on 10 DWDG indicators, later summarized into an analysis and recommendation report.", "Pengakuan dari program DWDG Future Leaders ITS untuk analisis PT Astra International berbasis 10 indikator DWDG, yang kemudian dirangkum menjadi laporan analisis dan rekomendasi."],
  ["With Team Three Musketeers, I ranked 9th out of 42 teams through a campaign proposal to increase awareness and everyday use of Jago's Kantong Bersama feature.", "Bersama Team Three Musketeers, aku meraih peringkat 9 dari 42 tim melalui proposal campaign untuk meningkatkan awareness dan penggunaan fitur Kantong Bersama Jago dalam kehidupan sehari-hari."],
  ["This section is prepared for short, approved notes from peers, mentors, or collaborators. For now, it is kept manual so the portfolio stays lightweight and easy to maintain.", "Bagian ini disiapkan untuk kutipan singkat yang sudah mendapat izin dari rekan, mentor, atau collaborator. Untuk sekarang, isinya dibuat manual agar tetap ringan dan mudah dirawat."],
  ["A short note from a teammate, mentor, or collaborator can be added here once it is approved.", "Catatan singkat dari teman tim, mentor, atau collaborator bisa ditaruh di sini setelah mendapat izin."],
  ["Diva is a highly dependable individual who can be relied upon in both academic and personal matters. She is friendly, communicates effectively, and consistently demonstrates a strong work ethic. She is also a creative and resourceful person who approaches challenges with dedication and initiative.", "Diva adalah sosok yang sangat bisa diandalkan, baik dalam urusan akademik maupun personal. Ia ramah, komunikatif, dan konsisten menunjukkan etos kerja yang kuat. Diva juga kreatif dan resourceful dalam menghadapi tantangan dengan dedikasi dan inisiatif."],
  ["This space can hold a story about teamwork, communication, problem solving, or project delivery.", "Ruang ini bisa dipakai untuk cerita tentang kerja tim, komunikasi, problem solving, atau penyelesaian proyek."],
  ["Each review should stay concise, specific, and approved by the person who wrote it.", "Setiap review sebaiknya tetap singkat, spesifik, dan sudah disetujui oleh orang yang menulisnya."],
  ["Research, recommendations, and collaboration", "Riset, rekomendasi, dan kolaborasi"],
  ["An undergraduate thesis on Kopi Kenangan and Fore Coffee app reviews mapped into five aspects: Taste, Service, Price, Application, and Promotion. The project combined topic exploration with LDA and BERTopic, followed by sentiment classification using Qwen2.5-7B and IndoBERT-GRU.", "Skripsi tentang ulasan aplikasi Kopi Kenangan dan Fore Coffee yang dipetakan ke lima aspek: Taste, Service, Price, Application, dan Promotion. Proyek ini menggabungkan eksplorasi topik dengan LDA dan BERTopic, lalu klasifikasi sentimen menggunakan Qwen2.5-7B dan IndoBERT-GRU."],
  ["A team academic project that turned student performance data into a data warehouse model, ETL workflow, and Power BI dashboard. From there, performance patterns and repeated courses could be read in a more structured way.", "Proyek akademik tim yang mengolah data performa mahasiswa menjadi model data warehouse, alur ETL, dan dashboard Power BI. Dari sana, pola performa dan pengulangan mata kuliah bisa dibaca lebih terstruktur."],
  ["An academic forecasting project comparing ARIMA, SARIMA, and hybrid SARIMA-LSTM to see each model's trade-offs in projecting passenger volume at Hang Nadim Airport.", "Proyek forecasting akademik yang membandingkan ARIMA, SARIMA, dan hybrid SARIMA-LSTM untuk melihat trade-off model dalam memproyeksikan volume penumpang Bandara Hang Nadim."]
];

const translations = new Map();
[...contentPairs, ...longTranslations].forEach((pair) => {
  translations.set(pair[0], pair);
  translations.set(pair[1], pair);
});

const languageToggle = document.querySelector("[data-language-toggle]");
let language = localStorage.getItem("portfolio-language") || "en";
const toolkitSkills = {
  en: {
    data: "SQL · Python · Power BI · Pentaho · ETL · Data Cleaning",
    systems: "PostgreSQL · DBeaver · ERD · Functional Testing · Technical Documentation",
    collaboration: "Power Apps · Microsoft Lists · Project Coordination · Content Strategy"
  },
  id: {
    data: "SQL · Python · Power BI · Pentaho · ETL · Data Cleaning",
    systems: "PostgreSQL · DBeaver · ERD · Functional Testing · Dokumentasi Teknis",
    collaboration: "Power Apps · Microsoft Lists · Koordinasi Proyek · Strategi Konten"
  }
};
const toolkitOutput = document.querySelector("[data-toolkit-output]");
const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  const value = node.nodeValue.trim();
  const pair = translations.get(value);
  if (pair) textNodes.push({ node, pair });
}

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  const index = language === "en" ? 0 : 1;
  document.documentElement.lang = language;
  document.title = language === "en" ? "Diva Ardelia Alyadrus | Portfolio" : "Diva Ardelia Alyadrus | Portofolio";
  document.querySelector('meta[name="description"]').content = language === "en" ? "Portfolio of Diva Ardelia Alyadrus, an Information Systems graduate exploring data, technology, and useful digital solutions." : "Portofolio Diva Ardelia Alyadrus, lulusan Sistem Informasi yang mengeksplorasi data, teknologi, dan solusi digital yang berguna.";
  textNodes.forEach(({ node, pair }) => { node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), pair[index]); });
  document.querySelector(".site-header .brand").setAttribute("aria-label", language === "en" ? "Back to top" : "Kembali ke atas");
  document.querySelector(".site-nav").setAttribute("aria-label", language === "en" ? "Main navigation" : "Navigasi utama");
  document.querySelector(".toolkit__tabs").setAttribute("aria-label", language === "en" ? "Skill categories" : "Kategori keahlian");
  document.querySelector(".project-filters").setAttribute("aria-label", language === "en" ? "Filter projects" : "Filter proyek");
  document.querySelector(".portrait-picker").setAttribute("aria-label", language === "en" ? "Choose Diva's portrait" : "Pilih potret Diva");
  languageToggle.setAttribute("aria-label", language === "en" ? "Switch language to Indonesian" : "Ganti bahasa ke Inggris");
  languageToggle.classList.toggle("is-id", language === "id");
  document.querySelectorAll("[data-image]").forEach((button) => button.setAttribute("aria-label", button.dataset["label" + (language === "en" ? "En" : "Id")]));
  const active = document.querySelector("[data-image].is-active");
  const heroImage = document.querySelector("[data-hero-image]");
  if (active && heroImage) heroImage.alt = active.dataset["alt" + (language === "en" ? "En" : "Id")];
  updateToolkitOutput();
  localStorage.setItem("portfolio-language", language);
}
languageToggle?.addEventListener("click", () => applyLanguage(language === "en" ? "id" : "en"));
applyLanguage(language);

const heroImage = document.querySelector("[data-hero-image]");
const portraitButtons = document.querySelectorAll("[data-image]");
const portraitCarousel = document.querySelector(".hero__visual");
let portraitTimer;
function showPortrait(button) {
  if (!heroImage || button.classList.contains("is-active")) return;
  heroImage.classList.add("is-changing");
  window.setTimeout(() => {
    heroImage.src = button.dataset.image;
    heroImage.alt = button.dataset["alt" + (language === "en" ? "En" : "Id")];
    heroImage.style.setProperty("--portrait-scale", button.dataset.portraitScale);
    heroImage.style.setProperty("--portrait-offset", button.dataset.portraitOffset);
    heroImage.classList.remove("is-changing");
  }, 260);
  portraitButtons.forEach((item) => item.classList.remove("is-active"));
  button.classList.add("is-active");
}
function stopPortraitAutoplay() { window.clearInterval(portraitTimer); }
function startPortraitAutoplay() {
  if (portraitButtons.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.hidden) return;
  stopPortraitAutoplay();
  portraitTimer = window.setInterval(() => {
    const activeIndex = Array.from(portraitButtons).findIndex((button) => button.classList.contains("is-active"));
    showPortrait(portraitButtons[(activeIndex + 1) % portraitButtons.length]);
  }, 2500);
}
portraitButtons.forEach((button) => button.addEventListener("click", () => { showPortrait(button); startPortraitAutoplay(); }));
portraitCarousel?.addEventListener("pointerenter", stopPortraitAutoplay);
portraitCarousel?.addEventListener("pointerleave", startPortraitAutoplay);
portraitCarousel?.addEventListener("focusin", stopPortraitAutoplay);
portraitCarousel?.addEventListener("focusout", startPortraitAutoplay);
document.addEventListener("visibilitychange", () => document.hidden ? stopPortraitAutoplay() : startPortraitAutoplay());
startPortraitAutoplay();

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
}));
document.querySelectorAll(".education-card").forEach((card) => card.addEventListener("click", () => {
  const isFlipped = card.classList.toggle("is-flipped");
  card.setAttribute("aria-pressed", String(isFlipped));
}));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll("[data-education-slideshow]").forEach((slideshow) => {
  const slides = slideshow.querySelectorAll("img");
  let activeIndex = 0;
  if (slides.length < 2 || reduceMotion) return;
  window.setInterval(() => {
    if (document.hidden) return;
    slides[activeIndex].classList.remove("is-active");
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add("is-active");
  }, 3500);
});
document.querySelectorAll("[data-community-slideshow]").forEach((slideshow) => {
  const slides = slideshow.querySelectorAll("img");
  let activeIndex = 0;
  if (slides.length < 2 || reduceMotion) return;
  window.setInterval(() => {
    if (document.hidden) return;
    slides[activeIndex].classList.remove("is-active");
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add("is-active");
  }, 4200);
});

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
document.querySelectorAll("[data-lightbox-src]").forEach((trigger) => trigger.addEventListener("click", () => {
  lightboxImage.src = trigger.dataset.lightboxSrc;
  lightboxImage.alt = trigger.dataset.lightboxAlt;
  lightbox.showModal();
}));
lightbox?.querySelector(".lightbox__close").addEventListener("click", () => lightbox.close());
lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.close(); });
document.querySelector("[data-current-year]").textContent = new Date().getFullYear();

function updateToolkitOutput() {
  const activeTab = document.querySelector("[data-toolkit-tab].is-active");
  if (toolkitOutput && activeTab) toolkitOutput.textContent = toolkitSkills[language][activeTab.dataset.toolkitTab];
}
document.querySelectorAll("[data-toolkit-tab]").forEach((tab) => tab.addEventListener("click", () => {
  document.querySelectorAll("[data-toolkit-tab]").forEach((item) => { item.classList.remove("is-active"); item.setAttribute("aria-selected", "false"); });
  tab.classList.add("is-active"); tab.setAttribute("aria-selected", "true"); updateToolkitOutput();
}));
const projectFilters = document.querySelectorAll("[data-project-filter]");
const projectCards = document.querySelectorAll("[data-project-category]");
projectFilters.forEach((filter) => filter.addEventListener("click", () => {
  const category = filter.dataset.projectFilter;
  projectFilters.forEach((item) => item.classList.remove("is-active"));
  filter.classList.add("is-active");
  projectCards.forEach((card) => { card.hidden = category !== "all" && card.dataset.projectCategory !== category; });
}));
