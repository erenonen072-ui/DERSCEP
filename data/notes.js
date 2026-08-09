/* =====================================================
   DERSCEP - NOTES DATA
   DersCep'in merkezi içerik verileri
===================================================== */

"use strict";


/* =====================================================
   NOTLAR
===================================================== */

const DERSCEP_NOTLARI = [

  /* =========================
     MATEMATİK
  ========================== */

  {
    id: "mat-9-uslu-ifadeler",

    title: "Üslü İfadeler",

    subject: "Matematik",

    grade: "9. Sınıf",

    category: "Ders Notu",

    description:
      "Üslü ifadelerin temel kuralları, özellikleri ve örnek soru çözümleri.",

    topics: [
      "Üslü ifadeler",
      "Üs kuralları",
      "Negatif üs",
      "Sıfırıncı kuvvet"
    ],

    icon: "📐",

    views: 1248,

    featured: true,

    date: "2026-08-09",

    pdf: "#"
  },


  {
    id: "mat-9-koklu-sayilar",

    title: "Köklü Sayılar",

    subject: "Matematik",

    grade: "9. Sınıf",

    category: "Konu Özeti",

    description:
      "Köklü sayıların tanımı, sadeleştirme işlemleri ve temel kurallar.",

    topics: [
      "Köklü sayılar",
      "Karekök",
      "Sadeleştirme",
      "Kök dışına çıkarma"
    ],

    icon: "√",

    views: 932,

    featured: true,

    date: "2026-08-08",

    pdf: "#"
  },


  {
    id: "mat-9-denklemler",

    title: "Birinci Dereceden Denklemler",

    subject: "Matematik",

    grade: "9. Sınıf",

    category: "Ders Notu",

    description:
      "Birinci dereceden denklemlerin çözüm yöntemleri ve örnekler.",

    topics: [
      "Denklem",
      "Bilinmeyen",
      "Eşitlik",
      "Çözüm kümesi"
    ],

    icon: "➗",

    views: 756,

    featured: false,

    date: "2026-08-07",

    pdf: "#"
  },


  /* =========================
     TÜRK DİLİ VE EDEBİYATI
  ========================== */

  {
    id: "edebiyat-9-siir",

    title: "Şiir Bilgisi",

    subject: "Türk Dili ve Edebiyatı",

    grade: "9. Sınıf",

    category: "Konu Özeti",

    description:
      "Şiirin temel özellikleri, nazım birimleri, ölçü ve kafiye bilgileri.",

    topics: [
      "Şiir",
      "Nazım",
      "Kafiye",
      "Redif",
      "Ölçü"
    ],

    icon: "📖",

    views: 1875,

    featured: true,

    date: "2026-08-09",

    pdf: "#"
  },


  {
    id: "edebiyat-9-edebi-sanatlar",

    title: "Edebi Sanatlar",

    subject: "Türk Dili ve Edebiyatı",

    grade: "9. Sınıf",

    category: "Ders Notu",

    description:
      "Teşbih, kişileştirme, benzetme, mecaz ve diğer önemli edebi sanatlar.",

    topics: [
      "Teşbih",
      "Kişileştirme",
      "Mecaz",
      "Edebi sanatlar"
    ],

    icon: "✍️",

    views: 1130,

    featured: true,

    date: "2026-08-06",

    pdf: "#"
  },


  /* =========================
     FİZİK
  ========================== */

  {
    id: "fizik-9-hareket",

    title: "Hareket ve Kuvvet",

    subject: "Fizik",

    grade: "9. Sınıf",

    category: "Ders Notu",

    description:
      "Hareket, kuvvet, hız, sürat ve temel fizik kavramlarının özeti.",

    topics: [
      "Hareket",
      "Kuvvet",
      "Hız",
      "Sürat"
    ],

    icon: "⚡",

    views: 1437,

    featured: true,

    date: "2026-08-08",

    pdf: "#"
  },


  {
    id: "fizik-9-enerji",

    title: "Enerji",

    subject: "Fizik",

    grade: "9. Sınıf",

    category: "Konu Özeti",

    description:
      "Enerji türleri, iş, güç ve enerji arasındaki ilişkiler.",

    topics: [
      "Enerji",
      "İş",
      "Güç",
      "Kinetik enerji"
    ],

    icon: "🔋",

    views: 841,

    featured: false,

    date: "2026-08-05",

    pdf: "#"
  },


  /* =========================
     KİMYA
  ========================== */

  {
    id: "kimya-9-atom",

    title: "Atom ve Periyodik Sistem",

    subject: "Kimya",

    grade: "9. Sınıf",

    category: "Ders Notu",

    description:
      "Atomun yapısı, proton, nötron, elektron ve periyodik sistemin temelleri.",

    topics: [
      "Atom",
      "Proton",
      "Nötron",
      "Elektron",
      "Periyodik sistem"
    ],

    icon: "⚗️",

    views: 1092,

    featured: true,

    date: "2026-08-07",

    pdf: "#"
  },


  {
    id: "kimya-9-madde",

    title: "Maddenin Halleri",

    subject: "Kimya",

    grade: "9. Sınıf",

    category: "Konu Özeti",

    description:
      "Katı, sıvı, gaz ve plazma hâllerinin temel özellikleri.",

    topics: [
      "Katı",
      "Sıvı",
      "Gaz",
      "Plazma"
    ],

    icon: "🧪",

    views: 645,

    featured: false,

    date: "2026-08-04",

    pdf: "#"
  },


  /* =========================
     BİYOLOJİ
  ========================== */

  {
    id: "biyoloji-9-hucre",

    title: "Hücre",

    subject: "Biyoloji",

    grade: "9. Sınıf",

    category: "Ders Notu",

    description:
      "Hücrenin temel yapısı, organeller ve hücre çeşitleri.",

    topics: [
      "Hücre",
      "Organeller",
      "Çekirdek",
      "Hücre zarı"
    ],

    icon: "🧬",

    views: 1219,

    featured: true,

    date: "2026-08-06",

    pdf: "#"
  },


  /* =========================
     TARİH
  ========================== */

  {
    id: "tarih-9-ilk-cag",

    title: "İlk Çağ Medeniyetleri",

    subject: "Tarih",

    grade: "9. Sınıf",

    category: "Ders Notu",

    description:
      "İlk Çağ'da kurulan önemli medeniyetler ve tarihî gelişmeler.",

    topics: [
      "İlk Çağ",
      "Medeniyet",
      "Mezopotamya",
      "Mısır"
    ],

    icon: "🏛️",

    views: 978,

    featured: false,

    date: "2026-08-03",

    pdf: "#"
  },


  /* =========================
     COĞRAFYA
  ========================== */

  {
    id: "cografya-9-doga",

    title: "Doğa ve İnsan",

    subject: "Coğrafya",

    grade: "9. Sınıf",

    category: "Konu Özeti",

    description:
      "Doğa, insan ve çevre arasındaki ilişkiyi açıklayan temel bilgiler.",

    topics: [
      "Doğa",
      "İnsan",
      "Çevre",
      "Coğrafya"
    ],

    icon: "🌍",

    views: 734,

    featured: false,

    date: "2026-08-02",

    pdf: "#"
  }

];


