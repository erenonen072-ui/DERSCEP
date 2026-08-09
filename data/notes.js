"use strict";

/* =========================================================
   DERSCEP - DERS NOTLARI
   5. Sınıftan 12. Sınıfa kadar
========================================================= */

const DERSCEP_NOTLARI = [

  /* =====================================================
     5. SINIF
  ===================================================== */

  {
    id: "5-mat-dogal-sayilar",
    title: "Doğal Sayılar",
    subject: "Matematik",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Doğal sayılar, basamak değerleri ve sayıların karşılaştırılması.",
    topics: ["Doğal sayılar", "Basamak değeri", "Sayı karşılaştırma"],
    icon: "🔢",
    views: 1250,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "5-mat-kesirler",
    title: "Kesirler",
    subject: "Matematik",
    grade: "5. Sınıf",
    category: "Konu Özeti",
    description: "Kesir çeşitleri, kesirleri karşılaştırma ve kesir işlemleri.",
    topics: ["Kesir", "Bileşik kesir", "Tam sayılı kesir", "Karşılaştırma"],
    icon: "➗",
    views: 980,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "5-turkce-sozcuk-anlam",
    title: "Sözcükte Anlam",
    subject: "Türkçe",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Sözcüklerin gerçek, mecaz ve terim anlamları.",
    topics: ["Gerçek anlam", "Mecaz anlam", "Terim anlam"],
    icon: "📖",
    views: 870,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "5-fen-dunya-ay",
    title: "Dünya, Güneş ve Ay",
    subject: "Fen Bilimleri",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Dünya, Güneş ve Ay'ın temel özellikleri ve hareketleri.",
    topics: ["Dünya", "Güneş", "Ay", "Hareket"],
    icon: "🌍",
    views: 760,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "5-sosyal-birey-toplum",
    title: "Birey ve Toplum",
    subject: "Sosyal Bilgiler",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Bireyin toplum içindeki yeri, roller ve sorumluluklar.",
    topics: ["Birey", "Toplum", "Hak", "Sorumluluk"],
    icon: "👥",
    views: 620,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "5-ingilizce-hello",
    title: "Hello",
    subject: "İngilizce",
    grade: "5. Sınıf",
    category: "Konu Özeti",
    description: "Tanışma, selamlaşma ve temel İngilizce ifadeler.",
    topics: ["Hello", "Greetings", "Introducing"],
    icon: "🇬🇧",
    views: 550,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  /* =====================================================
     6. SINIF
  ===================================================== */

  {
    id: "6-mat-islemler",
    title: "İşlemler ve Çarpanlar",
    subject: "Matematik",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Doğal sayılarla işlemler ve işlem önceliği.",
    topics: ["Doğal sayılar", "İşlem önceliği", "Çarpan"],
    icon: "🔢",
    views: 920,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "6-mat-kesirler",
    title: "Kesirlerle İşlemler",
    subject: "Matematik",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Kesirlerle toplama, çıkarma, çarpma ve bölme.",
    topics: ["Kesir", "Toplama", "Çıkarma", "Çarpma", "Bölme"],
    icon: "➗",
    views: 850,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "6-turkce-fiiller",
    title: "Fiiller",
    subject: "Türkçe",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Fiillerin özellikleri ve fiil çeşitleri.",
    topics: ["Fiil", "İş", "Durum", "Oluş"],
    icon: "✍️",
    views: 780,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "6-fen-vucudumuz",
    title: "Vücudumuzdaki Sistemler",
    subject: "Fen Bilimleri",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Vücudumuzdaki temel sistemler ve görevleri.",
    topics: ["Sistem", "Organ", "Vücut"],
    icon: "🧬",
    views: 730,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "6-sosyal-tarih",
    title: "Türklerin Tarih Yolculuğu",
    subject: "Sosyal Bilgiler",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Türklerin tarih boyunca oluşturduğu devletler ve kültür.",
    topics: ["Türkler", "Devlet", "Kültür"],
    icon: "🏛️",
    views: 620,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  /* =====================================================
     7. SINIF
  ===================================================== */

  {
    id: "7-mat-tamsayilar",
    title: "Tam Sayılar",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Tam sayılar ve tam sayılarla işlemler.",
    topics: ["Tam sayılar", "Toplama", "Çıkarma", "Çarpma", "Bölme"],
    icon: "🔢",
    views: 1100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-mat-oran",
    title: "Oran ve Orantı",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Oran, orantı ve günlük hayatta kullanım alanları.",
    topics: ["Oran", "Orantı", "Doğru orantı"],
    icon: "📊",
    views: 940,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-turkce-cumle",
    title: "Cümlede Anlam",
    subject: "Türkçe",
    grade: "7. Sınıf",
    category: "Konu Özeti",
    description: "Cümlelerin anlam özellikleri ve yorumlanması.",
    topics: ["Cümle", "Anlam", "Neden-sonuç", "Amaç-sonuç"],
    icon: "📖",
    views: 890,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-fen-kuvvet",
    title: "Kuvvet ve Enerji",
    subject: "Fen Bilimleri",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Kuvvet, iş ve enerji arasındaki temel ilişkiler.",
    topics: ["Kuvvet", "Enerji", "İş"],
    icon: "⚡",
    views: 760,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  /* =====================================================
     8. SINIF
  ===================================================== */

  {
    id: "8-mat-carpanlar",
    title: "Çarpanlar ve Katlar",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Çarpanlar, katlar, asal sayılar ve EBOB-EKOK.",
    topics: ["Çarpan", "Kat", "Asal sayı", "EBOB", "EKOK"],
    icon: "🔢",
    views: 1800,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-mat-uslu",
    title: "Üslü İfadeler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Üslü ifadeler ve üslü ifadelerin temel kuralları.",
    topics: ["Üs", "Taban", "Negatif üs", "Bilimsel gösterim"],
    icon: "📐",
    views: 1650,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-mat-karekok",
    title: "Kareköklü İfadeler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Konu Özeti",
    description: "Kareköklü ifadeler ve kareköklü ifadelerle işlemler.",
    topics: ["Karekök", "Köklü ifadeler", "İşlemler"],
    icon: "√",
    views: 1450,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-turkce-paragraf",
    title: "Paragrafta Anlam",
    subject: "Türkçe",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Paragrafın ana fikri, yardımcı fikir ve paragraf yapısı.",
    topics: ["Ana fikir", "Yardımcı fikir", "Paragraf"],
    icon: "📖",
    views: 1320,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-fen-mevsimler",
    title: "Mevsimler ve İklim",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Mevsimlerin oluşumu ve iklim özellikleri.",
    topics: ["Mevsim", "İklim", "Dünya"],
    icon: "🌍",
    views: 1120,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  /* =====================================================
     9. SINIF
  ===================================================== */

  {
    id: "9-mat-uslu",
    title: "Üslü İfadeler",
    subject: "Matematik",
    grade: "9. Sınıf",
    category: "Ders Notu",
    description: "Üslü ifadelerin kuralları ve temel uygulamaları.",
    topics: ["Üslü ifade", "Üs kuralları", "Negatif üs"],
    icon: "📐",
    views: 1248,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "9-mat-denklemler",
    title: "Denklemler",
    subject: "Matematik",
    grade: "9. Sınıf",
    category: "Ders Notu",
    description: "Birinci dereceden denklemler ve çözüm yöntemleri.",
    topics: ["Denklem", "Bilinmeyen", "Eşitlik"],
    icon: "➗",
    views: 1100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "9-edebiyat-siir",
    title: "Şiir Bilgisi",
    subject: "Türk Dili ve Edebiyatı",
    grade: "9. Sınıf",
    category: "Konu Özeti",
    description: "Şiirin temel özellikleri, ölçü, kafiye ve nazım.",
    topics: ["Şiir", "Kafiye", "Redif", "Ölçü"],
    icon: "📖",
    views: 1875,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "9-fizik-hareket",
    title: "Hareket ve Kuvvet",
    subject: "Fizik",
    grade: "9. Sınıf",
    category: "Ders Notu",
    description: "Hareket, hız, sürat ve kuvvet kavramları.",
    topics: ["Hareket", "Hız", "Sürat", "Kuvvet"],
    icon: "⚡",
    views: 1437,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "9-kimya-atom",
    title: "Atom ve Periyodik Sistem",
    subject: "Kimya",
    grade: "9. Sınıf",
    category: "Ders Notu",
    description: "Atomun yapısı ve periyodik sistemin temel özellikleri.",
    topics: ["Atom", "Proton", "Nötron", "Elektron"],
    icon: "⚗️",
    views: 1092,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "9-biyoloji-hucre",
    title: "Hücre",
    subject: "Biyoloji",
    grade: "9. Sınıf",
    category: "Ders Notu",
    description: "Hücrenin yapısı, organeller ve görevleri.",
    topics: ["Hücre", "Organeller", "Çekirdek"],
    icon: "🧬",
    views: 1219,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  /* =====================================================
     10. SINIF
  ===================================================== */

  {
    id: "10-mat-fonksiyon",
    title: "Fonksiyonlar",
    subject: "Matematik",
    grade: "10. Sınıf",
    category: "Ders Notu",
    description: "Fonksiyon kavramı, tanım kümesi ve değer kümesi.",
    topics: ["Fonksiyon", "Tanım kümesi", "Değer kümesi"],
    icon: "📈",
    views: 1300,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "10-mat-polinom",
    title: "Polinomlar",
    subject: "Matematik",
    grade: "10. Sınıf",
    category: "Ders Notu",
    description: "Polinomların temel özellikleri ve işlemleri.",
    topics: ["Polinom", "Derece", "Katsayı"],
    icon: "➗",
    views: 1150,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "10-fizik-elektrik",
    title: "Elektrik",
    subject: "Fizik",
    grade: "10. Sınıf",
    category: "Ders Notu",
    description: "Elektrik akımı, gerilim ve devrelerin temel özellikleri.",
    topics: ["Elektrik", "Akım", "Gerilim", "Devre"],
    icon: "⚡",
    views: 980,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "10-kimya-karisimlar",
    title: "Karışımlar",
    subject: "Kimya",
    grade: "10. Sınıf",
    category: "Ders Notu",
    description: "Karışımların özellikleri ve ayırma yöntemleri.",
    topics: ["Karışım", "Çözelti", "Ayırma"],
    icon: "🧪",
    views: 870,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  /* =====================================================
     11. SINIF
  ===================================================== */

  {
    id: "11-mat-trigonometri",
    title: "Trigonometri",
    subject: "Matematik",
    grade: "11. Sınıf",
    category: "Ders Notu",
    description: "Trigonometrik oranlar ve temel bağıntılar.",
    topics: ["Sinüs", "Kosinüs", "Tanjant"],
    icon: "📐",
    views: 1500,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "11-mat-logaritma",
    title: "Logaritma",
    subject: "Matematik",
    grade: "11. Sınıf",
    category: "Ders Notu",
    description: "Logaritma fonksiyonu ve logaritma kuralları.",
    topics: ["Logaritma", "Taban", "Üstel ifade"],
    icon: "📊",
    views: 1400,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "11-fizik-kuvvet",
    title: "Kuvvet ve Hareket",
    subject: "Fizik",
    grade: "11. Sınıf",
    category: "Ders Notu",
    description: "Kuvvet, hareket ve Newton yasaları.",
    topics: ["Kuvvet", "Newton", "Hareket"],
    icon: "⚡",
    views: 1050,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "11-kimya-sistem",
    title: "Kimyasal Sistemler",
    subject: "Kimya",
    grade: "11. Sınıf",
    category: "Ders Notu",
    description: "Kimyasal tepkimeler ve kimyasal sistemlerin temel özellikleri.",
    topics: ["Tepkime", "Kimyasal sistem", "Denge"],
    icon: "⚗️",
    views: 900,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  /* =====================================================
     12. SINIF
  ===================================================== */

  {
    id: "12-mat-limit",
    title: "Limit",
    subject: "Matematik",
    grade: "12. Sınıf",
    category: "Ders Notu",
    description: "Limit kavramı ve temel limit kuralları.",
    topics: ["Limit", "Fonksiyon", "Süreklilik"],
    icon: "📈",
    views: 1800,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "12-mat-turev",
    title: "Türev",
    subject: "Matematik",
    grade: "12. Sınıf",
    category: "Ders Notu",
    description: "Türev kavramı, türev alma kuralları ve uygulamalar.",
    topics: ["Türev", "Fonksiyon", "Türev kuralları"],
    icon: "📐",
    views: 1750,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "12-mat-integral",
    title: "İntegral",
    subject: "Matematik",
    grade: "12. Sınıf",
    category: "Ders Notu",
    description: "Belirsiz ve belirli integralin temel özellikleri.",
    topics: ["İntegral", "Alan", "Belirsiz integral"],
    icon: "∫",
    views: 1650,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "12-fizik-elektromanyetizma",
    title: "Elektromanyetizma",
    subject: "Fizik",
    grade: "12. Sınıf",
    category: "Ders Notu",
    description: "Elektrik ve manyetizma arasındaki temel ilişkiler.",
    topics: ["Elektrik", "Manyetizma", "Elektromanyetik"],
    icon: "⚡",
    views: 1200,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "12-kimya-organik",
    title: "Organik Kimya",
    subject: "Kimya",
    grade: "12. Sınıf",
    category: "Ders Notu",
    description: "Organik bileşikler ve temel organik kimya kavramları.",
    topics: ["Organik", "Karbon", "Hidrokarbon"],
    icon: "🧪",
    views: 1100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  }

];

/* =========================================================
   FONKSİYONLAR
========================================================= */

function dersCepNotGetir(id) {
  return DERSCEP_NOTLARI.find(note => note.id === id);
}

function dersCepSinifNotlari(grade) {
  return DERSCEP_NOTLARI.filter(note => note.grade === grade);
}

function dersCepDersNotlari(subject) {
  return DERSCEP_NOTLARI.filter(note => note.subject === subject);
}

function dersCepOneCikanNotlar() {
  return DERSCEP_NOTLARI.filter(note => note.featured);
}

function dersCepPopulerNotlar(limit = 6) {
  return [...DERSCEP_NOTLARI]
    .sort((a, b) => Number(b.views || 0) - Number(a.views || 0))
    .slice(0, limit);
}

function dersCepSonNotlar(limit = 6) {
  return [...DERSCEP_NOTLARI]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

function dersCepDersleri() {
  return [...new Set(DERSCEP_NOTLARI.map(note => note.subject))];
}

function dersCepSiniflari() {
  return [...new Set(DERSCEP_NOTLARI.map(note => note.grade))];
}

/* =========================================================
   GLOBAL
========================================================= */

window.DERSCEP_NOTLARI = DERSCEP_NOTLARI;
window.dersCepNotGetir = dersCepNotGetir;
window.dersCepSinifNotlari = dersCepSinifNotlari;
window.dersCepDersNotlari = dersCepDersNotlari;
window.dersCepOneCikanNotlar = dersCepOneCikanNotlar;
window.dersCepPopulerNotlar = dersCepPopulerNotlar;
window.dersCepSonNotlar = dersCepSonNotlar;
window.dersCepDersleri = dersCepDersleri;
window.dersCepSiniflari = dersCepSiniflari;
