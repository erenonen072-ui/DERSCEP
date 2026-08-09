```javascript
/* =====================================================
   DERSCEP - NOTES DATA
   Merkezi ders notları veritabanı
   5. SINIFTAN 12. SINIFA
===================================================== */

"use strict";


/* =====================================================
   NOTLAR
===================================================== */

const DERSCEP_NOTLARI = [

  /* ===================================================
     5. SINIF
  =================================================== */

  {
    id: "mat-5-dogal-sayilar",
    title: "Doğal Sayılar",
    subject: "Matematik",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description:
      "Doğal sayılar, basamak değerleri, sayıların okunması ve yazılması.",
    topics: [
      "Doğal sayılar",
      "Basamak değeri",
      "Sayı okuma",
      "Sayı yazma"
    ],
    icon: "📐",
    views: 420,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "turkce-5-sozcuk-anlami",
    title: "Sözcükte Anlam",
    subject: "Türkçe",
    grade: "5. Sınıf",
    category: "Konu Özeti",
    description:
      "Sözcüklerin gerçek, mecaz ve terim anlamları.",
    topics: [
      "Gerçek anlam",
      "Mecaz anlam",
      "Terim anlam"
    ],
    icon: "📖",
    views: 380,
    featured: true,
    date: "2026-08-08",
    pdf: "#"
  },

  {
    id: "fen-5-dunya-gunes",
    title: "Dünya, Güneş ve Ay",
    subject: "Fen Bilimleri",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description:
      "Dünya, Güneş ve Ay'ın temel özellikleri ve hareketleri.",
    topics: [
      "Dünya",
      "Güneş",
      "Ay",
      "Dönme"
    ],
    icon: "🌍",
    views: 310,
    featured: false,
    date: "2026-08-07",
    pdf: "#"
  },

  {
    id: "sosyal-5-birey-toplum",
    title: "Birey ve Toplum",
    subject: "Sosyal Bilgiler",
    grade: "5. Sınıf",
    category: "Konu Özeti",
    description:
      "Bireyin toplum içerisindeki yeri, hakları ve sorumlulukları.",
    topics: [
      "Birey",
      "Toplum",
      "Hak",
      "Sorumluluk"
    ],
    icon: "🌎",
    views: 275,
    featured: false,
    date: "2026-08-06",
    pdf: "#"
  },


  /* ===================================================
     6. SINIF
  =================================================== */

  {
    id: "mat-6-tam-sayilar",
    title: "Tam Sayılar",
    subject: "Matematik",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description:
      "Tam sayılar, sayı doğrusu ve tam sayılarla işlemler.",
    topics: [
      "Tam sayılar",
      "Sayı doğrusu",
      "Toplama",
      "Çıkarma"
    ],
    icon: "📐",
    views: 515,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "turkce-6-isimler",
    title: "İsimler",
    subject: "Türkçe",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description:
      "İsim türleri ve isimlerin cümledeki kullanımları.",
    topics: [
      "İsim",
      "Özel isim",
      "Cins isim",
      "Çoğul isim"
    ],
    icon: "📖",
    views: 290,
    featured: false,
    date: "2026-08-08",
    pdf: "#"
  },

  {
    id: "fen-6-vucudumuzdaki-sistemler",
    title: "Vücudumuzdaki Sistemler",
    subject: "Fen Bilimleri",
    grade: "6. Sınıf",
    category: "Konu Özeti",
    description:
      "İnsan vücudundaki temel sistemler ve görevleri.",
    topics: [
      "Vücut",
      "Sistemler",
      "Organlar"
    ],
    icon: "🧬",
    views: 350,
    featured: true,
    date: "2026-08-07",
    pdf: "#"
  },

  {
    id: "sosyal-6-tarih",
    title: "Türklerin Tarihî Yolculuğu",
    subject: "Sosyal Bilgiler",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description:
      "Türklerin tarih boyunca kurduğu devletler ve önemli gelişmeler.",
    topics: [
      "Türkler",
      "Devlet",
      "Göç",
      "Kültür"
    ],
    icon: "🏛️",
    views: 240,
    featured: false,
    date: "2026-08-06",
    pdf: "#"
  },


  /* ===================================================
     7. SINIF
  =================================================== */

  {
    id: "mat-7-oran-oranti",
    title: "Oran ve Orantı",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description:
      "Oran, orantı ve doğru orantı konularının temel kuralları.",
    topics: [
      "Oran",
      "Orantı",
      "Doğru orantı"
    ],
    icon: "📐",
    views: 640,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "mat-7-yuzdeler",
    title: "Yüzdeler",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Konu Özeti",
    description:
      "Yüzde hesaplama, artış, azalış ve yüzde problemleri.",
    topics: [
      "Yüzde",
      "Yüzde artış",
      "Yüzde azalış"
    ],
    icon: "％",
    views: 480,
    featured: false,
    date: "2026-08-08",
    pdf: "#"
  },

  {
    id: "turkce-7-fiiller",
    title: "Fiiller",
    subject: "Türkçe",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description:
      "Fiillerin özellikleri, kipleri ve kişi ekleri.",
    topics: [
      "Fiil",
      "Kip",
      "Kişi",
      "Fiil çekimi"
    ],
    icon: "✍️",
    views: 410,
    featured: true,
    date: "2026-08-07",
    pdf: "#"
  },

  {
    id: "fen-7-hucre",
    title: "Hücre ve Bölünmeler",
    subject: "Fen Bilimleri",
    grade: "7. Sınıf",
    category: "Konu Özeti",
    description:
      "Hücrenin yapısı ve hücre bölünmelerinin temel özellikleri.",
    topics: [
      "Hücre",
      "Mitoz",
      "Bölünme"
    ],
    icon: "🧬",
    views: 330,
    featured: false,
    date: "2026-08-05",
    pdf: "#"
  },


  /* ===================================================
     8. SINIF
  =================================================== */

  {
    id: "mat-8-carpanlar-katlar",
    title: "Çarpanlar ve Katlar",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description:
      "Çarpanlar, katlar, asal sayılar ve ortak bölenler.",
    topics: [
      "Çarpan",
      "Kat",
      "Asal sayı",
      "EBOB",
      "EKOK"
    ],
    icon: "📐",
    views: 920,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "mat-8-uslu-ifadeler",
    title: "Üslü İfadeler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Konu Özeti",
    description:
      "Üslü ifadeler ve üslü ifadelerle yapılan temel işlemler.",
    topics: [
      "Üs",
      "Üslü ifade",
      "Üs kuralları"
    ],
    icon: "🔢",
    views: 860,
    featured: true,
    date: "2026-08-08",
    pdf: "#"
  },

  {
    id: "turkce-8-paragraf",
    title: "Paragrafta Anlam",
    subject: "Türkçe",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description:
      "Paragrafın ana düşüncesi, yardımcı düşünce ve paragraf soruları.",
    topics: [
      "Ana düşünce",
      "Yardımcı düşünce",
      "Paragraf"
    ],
    icon: "📖",
    views: 790,
    featured: true,
    date: "2026-08-08",
    pdf: "#"
  },

  {
    id: "fen-8-dna",
    title: "DNA ve Genetik Kod",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Konu Özeti",
    description:
      "DNA'nın yapısı, genetik kod ve kalıtımın temel kavramları.",
    topics: [
      "DNA",
      "Gen",
      "Kromozom",
      "Kalıtım"
    ],
    icon: "🧬",
    views: 680,
    featured: false,
    date: "2026-08-07",
    pdf: "#"
  },


  /* ===================================================
     9. SINIF
     MEVCUT NOTLAR
  =================================================== */

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
      "Teşbih, kişileştirme, mecaz ve diğer önemli edebi sanatlar.",
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
  },


  /* ===================================================
     10. SINIF
  =================================================== */

  {
    id: "mat-10-fonksiyonlar",
    title: "Fonksiyonlar",
    subject: "Matematik",
    grade: "10. Sınıf",
    category: "Ders Notu",
    description:
      "Fonksiyon kavramı, tanım kümesi, değer kümesi ve fonksiyon çeşitleri.",
    topics: [
      "Fonksiyon",
      "Tanım kümesi",
      "Değer kümesi",
      "Fonksiyon çeşitleri"
    ],
    icon: "📐",
    views: 720,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "edebiyat-10-hikaye",
    title: "Hikâye",
    subject: "Türk Dili ve Edebiyatı",
    grade: "10. Sınıf",
    category: "Konu Özeti",
    description:
      "Hikâyenin özellikleri, yapı unsurları ve hikâye türleri.",
    topics: [
      "Hikâye",
      "Olay",
      "Kişi",
      "Mekân",
      "Zaman"
    ],
    icon: "📖",
    views: 540,
    featured: true,
    date: "2026-08-08",
    pdf: "#"
  },

  {
    id: "fizik-10-elektrik",
    title: "Elektrik ve Devreler",
    subject: "Fizik",
    grade: "10. Sınıf",
    category: "Ders Notu",
    description:
      "Elektrik akımı, gerilim, direnç ve basit elektrik devreleri.",
    topics: [
      "Elektrik",
      "Akım",
      "Gerilim",
      "Direnç"
    ],
    icon: "⚡",
    views: 490,
    featured: false,
    date: "2026-08-07",
    pdf: "#"
  },

  {
    id: "kimya-10-karisimlar",
    title: "Karışımlar",
    subject: "Kimya",
    grade: "10. Sınıf",
    category: "Konu Özeti",
    description:
      "Homojen ve heterojen karışımlar ile ayırma yöntemleri.",
    topics: [
      "Karışım",
      "Homojen",
      "Heterojen",
      "Ayırma yöntemleri"
    ],
    icon: "🧪",
    views: 420,
    featured: false,
    date: "2026-08-06",
    pdf: "#"
  },


  /* ===================================================
     11. SINIF
  =================================================== */

  {
    id: "mat-11-trigonometri",
    title: "Trigonometri",
    subject: "Matematik",
    grade: "11. Sınıf",
    category: "Ders Notu",
    description:
      "Trigonometrik oranlar, açı ölçüleri ve temel trigonometri bağıntıları.",
    topics: [
      "Sinüs",
      "Kosinüs",
      "Tanjant",
      "Trigonometrik oranlar"
    ],
    icon: "📐",
    views: 820,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "edebiyat-11-cumhuriyet",
    title: "Cumhuriyet Dönemi Türk Edebiyatı",
    subject: "Türk Dili ve Edebiyatı",
    grade: "11. Sınıf",
    category: "Ders Notu",
    description:
      "Cumhuriyet dönemi edebiyatının temel özellikleri, sanatçıları ve eserleri.",
    topics: [
      "Cumhuriyet",
      "Şiir",
      "Roman",
      "Hikâye"
    ],
    icon: "📖",
    views: 610,
    featured: true,
    date: "2026-08-08",
    pdf: "#"
  },

  {
    id: "fizik-11-manyetizma",
    title: "Manyetizma",
    subject: "Fizik",
    grade: "11. Sınıf",
    category: "Konu Özeti",
    description:
      "Mıknatıslar, manyetik alan ve manyetik kuvvetin temel özellikleri.",
    topics: [
      "Mıknatıs",
      "Manyetik alan",
      "Manyetik kuvvet"
    ],
    icon: "🧲",
    views: 450,
    featured: false,
    date: "2026-08-07",
    pdf: "#"
  },

  {
    id: "biyoloji-11-sistemler",
    title: "İnsan Fizyolojisi",
    subject: "Biyoloji",
    grade: "11. Sınıf",
    category: "Ders Notu",
    description:
      "İnsan vücudundaki sistemler ve bu sistemlerin temel görevleri.",
    topics: [
      "Sinir sistemi",
      "Dolaşım",
      "Solunum",
      "Sindirim"
    ],
    icon: "🧬",
    views: 520,
    featured: false,
    date: "2026-08-06",
    pdf: "#"
  },


  /* ===================================================
     12. SINIF
  =================================================== */

  {
    id: "mat-12-limit",
    title: "Limit",
    subject: "Matematik",
    grade: "12. Sınıf",
    category: "Ders Notu",
    description:
      "Limit kavramı, limit alma kuralları ve temel örnekler.",
    topics: [
      "Limit",
      "Sağdan limit",
      "Soldan limit",
      "Limit kuralları"
    ],
    icon: "📐",
    views: 910,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "mat-12-turev",
    title: "Türev",
    subject: "Matematik",
    grade: "12. Sınıf",
    category: "Konu Özeti",
    description:
      "Türev kavramı, türev alma kuralları ve temel uygulamalar.",
    topics: [
      "Türev",
      "Türev alma",
      "Türev kuralları",
      "Uygulamalar"
    ],
    icon: "∫",
    views: 780,
    featured: true,
    date: "2026-08-08",
    pdf: "#"
  },

  {
    id: "edebiyat-12-edebiyat",
    title: "Türk Edebiyatında Dönemler",
    subject: "Türk Dili ve Edebiyatı",
    grade: "12. Sınıf",
    category: "Ders Notu",
    description:
      "Türk edebiyatının önemli dönemleri, sanatçıları ve eserleri.",
    topics: [
      "Edebiyat dönemleri",
      "Sanatçılar",
      "Eserler"
    ],
    icon: "📖",
    views: 690,
    featured: true,
    date: "2026-08-07",
    pdf: "#"
  },

  {
    id: "fizik-12-dalga",
    title: "Dalgalar",
    subject: "Fizik",
    grade: "12. Sınıf",
    category: "Konu Özeti",
    description:
      "Dalgaların temel özellikleri, dalga hareketi ve dalga çeşitleri.",
    topics: [
      "Dalga",
      "Frekans",
      "Genlik",
      "Dalga boyu"
    ],
    icon: "🌊",
    views: 470,
    featured: false,
    date: "2026-08-06",
    pdf: "#"
  },

  {
    id: "kimya-12-organik",
    title: "Organik Kimya",
    subject: "Kimya",
    grade: "12. Sınıf",
    category: "Ders Notu",
    description:
      "Organik bileşiklerin temel özellikleri ve önemli bileşik türleri.",
    topics: [
      "Organik kimya",
      "Hidrokarbonlar",
      "Alkoller",
      "Organik bileşikler"
    ],
    icon: "🧪",
    views: 430,
    featured: false,
    date: "2026-08-05",
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
function dersCepPopulerNotlar(
  limit = 6
) {

  return [...DERSCEP_NOTLARI]
    .sort(
      (a, b) =>
        Number(b.views || 0) -
        Number(a.views || 0)
    )
    .slice(0, limit);

}


/**
 * Son eklenen notları getirir.
 */
function dersCepSonNotlar(
  limit = 6
) {

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
 *
 * Not sayısı olmasa bile
 * 5-12 arasındaki tüm sınıfları döndürür.
 */
function dersCepSiniflari() {

  return [
    "5. Sınıf",
    "6. Sınıf",
    "7. Sınıf",
    "8. Sınıf",
    "9. Sınıf",
    "10. Sınıf",
    "11. Sınıf",
    "12. Sınıf"
  ];

}


/**
 * Sınıf + ders birlikte filtreleme.
 */
function dersCepSinifVeDersNotlari(
  grade,
  subject
) {

  return DERSCEP_NOTLARI.filter(
    note =>
      note.grade === grade &&
      note.subject === subject
  );

}


/**
 * Arama.
 */
function dersCepNotAra(
  query
) {

  const q =
    String(query || "")
      .toLocaleLowerCase(
        "tr-TR"
      );

  return DERSCEP_NOTLARI.filter(
    note => {

      const text = [

        note.title,
        note.subject,
        note.grade,
        note.category,
        note.description,
        ...(note.topics || [])

      ]
        .join(" ")
        .toLocaleLowerCase(
          "tr-TR"
        );

      return text.includes(q);

    }
  );

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

window.dersCepSinifVeDersNotlari =
  dersCepSinifVeDersNotlari;

window.dersCepNotAra =
  dersCepNotAra;
```