/* =====================================================
   YARDIMCI FONKSİYONLAR
===================================================== */


/**
 * ID'ye göre not getirir.
 */
function dersCepNotGetir(id) {

  return DERSCEP_NOTLARI.find(
    note => note.id === id
  );

}


/**
 * Sınıfa göre notları getirir.
 */
function dersCepSinifNotlari(grade) {

  return DERSCEP_NOTLARI.filter(
    note => note.grade === grade
  );

}


/**
 * Derse göre notları getirir.
 */
function dersCepDersNotlari(subject) {

  return DERSCEP_NOTLARI.filter(
    note => note.subject === subject
  );

}


/**
 * Öne çıkan notları getirir.
 */
function dersCepOneCikanNotlar() {

  return DERSCEP_NOTLARI.filter(
    note => note.featured === true
  );

}


/**
 * En çok görüntülenen notları getirir.
 */
function dersCepPopulerNotlar(limit = 6) {

  return [...DERSCEP_NOTLARI]
    .sort(
      (a, b) =>
        b.views - a.views
    )
    .slice(0, limit);

}


/**
 * Son eklenen notları getirir.
 */
function dersCepSonNotlar(limit = 6) {

  return [...DERSCEP_NOTLARI]
    .sort(
      (a, b) =>
        new Date(b.date) -
        new Date(a.date)
    )
    .slice(0, limit);

}


/**
 * Tüm dersleri getirir.
 */
function dersCepDersleri() {

  return [
    ...new Set(
      DERSCEP_NOTLARI.map(
        note => note.subject
      )
    )
  ];

}


/**
 * Tüm sınıfları getirir.
 */
function dersCepSiniflari() {

  return [
    ...new Set(
      DERSCEP_NOTLARI.map(
        note => note.grade
      )
    )
  ];

}


/* =====================================================
   GLOBAL
===================================================== */

window.DERSCEP_NOTLARI =
  DERSCEP_NOTLARI;

window.dersCepNotGetir =
  dersCepNotGetir;

window.dersCepSinifNotlari =
  dersCepSinifNotlari;

window.dersCepDersNotlari =
  dersCepDersNotlari;

window.dersCepOneCikanNotlar =
  dersCepOneCikanNotlar;

window.dersCepPopulerNotlar =
  dersCepPopulerNotlar;

window.dersCepSonNotlar =
  dersCepSonNotlar;

window.dersCepDersleri =
  dersCepDersleri;

window.dersCepSiniflari =
  dersCepSiniflari;
