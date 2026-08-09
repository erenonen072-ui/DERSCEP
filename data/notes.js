"use strict";

/* =====================================================
   DERSCEP - MERKEZİ NOT VERİTABANI
   5. Sınıf → 12. Sınıf
===================================================== */

const DERSCEP_NOTLARI = [

  /* ===================================================
     5. SINIF - TÜRKÇE
  =================================================== */

  {
    id: "5-turkce-sozcukte-anlam",
    title: "Sözcükte Anlam",
    subject: "Türkçe",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Sözcüklerin gerçek, mecaz ve terim anlamlarını öğren.",
    topics: [
      "Gerçek anlam",
      "Mecaz anlam",
      "Terim anlam",
      "Eş anlamlı sözcükler",
      "Zıt anlamlı sözcükler"
    ],
    icon: "📖",
    views: 0,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-turkce-deyim-atasozu",
    title: "Deyimler ve Atasözleri",
    subject: "Türkçe",
    grade: "5. Sınıf",
    category: "Konu Özeti",
    description: "Deyim ve atasözlerinin özelliklerini ve aralarındaki farkları öğren.",
    topics: [
      "Deyim",
      "Atasözü",
      "Deyimlerin özellikleri",
      "Atasözlerinin özellikleri"
    ],
    icon: "💬",
    views: 0,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-turkce-paragrafta-anlam",
    title: "Paragrafta Anlam",
    subject: "Türkçe",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Paragrafın konusu, ana fikri ve yardımcı fikirlerini öğren.",
    topics: [
      "Paragraf",
      "Konu",
      "Ana fikir",
      "Yardımcı fikir",
      "Başlık"
    ],
    icon: "📝",
    views: 0,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-turkce-cumle-anlam",
    title: "Cümlede Anlam",
    subject: "Türkçe",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Cümlelerin anlam özelliklerini ve cümleler arasındaki ilişkileri öğren.",
    topics: [
      "Cümle",
      "Neden-sonuç",
      "Amaç-sonuç",
      "Koşul-sonuç",
      "Karşılaştırma"
    ],
    icon: "✏️",
    views: 0,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-turkce-fiiller",
    title: "Fiiller",
    subject: "Türkçe",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Fiilleri ve fiillerin cümledeki görevlerini öğren.",
    topics: [
      "Fiil",
      "İş fiili",
      "Oluş fiili",
      "Durum fiili"
    ],
    icon: "✍️",
    views: 0,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  /* ===================================================
     5. SINIF - MATEMATİK
  =================================================== */

  {
    id: "5-matematik-dogal-sayilar",
    title: "Doğal Sayılar",
    subject: "Matematik",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Doğal sayıları, basamakları ve sayıların karşılaştırılmasını öğren.",
    topics: [
      "Doğal sayılar",
      "Basamak değeri",
      "Sayı değeri",
      "Sayıları okuma",
      "Sayıları karşılaştırma"
    ],
    icon: "🔢",
    views: 0,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-matematik-dort-islem",
    title: "Doğal Sayılarla İşlemler",
    subject: "Matematik",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Doğal sayılarla toplama, çıkarma, çarpma ve bölme işlemlerini öğren.",
    topics: [
      "Toplama",
      "Çıkarma",
      "Çarpma",
      "Bölme",
      "İşlem önceliği"
    ],
    icon: "➗",
    views: 0,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-matematik-kesirler",
    title: "Kesirler",
    subject: "Matematik",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Kesirleri tanımayı, karşılaştırmayı ve kesirlerle temel işlemleri öğren.",
    topics: [
      "Kesir",
      "Birim kesir",
      "Bileşik kesir",
      "Tam sayılı kesir",
      "Kesirleri karşılaştırma"
    ],
    icon: "½",
    views: 0,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-matematik-ondalik-gosterim",
    title: "Ondalık Gösterim",
    subject: "Matematik",
    grade: "5. Sınıf",
    category: "Konu Özeti",
    description: "Ondalık gösterimleri ve kesirlerle ondalık gösterimler arasındaki ilişkiyi öğren.",
    topics: [
      "Ondalık gösterim",
      "Ondalık basamaklar",
      "Kesirden ondalığa geçiş",
      "Ondalık karşılaştırma"
    ],
    icon: "🔢",
    views: 0,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-matematik-yuzdeler",
    title: "Yüzdeler",
    subject: "Matematik",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Yüzde kavramını ve temel yüzde hesaplamalarını öğren.",
    topics: [
      "Yüzde",
      "Yüzde gösterimi",
      "Yüzde hesaplama",
      "Kesir-yüzde ilişkisi"
    ],
    icon: "％",
    views: 0,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-matematik-geometri",
    title: "Geometrik Şekiller",
    subject: "Matematik",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Temel geometrik şekilleri, açıları ve özelliklerini öğren.",
    topics: [
      "Nokta",
      "Doğru",
      "Doğru parçası",
      "Açı",
      "Üçgen",
      "Dörtgen"
    ],
    icon: "📐",
    views: 0,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  /* ===================================================
     5. SINIF - FEN BİLİMLERİ
  =================================================== */

  {
    id: "5-fen-dunya-ay-gunes",
    title: "Dünya, Güneş ve Ay",
    subject: "Fen Bilimleri",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Dünya, Güneş ve Ay'ın özelliklerini ve hareketlerini öğren.",
    topics: [
      "Dünya",
      "Güneş",
      "Ay",
      "Ay'ın hareketleri",
      "Güneş'in özellikleri"
    ],
    icon: "🌍",
    views: 0,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-fen-kuvvet",
    title: "Kuvvet ve Kuvvetin Ölçülmesi",
    subject: "Fen Bilimleri",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Kuvvetin özelliklerini ve kuvvetin nasıl ölçüldüğünü öğren.",
    topics: [
      "Kuvvet",
      "Kuvvetin büyüklüğü",
      "Dinamometre",
      "Newton"
    ],
    icon: "💪",
    views: 0,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-fen-madde",
    title: "Maddenin Ölçülebilir Özellikleri",
    subject: "Fen Bilimleri",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Maddenin kütle ve hacim gibi ölçülebilir özelliklerini öğren.",
    topics: [
      "Madde",
      "Kütle",
      "Hacim",
      "Ölçme"
    ],
    icon: "⚗️",
    views: 0,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-fen-isik",
    title: "Işık ve Işığın Yayılması",
    subject: "Fen Bilimleri",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Işığın yayılması, ışık kaynakları ve ışığın maddelerle etkileşimini öğren.",
    topics: [
      "Işık",
      "Işık kaynağı",
      "Işığın yayılması",
      "Saydam maddeler",
      "Opak maddeler"
    ],
    icon: "💡",
    views: 0,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-fen-madde-degisimi",
    title: "Maddenin Hâl Değişimi",
    subject: "Fen Bilimleri",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Maddenin katı, sıvı ve gaz hâlleri ile hâl değişimlerini öğren.",
    topics: [
      "Katı",
      "Sıvı",
      "Gaz",
      "Erime",
      "Donma",
      "Buharlaşma",
      "Yoğuşma"
    ],
    icon: "🧊",
    views: 0,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  /* ===================================================
     5. SINIF - SOSYAL BİLGİLER
  =================================================== */

  {
    id: "5-sosyal-birey-toplum",
    title: "Birey ve Toplum",
    subject: "Sosyal Bilgiler",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Bireyin toplum içindeki yeri, hakları ve sorumlulukları.",
    topics: [
      "Birey",
      "Toplum",
      "Hak",
      "Sorumluluk",
      "Roller"
    ],
    icon: "👥",
    views: 0,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-sosyal-kultur",
    title: "Kültür ve Miras",
    subject: "Sosyal Bilgiler",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Kültürümüz, tarihî mirasımız ve geçmişten günümüze toplum hayatı.",
    topics: [
      "Kültür",
      "Miras",
      "Tarih",
      "Gelenek",
      "Millî kültür"
    ],
    icon: "🏛️",
    views: 0,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-sosyal-insanlar-yerler",
    title: "İnsanlar, Yerler ve Çevreler",
    subject: "Sosyal Bilgiler",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Yaşadığımız çevreyi, yerleşim yerlerini ve doğal çevreyi öğren.",
    topics: [
      "Çevre",
      "Yerleşme",
      "Doğal çevre",
      "Beşerî çevre"
    ],
    icon: "🗺️",
    views: 0,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  /* ===================================================
     5. SINIF - İNGİLİZCE
  =================================================== */

  {
    id: "5-ingilizce-hello",
    title: "Hello",
    subject: "İngilizce",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "İngilizcede selamlaşma, tanışma ve temel kişisel bilgileri öğren.",
    topics: [
      "Greetings",
      "Introducing yourself",
      "Names",
      "Countries",
      "Nationalities"
    ],
    icon: "🇬🇧",
    views: 0,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-ingilizce-my-town",
    title: "My Town",
    subject: "İngilizce",
    grade: "5. Sınıf",
    category: "Konu Özeti",
    description: "Şehirdeki yerleri ve bu yerleri tarif etmeyi öğren.",
    topics: [
      "Town",
      "Places",
      "There is",
      "There are",
      "Directions"
    ],
    icon: "🇬🇧",
    views: 0,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  /* ===================================================
     5. SINIF - DİN KÜLTÜRÜ
  =================================================== */

  {
    id: "5-din-allah-inanci",
    title: "Allah İnancı",
    subject: "Din Kültürü",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Allah inancı ve Allah'ın sıfatları hakkında temel bilgiler.",
    topics: [
      "Allah inancı",
      "Allah'ın sıfatları",
      "Yaratıcı",
      "Şükür"
    ],
    icon: "☪️",
    views: 0,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "5-din-ibadet",
    title: "İbadetler",
    subject: "Din Kültürü",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "İbadet kavramı ve temel ibadetler hakkında bilgiler.",
    topics: [
      "İbadet",
      "Namaz",
      "Oruç",
      "Dua",
      "Zekât"
    ],
    icon: "☪️",
    views: 0,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  }

];

/* =====================================================
   YARDIMCI FONKSİYONLAR
===================================================== */

function dersCepNotGetir(id) {
  return DERSCEP_NOTLARI.find(function(note) {
    return note.id === id;
  });
}

function dersCepSinifNotlari(grade) {
  return DERSCEP_NOTLARI.filter(function(note) {
    return note.grade === grade;
  });
}

function dersCepDersNotlari(subject) {
  return DERSCEP_NOTLARI.filter(function(note) {
    return note.subject === subject;
  });
}

function dersCepOneCikanNotlar() {
  return DERSCEP_NOTLARI.filter(function(note) {
    return note.featured === true;
  });
}

function dersCepPopulerNotlar(limit) {
  limit = limit || 6;

  return DERSCEP_NOTLARI
    .slice()
    .sort(function(a, b) {
      return Number(b.views || 0) - Number(a.views || 0);
    })
    .slice(0, limit);
}

function dersCepSonNotlar(limit) {
  limit = limit || 6;

  return DERSCEP_NOTLARI
    .slice()
    .sort(function(a, b) {
      return new Date(b.date) - new Date(a.date);
    })
    .slice(0, limit);
}

function dersCepDersleri() {
  return Array.from(
    new Set(
      DERSCEP_NOTLARI.map(function(note) {
        return note.subject;
      })
    )
  );
}

function dersCepSiniflari() {
  return Array.from(
    new Set(
      DERSCEP_NOTLARI.map(function(note) {
        return note.grade;
      })
    )
  );
}

/* =====================================================
   GLOBAL
===================================================== */

window.DERSCEP_NOTLARI = DERSCEP_NOTLARI;
window.dersCepNotGetir = dersCepNotGetir;
window.dersCepSinifNotlari = dersCepSinifNotlari;
window.dersCepDersNotlari = dersCepDersNotlari;
window.dersCepOneCikanNotlar = dersCepOneCikanNotlar;
window.dersCepPopulerNotlar = dersCepPopulerNotlar;
window.dersCepSonNotlar = dersCepSonNotlar;
window.dersCepDersleri = dersCepDersleri;
window.dersCepSiniflari = dersCepSiniflari;

console.log(
  "DersCep notları yüklendi:",
  DERSCEP_NOTLARI.length
);
/* =====================================================
   DERSCEP - NOTES DATA
   2. PARÇA
   6, 7 ve 8. SINIFLAR
===================================================== */

/* =========================
   6. SINIF - MATEMATİK
========================= */

DERSCEP_NOTLARI.push(
  {
    id: "6-matematik-dogal-sayilar",
    title: "Doğal Sayılar ve İşlemler",
    subject: "Matematik",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Doğal sayılar, işlem önceliği ve temel işlemler.",
    topics: [
      "Doğal sayılar",
      "İşlem önceliği",
      "Üslü ifadeler",
      "Dağılma özelliği"
    ],
    icon: "📐",
    views: 520,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "6-matematik-carpanlar-katlar",
    title: "Çarpanlar ve Katlar",
    subject: "Matematik",
    grade: "6. Sınıf",
    category: "Konu Özeti",
    description: "Çarpan ve kat kavramları ile bölünebilme ilişkileri.",
    topics: [
      "Çarpan",
      "Kat",
      "Asal sayılar",
      "Bölünebilme"
    ],
    icon: "🔢",
    views: 470,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "6-matematik-kesirler",
    title: "Kesirler",
    subject: "Matematik",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Kesir çeşitleri ve kesirlerle temel işlemler.",
    topics: [
      "Kesir",
      "Bileşik kesir",
      "Tam sayılı kesir",
      "Kesirlerle işlemler"
    ],
    icon: "➗",
    views: 430,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "6-matematik-oran",
    title: "Oran",
    subject: "Matematik",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Oran kavramı ve oran problemlerinin çözümü.",
    topics: [
      "Oran",
      "Birim oran",
      "Oran problemleri"
    ],
    icon: "⚖️",
    views: 390,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "6-matematik-cebirsel-ifadeler",
    title: "Cebirsel İfadeler",
    subject: "Matematik",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Cebirsel ifadelerin temel özellikleri ve işlemleri.",
    topics: [
      "Cebirsel ifade",
      "Terim",
      "Katsayı",
      "Değişken"
    ],
    icon: "📊",
    views: 360,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "6-matematik-veri",
    title: "Veri Toplama ve Değerlendirme",
    subject: "Matematik",
    grade: "6. Sınıf",
    category: "Konu Özeti",
    description: "Verilerin toplanması, gösterilmesi ve yorumlanması.",
    topics: [
      "Veri",
      "Sıklık",
      "Sütun grafiği",
      "Veri analizi"
    ],
    icon: "📈",
    views: 310,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  }
);


/* =========================
   6. SINIF - TÜRKÇE
========================= */

DERSCEP_NOTLARI.push(
  {
    id: "6-turkce-sozcukte-anlam",
    title: "Sözcükte Anlam",
    subject: "Türkçe",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Sözcüklerin anlam özellikleri ve anlam ilişkileri.",
    topics: [
      "Gerçek anlam",
      "Mecaz anlam",
      "Terim anlam",
      "Eş anlam",
      "Zıt anlam"
    ],
    icon: "📖",
    views: 510,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "6-turkce-cumlede-anlam",
    title: "Cümlede Anlam",
    subject: "Türkçe",
    grade: "6. Sınıf",
    category: "Konu Özeti",
    description: "Cümlelerin anlam özellikleri ve yorumlanması.",
    topics: [
      "Neden-sonuç",
      "Amaç-sonuç",
      "Koşul",
      "Karşılaştırma"
    ],
    icon: "💬",
    views: 480,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "6-turkce-paragraf",
    title: "Paragrafta Anlam",
    subject: "Türkçe",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Paragrafın konusu, ana fikri ve yardımcı fikirleri.",
    topics: [
      "Konu",
      "Ana fikir",
      "Yardımcı fikir",
      "Başlık"
    ],
    icon: "📝",
    views: 620,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "6-turkce-isimler",
    title: "İsimler",
    subject: "Türkçe",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "İsimlerin özellikleri ve çeşitleri.",
    topics: [
      "İsim",
      "Özel isim",
      "Cins isim",
      "Tekil",
      "Çoğul"
    ],
    icon: "✍️",
    views: 340,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "6-turkce-sifatlar",
    title: "Sıfatlar",
    subject: "Türkçe",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "İsimleri niteleyen ve belirten sözcükler.",
    topics: [
      "Sıfat",
      "Niteleme sıfatı",
      "Belirtme sıfatı"
    ],
    icon: "✏️",
    views: 290,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  }
);


/* =========================
   6. SINIF - FEN BİLİMLERİ
========================= */

DERSCEP_NOTLARI.push(
  {
    id: "6-fen-gunes-sistemi",
    title: "Güneş Sistemi ve Tutulmalar",
    subject: "Fen Bilimleri",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Güneş sistemi, gezegenler ve tutulmalar.",
    topics: [
      "Güneş sistemi",
      "Gezegenler",
      "Güneş tutulması",
      "Ay tutulması"
    ],
    icon: "🌍",
    views: 470,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "6-fen-vucudumuzdaki-sistemler",
    title: "Vücudumuzdaki Sistemler",
    subject: "Fen Bilimleri",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Vücudumuzdaki temel sistemler ve görevleri.",
    topics: [
      "Destek ve hareket",
      "Sindirim",
      "Dolaşım",
      "Solunum"
    ],
    icon: "🫀",
    views: 440,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "6-fen-kuvvet-hareket",
    title: "Kuvvet ve Hareket",
    subject: "Fen Bilimleri",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Kuvvetin özellikleri ve hareket üzerindeki etkileri.",
    topics: [
      "Kuvvet",
      "Bileşke kuvvet",
      "Dengelenmiş kuvvet",
      "Hareket"
    ],
    icon: "⚡",
    views: 390,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "6-fen-madde-isi",
    title: "Madde ve Isı",
    subject: "Fen Bilimleri",
    grade: "6. Sınıf",
    category: "Konu Özeti",
    description: "Maddenin tanecikli yapısı ve ısı ile ilişkisi.",
    topics: [
      "Madde",
      "Isı",
      "Sıcaklık",
      "Tanecikli yapı"
    ],
    icon: "🔥",
    views: 350,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "6-fen-ses",
    title: "Ses ve Özellikleri",
    subject: "Fen Bilimleri",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Sesin oluşumu, yayılması ve özellikleri.",
    topics: [
      "Ses",
      "Titreşim",
      "Sesin yayılması",
      "Sesin sürati"
    ],
    icon: "🔊",
    views: 300,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  }
);


/* =========================
   6. SINIF - SOSYAL BİLGİLER
========================= */

DERSCEP_NOTLARI.push(
  {
    id: "6-sosyal-birey-toplum",
    title: "Birey ve Toplum",
    subject: "Sosyal Bilgiler",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Bireyin toplum içindeki yeri ve sorumlulukları.",
    topics: [
      "Birey",
      "Toplum",
      "Hak",
      "Sorumluluk"
    ],
    icon: "👥",
    views: 270,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "6-sosyal-tarihimiz",
    title: "Türklerin Tarih Yolculuğu",
    subject: "Sosyal Bilgiler",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Türklerin tarih boyunca kurduğu devletler ve kültür.",
    topics: [
      "İlk Türk devletleri",
      "Türk kültürü",
      "Göçler",
      "Devletler"
    ],
    icon: "🏛️",
    views: 320,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "6-sosyal-yeryuzu",
    title: "Yeryüzünde Yaşam",
    subject: "Sosyal Bilgiler",
    grade: "6. Sınıf",
    category: "Konu Özeti",
    description: "Dünya üzerindeki doğal ve beşerî özellikler.",
    topics: [
      "Harita",
      "İklim",
      "Nüfus",
      "Yer şekilleri"
    ],
    icon: "🌎",
    views: 260,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  }
);


/* =========================
   7. SINIF - MATEMATİK
========================= */

DERSCEP_NOTLARI.push(
  {
    id: "7-matematik-tam-sayilar",
    title: "Tam Sayılarla İşlemler",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Tam sayılarla toplama, çıkarma, çarpma ve bölme.",
    topics: [
      "Tam sayılar",
      "Toplama",
      "Çıkarma",
      "Çarpma",
      "Bölme"
    ],
    icon: "➗",
    views: 540,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "7-matematik-rasyonel-sayilar",
    title: "Rasyonel Sayılar",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Rasyonel sayıların gösterimi, sıralanması ve işlemleri.",
    topics: [
      "Rasyonel sayı",
      "Kesir",
      "Sıralama",
      "İşlemler"
    ],
    icon: "🔢",
    views: 620,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "7-matematik-cebirsel",
    title: "Cebirsel İfadeler",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Cebirsel ifadeler ve cebirsel işlemler.",
    topics: [
      "Cebirsel ifade",
      "Terim",
      "Katsayı",
      "Benzer terimler"
    ],
    icon: "📊",
    views: 410,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "7-matematik-esitlik-denklem",
    title: "Eşitlik ve Denklem",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Birinci dereceden denklemler ve problem çözümü.",
    topics: [
      "Eşitlik",
      "Denklem",
      "Bilinmeyen",
      "Denklem çözme"
    ],
    icon: "🧮",
    views: 460,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "7-matematik-oran-oranti",
    title: "Oran ve Orantı",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Konu Özeti",
    description: "Oran, orantı ve orantı problemleri.",
    topics: [
      "Oran",
      "Orantı",
      "Doğru orantı",
      "Ters orantı"
    ],
    icon: "⚖️",
    views: 390,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "7-matematik-yuzdeler",
    title: "Yüzdeler",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Yüzde hesaplamaları ve yüzde problemleri.",
    topics: [
      "Yüzde",
      "İndirim",
      "Artış",
      "Yüzde problemleri"
    ],
    icon: "💯",
    views: 430,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  }
);


/* =========================
   7. SINIF - FEN BİLİMLERİ
========================= */

DERSCEP_NOTLARI.push(
  {
    id: "7-fen-hucre",
    title: "Hücre ve Bölünmeler",
    subject: "Fen Bilimleri",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Hücre yapısı ve hücre bölünmeleri.",
    topics: [
      "Hücre",
      "Mitoz",
      "Mayoz",
      "Kromozom"
    ],
    icon: "🧬",
    views: 500,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "7-fen-kuvvet-enerji",
    title: "Kuvvet ve Enerji",
    subject: "Fen Bilimleri",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Kuvvet, iş, enerji ve enerji dönüşümleri.",
    topics: [
      "Kuvvet",
      "İş",
      "Enerji",
      "Enerji dönüşümü"
    ],
    icon: "⚡",
    views: 580,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "7-fen-saf-madde",
    title: "Saf Madde ve Karışımlar",
    subject: "Fen Bilimleri",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Saf maddeler, elementler, bileşikler ve karışımlar.",
    topics: [
      "Element",
      "Bileşik",
      "Karışım",
      "Saf madde"
    ],
    icon: "🧪",
    views: 420,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "7-fen-atom",
    title: "Atomun Yapısı",
    subject: "Fen Bilimleri",
    grade: "7. Sınıf",
    category: "Konu Özeti",
    description: "Atomun temel parçacıkları ve yapısı.",
    topics: [
      "Atom",
      "Proton",
      "Nötron",
      "Elektron"
    ],
    icon: "⚛️",
    views: 360,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "7-fen-elektrik",
    title: "Elektrik Devreleri",
    subject: "Fen Bilimleri",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Elektrik devre elemanları ve devrelerin çalışma prensibi.",
    topics: [
      "Elektrik devresi",
      "Akım",
      "Pil",
      "Ampul",
      "Anahtar"
    ],
    icon: "💡",
    views: 450,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  }
);


/* =========================
   8. SINIF - MATEMATİK
========================= */

DERSCEP_NOTLARI.push(
  {
    id: "8-matematik-carpanlar-katlar",
    title: "Çarpanlar ve Katlar",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Çarpanlar, katlar, asal sayılar ve EBOB-EKOK.",
    topics: [
      "Çarpan",
      "Kat",
      "Asal sayı",
      "EBOB",
      "EKOK"
    ],
    icon: "🔢",
    views: 650,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-matematik-uslu-ifadeler",
    title: "Üslü İfadeler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Üslü ifadelerin kuralları ve işlemleri.",
    topics: [
      "Üs",
      "Taban",
      "Üs kuralları",
      "Bilimsel gösterim"
    ],
    icon: "📐",
    views: 720,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-matematik-karekoklu",
    title: "Kareköklü İfadeler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Kareköklü ifadeler ve kareköklü ifadelerle işlemler.",
    topics: [
      "Karekök",
      "Kök dışına çıkarma",
      "Kök içine alma",
      "Köklü işlemler"
    ],
    icon: "√",
    views: 690,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-matematik-veri-analizi",
    title: "Veri Analizi",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Konu Özeti",
    description: "Grafiklerin okunması, yorumlanması ve veri analizi.",
    topics: [
      "Sütun grafiği",
      "Çizgi grafiği",
      "Daire grafiği",
      "Veri analizi"
    ],
    icon: "📊",
    views: 430,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-matematik-olasilik",
    title: "Basit Olayların Olma Olasılığı",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Olasılık kavramı ve basit olayların olasılıkları.",
    topics: [
      "Olasılık",
      "Örnek uzay",
      "Olay",
      "Olasılık hesaplama"
    ],
    icon: "🎲",
    views: 520,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  }
);


/* =========================
   8. SINIF - FEN BİLİMLERİ
========================= */

DERSCEP_NOTLARI.push(
  {
    id: "8-fen-mevsimler",
    title: "Mevsimler ve İklim",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Mevsimlerin oluşumu ve iklim biliminin temel kavramları.",
    topics: [
      "Mevsimler",
      "Eksen eğikliği",
      "İklim",
      "Hava olayları"
    ],
    icon: "🌍",
    views: 610,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-fen-dna-genetik",
    title: "DNA ve Genetik Kod",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "DNA, gen, kromozom ve kalıtımın temel kavramları.",
    topics: [
      "DNA",
      "Gen",
      "Kromozom",
      "Kalıtım",
      "Nükleotid"
    ],
    icon: "🧬",
    views: 780,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-fen-basinc",
    title: "Basınç",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Katı, sıvı ve gaz basıncı ile basınç uygulamaları.",
    topics: [
      "Basınç",
      "Katı basıncı",
      "Sıvı basıncı",
      "Gaz basıncı"
    ],
    icon: "🧪",
    views: 490,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-fen-madde-endustri",
    title: "Madde ve Endüstri",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Periyodik sistem, kimyasal tepkimeler ve asit-bazlar.",
    topics: [
      "Periyodik sistem",
      "Kimyasal tepkime",
      "Asit",
      "Baz",
      "pH"
    ],
    icon: "⚗️",
    views: 550,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-fen-enerji-donusumleri",
    title: "Enerji Dönüşümleri ve Çevre Bilimi",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Konu Özeti",
    description: "Enerji dönüşümleri, besin zinciri ve çevre sorunları.",
    topics: [
      "Enerji dönüşümü",
      "Besin zinciri",
      "Ekosistem",
      "Çevre sorunları"
    ],
    icon: "🌱",
    views: 410,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  }
);
/* =====================================================
   DERSCEP - NOTES DATA
   PARÇA 2
   7. SINIF + 8. SINIF
===================================================== */

  /* =====================================================
     7. SINIF MATEMATİK
  ===================================================== */

  {
    id: "7-matematik-tam-sayilar",
    title: "Tam Sayılarla İşlemler",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Tam sayılarla toplama, çıkarma, çarpma ve bölme işlemleri.",
    topics: [
      "Tam sayılar",
      "Toplama",
      "Çıkarma",
      "Çarpma",
      "Bölme"
    ],
    icon: "📐",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-matematik-rasyonel-sayilar",
    title: "Rasyonel Sayılar",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Rasyonel sayıların gösterimi, karşılaştırılması ve işlemleri.",
    topics: [
      "Rasyonel sayılar",
      "Kesirler",
      "Sıralama",
      "Karşılaştırma",
      "İşlemler"
    ],
    icon: "🔢",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-matematik-rasyonel-sayilarla-islemler",
    title: "Rasyonel Sayılarla İşlemler",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Rasyonel sayılarla dört işlem ve işlem önceliği.",
    topics: [
      "Toplama",
      "Çıkarma",
      "Çarpma",
      "Bölme",
      "İşlem önceliği"
    ],
    icon: "➗",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-matematik-cebirsel-ifadeler",
    title: "Cebirsel İfadeler",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Cebirsel ifadeler, terimler ve katsayılar.",
    topics: [
      "Cebirsel ifade",
      "Terim",
      "Katsayı",
      "Benzer terimler"
    ],
    icon: "📊",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-matematik-esitlik-denklem",
    title: "Eşitlik ve Denklem",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Birinci dereceden bir bilinmeyenli denklemlerin çözümü.",
    topics: [
      "Eşitlik",
      "Denklem",
      "Bilinmeyen",
      "Çözüm"
    ],
    icon: "🧮",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-matematik-oran-oranti",
    title: "Oran ve Orantı",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Oran, orantı ve doğru orantı problemleri.",
    topics: [
      "Oran",
      "Orantı",
      "Doğru orantı",
      "Orantı problemleri"
    ],
    icon: "⚖️",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-matematik-yuzdeler",
    title: "Yüzdeler",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Konu Özeti",
    description: "Yüzde hesaplama ve yüzde problemleri.",
    topics: [
      "Yüzde",
      "Yüzde artış",
      "Yüzde azalış",
      "Yüzde problemleri"
    ],
    icon: "💯",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-matematik-dogrular-acilar",
    title: "Doğrular ve Açılar",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Doğrular, açılar ve açı ilişkileri.",
    topics: [
      "Doğru",
      "Açı",
      "Tümler açılar",
      "Bütünler açılar"
    ],
    icon: "📏",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-matematik-cokgenler",
    title: "Çokgenler",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Çokgenlerin özellikleri ve iç açıları.",
    topics: [
      "Çokgen",
      "Üçgen",
      "Dörtgen",
      "İç açılar"
    ],
    icon: "🔺",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-matematik-cember-daire",
    title: "Çember ve Daire",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Çember ve dairenin temel özellikleri.",
    topics: [
      "Çember",
      "Daire",
      "Yarıçap",
      "Çap",
      "Alan"
    ],
    icon: "⭕",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  /* =====================================================
     7. SINIF FEN BİLİMLERİ
  ===================================================== */

  {
    id: "7-fen-uzay-arastirmalari",
    title: "Uzay Araştırmaları",
    subject: "Fen Bilimleri",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Uzay araştırmaları, uzay teknolojileri ve gök cisimleri.",
    topics: [
      "Uzay",
      "Uzay araştırmaları",
      "Uydu",
      "Uzay teknolojileri"
    ],
    icon: "🚀",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-fen-hucre",
    title: "Hücre ve Bölünmeler",
    subject: "Fen Bilimleri",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Hücrenin yapısı ve hücre bölünmelerinin temel özellikleri.",
    topics: [
      "Hücre",
      "Mitoz",
      "Mayoz",
      "Kromozom"
    ],
    icon: "🧬",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-fen-kuvvet-enerji",
    title: "Kuvvet ve Enerji",
    subject: "Fen Bilimleri",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Kuvvet, iş, enerji ve enerji dönüşümleri.",
    topics: [
      "Kuvvet",
      "İş",
      "Enerji",
      "Kinetik enerji",
      "Potansiyel enerji"
    ],
    icon: "⚡",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-fen-saf-madde-karisim",
    title: "Saf Madde ve Karışımlar",
    subject: "Fen Bilimleri",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Saf maddeler, karışımlar ve karışımların ayrılması.",
    topics: [
      "Saf madde",
      "Element",
      "Bileşik",
      "Karışım",
      "Ayırma yöntemleri"
    ],
    icon: "🧪",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-fen-isik",
    title: "Işığın Madde ile Etkileşimi",
    subject: "Fen Bilimleri",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Işığın yansıması, kırılması ve maddelerle etkileşimi.",
    topics: [
      "Işık",
      "Yansıma",
      "Kırılma",
      "Ayna",
      "Mercek"
    ],
    icon: "💡",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-fen-canlilarda-ureme",
    title: "Canlılarda Üreme, Büyüme ve Gelişme",
    subject: "Fen Bilimleri",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Canlılarda üreme, büyüme ve gelişme süreçleri.",
    topics: [
      "Üreme",
      "Büyüme",
      "Gelişme",
      "Eşeyli üreme",
      "Eşeysiz üreme"
    ],
    icon: "🌱",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-fen-elektrik",
    title: "Elektrik Devreleri",
    subject: "Fen Bilimleri",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Elektrik devreleri, ampul parlaklığı ve elektrik enerjisi.",
    topics: [
      "Elektrik devresi",
      "Akım",
      "Ampul",
      "Pil",
      "Devre elemanları"
    ],
    icon: "🔌",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  /* =====================================================
     7. SINIF TÜRKÇE
  ===================================================== */

  {
    id: "7-turkce-sozcukte-anlam",
    title: "Sözcükte Anlam",
    subject: "Türkçe",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Sözcüklerin anlam özellikleri ve anlam ilişkileri.",
    topics: [
      "Gerçek anlam",
      "Mecaz anlam",
      "Terim anlam",
      "Eş anlam",
      "Zıt anlam"
    ],
    icon: "📖",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-turkce-cumlede-anlam",
    title: "Cümlede Anlam",
    subject: "Türkçe",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Cümlelerin anlam özellikleri ve anlam ilişkileri.",
    topics: [
      "Neden-sonuç",
      "Amaç-sonuç",
      "Koşul-sonuç",
      "Öznel",
      "Nesnel"
    ],
    icon: "✍️",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-turkce-paragraf",
    title: "Paragrafta Anlam",
    subject: "Türkçe",
    grade: "7. Sınıf",
    category: "Konu Özeti",
    description: "Paragrafın konusu, ana fikri ve yardımcı fikirleri.",
    topics: [
      "Paragraf",
      "Konu",
      "Ana fikir",
      "Yardımcı fikir"
    ],
    icon: "📚",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-turkce-fiiller",
    title: "Fiiller",
    subject: "Türkçe",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Fiillerin anlam ve yapı özellikleri.",
    topics: [
      "Fiil",
      "İş fiili",
      "Durum fiili",
      "Oluş fiili"
    ],
    icon: "📝",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-turkce-fiilde-yapi",
    title: "Fiilde Yapı",
    subject: "Türkçe",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Basit, türemiş ve birleşik fiiller.",
    topics: [
      "Basit fiil",
      "Türemiş fiil",
      "Birleşik fiil"
    ],
    icon: "🖊️",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  /* =====================================================
     7. SINIF SOSYAL BİLGİLER
  ===================================================== */

  {
    id: "7-sosyal-birey-toplum",
    title: "Birey ve Toplum",
    subject: "Sosyal Bilgiler",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Bireyin toplum içindeki yeri, roller ve iletişim.",
    topics: [
      "Birey",
      "Toplum",
      "İletişim",
      "Haklar"
    ],
    icon: "👥",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-sosyal-kultur-miras",
    title: "Kültür ve Miras",
    subject: "Sosyal Bilgiler",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Türk kültürü, tarihî miras ve medeniyetler.",
    topics: [
      "Kültür",
      "Miras",
      "Osmanlı",
      "Türk tarihi"
    ],
    icon: "🏛️",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-sosyal-insanlar-yerler",
    title: "İnsanlar, Yerler ve Çevreler",
    subject: "Sosyal Bilgiler",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Nüfus, yerleşme ve insanların çevre ile ilişkisi.",
    topics: [
      "Nüfus",
      "Yerleşme",
      "Çevre",
      "Göç"
    ],
    icon: "🌍",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "7-sosyal-bilim-teknoloji",
    title: "Bilim, Teknoloji ve Toplum",
    subject: "Sosyal Bilgiler",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Bilim ve teknolojinin toplum hayatındaki etkileri.",
    topics: [
      "Bilim",
      "Teknoloji",
      "Buluş",
      "Dijital yaşam"
    ],
    icon: "💻",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  /* =====================================================
     8. SINIF MATEMATİK
  ===================================================== */

  {
    id: "8-matematik-carpanlar-katlar",
    title: "Çarpanlar ve Katlar",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Çarpanlar, katlar, asal sayılar ve ortak bölenler.",
    topics: [
      "Çarpan",
      "Kat",
      "Asal sayılar",
      "EBOB",
      "EKOK"
    ],
    icon: "📐",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-matematik-uslu-ifadeler",
    title: "Üslü İfadeler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Üslü ifadelerin kuralları ve işlemleri.",
    topics: [
      "Üslü ifade",
      "Üs",
      "Taban",
      "Üs kuralları"
    ],
    icon: "🔢",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-matematik-karekoklu",
    title: "Kareköklü İfadeler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Kareköklü ifadeler ve köklü sayılarla işlemler.",
    topics: [
      "Karekök",
      "Köklü ifadeler",
      "Kök dışına çıkarma",
      "Sadeleştirme"
    ],
    icon: "√",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-matematik-veri-analizi",
    title: "Veri Analizi",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Verilerin tablo ve grafiklerle gösterilmesi ve yorumlanması.",
    topics: [
      "Veri",
      "Sütun grafiği",
      "Çizgi grafiği",
      "Daire grafiği"
    ],
    icon: "📊",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-matematik-olasilik",
    title: "Basit Olayların Olma Olasılığı",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Basit olayların olasılığını hesaplama.",
    topics: [
      "Olasılık",
      "Olası durum",
      "Kesin olay",
      "İmkânsız olay"
    ],
    icon: "🎲",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-matematik-cebirsel-ifadeler",
    title: "Cebirsel İfadeler ve Özdeşlikler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Cebirsel ifadeler ve temel özdeşlikler.",
    topics: [
      "Cebirsel ifadeler",
      "Özdeşlik",
      "Çarpanlara ayırma",
      "Dağılma özelliği"
    ],
    icon: "🧮",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-matematik-dogrusal-denklemler",
    title: "Doğrusal Denklemler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Doğrusal denklemler ve koordinat sistemi.",
    topics: [
      "Denklem",
      "Doğrusal denklem",
      "Koordinat sistemi",
      "Grafik"
    ],
    icon: "📈",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-matematik-esitsizlikler",
    title: "Eşitsizlikler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Birinci dereceden bir bilinmeyenli eşitsizlikler.",
    topics: [
      "Eşitsizlik",
      "Bilinmeyen",
      "Sayı doğrusu",
      "Çözüm kümesi"
    ],
    icon: "⚖️",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-matematik-ucgenler",
    title: "Üçgenler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Üçgenlerin temel özellikleri ve üçgenlerde açı ilişkileri.",
    topics: [
      "Üçgen",
      "Açı",
      "Kenar",
      "Pisagor bağıntısı"
    ],
    icon: "🔺",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-matematik-eslik-benzerlik",
    title: "Eşlik ve Benzerlik",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Geometrik şekillerde eşlik ve benzerlik ilişkileri.",
    topics: [
      "Eşlik",
      "Benzerlik",
      "Benzerlik oranı",
      "Geometrik şekiller"
    ],
    icon: "📏",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  /* =====================================================
     8. SINIF FEN BİLİMLERİ
  ===================================================== */

  {
    id: "8-fen-mevsimler-iklim",
    title: "Mevsimler ve İklim",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Mevsimlerin oluşumu ve iklim ile hava olayları.",
    topics: [
      "Mevsimler",
      "İklim",
      "Hava olayları",
      "Dünya'nın hareketleri"
    ],
    icon: "🌍",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-fen-dna-genetik",
    title: "DNA ve Genetik Kod",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "DNA'nın yapısı, genetik bilgiler ve kalıtım.",
    topics: [
      "DNA",
      "Gen",
      "Kromozom",
      "Kalıtım",
      "Nükleotid"
    ],
    icon: "🧬",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-fen-basinc",
    title: "Basınç",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Katı, sıvı ve gaz basıncının temel özellikleri.",
    topics: [
      "Basınç",
      "Katı basıncı",
      "Sıvı basıncı",
      "Gaz basıncı"
    ],
    icon: "🌡️",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-fen-madde-endustri",
    title: "Madde ve Endüstri",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Kimyasal tepkimeler, asitler, bazlar ve endüstri.",
    topics: [
      "Kimyasal tepkime",
      "Asit",
      "Baz",
      "pH",
      "Kimya endüstrisi"
    ],
    icon: "🧪",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-fen-enerji-donusumleri",
    title: "Enerji Dönüşümleri ve Çevre Bilimi",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Besin zinciri, enerji dönüşümleri ve çevre sorunları.",
    topics: [
      "Enerji",
      "Besin zinciri",
      "Ekosistem",
      "Çevre sorunları"
    ],
    icon: "🌱",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-fen-elektrik",
    title: "Elektrik Yükleri ve Elektrik Enerjisi",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Elektrik yükleri, elektrik enerjisi ve devreler.",
    topics: [
      "Elektrik yükü",
      "Elektrik enerjisi",
      "Elektrik devresi",
      "Direnç"
    ],
    icon: "⚡",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  /* =====================================================
     8. SINIF TÜRKÇE
  ===================================================== */

  {
    id: "8-turkce-sozcukte-anlam",
    title: "Sözcükte Anlam",
    subject: "Türkçe",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Sözcüklerin anlam özellikleri ve anlam ilişkileri.",
    topics: [
      "Gerçek anlam",
      "Mecaz anlam",
      "Terim anlam",
      "Eş anlam",
      "Zıt anlam"
    ],
    icon: "📖",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-turkce-cumlede-anlam",
    title: "Cümlede Anlam",
    subject: "Türkçe",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Cümlelerin anlam özellikleri ve düşünce ilişkileri.",
    topics: [
      "Neden-sonuç",
      "Amaç-sonuç",
      "Koşul-sonuç",
      "Öznel",
      "Nesnel"
    ],
    icon: "✍️",
    views: 100,
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
    description: "Paragraf sorularını çözme ve paragrafın anlam özellikleri.",
    topics: [
      "Ana fikir",
      "Yardımcı fikir",
      "Konu",
      "Başlık",
      "Paragraf"
    ],
    icon: "📚",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-turkce-fiilimsiler",
    title: "Fiilimsiler",
    subject: "Türkçe",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "İsim-fiil, sıfat-fiil ve zarf-fiil konuları.",
    topics: [
      "İsim-fiil",
      "Sıfat-fiil",
      "Zarf-fiil",
      "Fiilimsi ekleri"
    ],
    icon: "📝",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },

  {
    id: "8-turkce-cumlenin-ogeleri",
    title: "Cümlenin Ögeleri",
    subject: "Türkçe",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Cümlenin temel ve yardımcı ögeleri.",
    topics: [
      "Yüklem",
      "Özne",
      "Nesne",
      "Dolaylı tümleç",
      "Zarf tümleci"
    ],
    icon: "🖊️",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "8-turkce-anlatim-bozukluklari",
    title: "Anlatım Bozuklukları",
    subject: "Türkçe",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Cümlelerde görülen anlatım bozuklukları ve çözüm yolları.",
    topics: [
      "Gereksiz sözcük kullanımı",
      "Anlam belirsizliği",
      "Özne-yüklem uyumsuzluğu",
      "Mantık hataları"
    ],
    icon: "📝",
    views: 100,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-turkce-sozel-mantık",
    title: "Sözel Mantık",
    subject: "Türkçe",
    grade: "8. Sınıf",
    category: "Konu Özeti",
    description: "Sözel mantık sorularını çözme yöntemleri ve çıkarım yapma.",
    topics: [
      "Sıralama",
      "Eşleştirme",
      "Tablo oluşturma",
      "Çıkarım"
    ],
    icon: "🧠",
    views: 95,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  /* =========================
     8. SINIF MATEMATİK
  ========================== */

  {
    id: "8-matematik-carpanlar-katlar",
    title: "Çarpanlar ve Katlar",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Çarpanlar, katlar, asal sayılar ve EBOB-EKOK.",
    topics: [
      "Çarpan",
      "Kat",
      "Asal sayılar",
      "EBOB",
      "EKOK"
    ],
    icon: "🔢",
    views: 125,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-matematik-uslu-ifadeler",
    title: "Üslü İfadeler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Üslü ifadelerin özellikleri ve üslü ifadelerle işlemler.",
    topics: [
      "Üslü ifadeler",
      "Üs kuralları",
      "10'un kuvvetleri",
      "Bilimsel gösterim"
    ],
    icon: "📐",
    views: 140,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-matematik-karekoklu-ifadeler",
    title: "Kareköklü İfadeler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Kareköklü ifadelerin özellikleri ve işlemleri.",
    topics: [
      "Karekök",
      "Kök dışına çıkarma",
      "Köklü ifadelerde işlemler",
      "Ondalık gösterim"
    ],
    icon: "√",
    views: 135,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-matematik-veri-analizi",
    title: "Veri Analizi",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Verilerin tablo ve grafiklerle gösterilmesi ve yorumlanması.",
    topics: [
      "Sütun grafiği",
      "Çizgi grafiği",
      "Daire grafiği",
      "Veri yorumlama"
    ],
    icon: "📊",
    views: 105,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-matematik-basitsizlikler",
    title: "Basit Eşitsizlikler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Birinci dereceden bir bilinmeyenli eşitsizliklerin çözümü.",
    topics: [
      "Eşitsizlik",
      "Sayı doğrusu",
      "Çözüm kümesi",
      "Eşitsizlik sembolleri"
    ],
    icon: "⚖️",
    views: 98,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-matematik-esitsizlikler",
    title: "Eşitsizlikler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Eşitsizliklerin temel özellikleri ve problem çözümleri.",
    topics: [
      "Eşitsizlik",
      "Çözüm",
      "Sayı doğrusu",
      "Problem çözme"
    ],
    icon: "≤",
    views: 90,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-matematik-ucgenler",
    title: "Üçgenler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Üçgenlerin özellikleri, açıları ve kenar ilişkileri.",
    topics: [
      "Üçgen",
      "Üçgen çeşitleri",
      "İç açılar",
      "Kenar ilişkileri"
    ],
    icon: "🔺",
    views: 115,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-matematik-eslik-benzerlik",
    title: "Eşlik ve Benzerlik",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Geometrik şekillerde eşlik ve benzerlik ilişkileri.",
    topics: [
      "Eşlik",
      "Benzerlik",
      "Benzerlik oranı",
      "Geometrik şekiller"
    ],
    icon: "📏",
    views: 88,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-matematik-donusum-geometrisi",
    title: "Dönüşüm Geometrisi",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Öteleme, yansıma ve dönme hareketleri.",
    topics: [
      "Öteleme",
      "Yansıma",
      "Dönme",
      "Koordinat sistemi"
    ],
    icon: "🔄",
    views: 82,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-matematik-geometrik-cisimler",
    title: "Geometrik Cisimler",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Prizma, silindir, piramit, koni ve küre gibi cisimler.",
    topics: [
      "Prizma",
      "Silindir",
      "Piramit",
      "Koni",
      "Küre"
    ],
    icon: "📦",
    views: 100,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-matematik-olasılık",
    title: "Olasılık",
    subject: "Matematik",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Basit olayların olasılıklarını hesaplama.",
    topics: [
      "Olasılık",
      "Olası durumlar",
      "Kesin olay",
      "İmkânsız olay"
    ],
    icon: "🎲",
    views: 110,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  /* =========================
     8. SINIF FEN BİLİMLERİ
  ========================== */

  {
    id: "8-fen-mevsimler-iklim",
    title: "Mevsimler ve İklim",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Mevsimlerin oluşumu ve iklim biliminin temel kavramları.",
    topics: [
      "Mevsimler",
      "Eksen eğikliği",
      "İklim",
      "Hava olayları"
    ],
    icon: "🌍",
    views: 110,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-fen-dna-genetik",
    title: "DNA ve Genetik Kod",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "DNA'nın yapısı, gen, kromozom ve kalıtım.",
    topics: [
      "DNA",
      "Gen",
      "Kromozom",
      "Nükleotid",
      "Kalıtım"
    ],
    icon: "🧬",
    views: 130,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-fen-basinc",
    title: "Basınç",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Katı, sıvı ve gaz basıncının temel özellikleri.",
    topics: [
      "Katı basıncı",
      "Sıvı basıncı",
      "Gaz basıncı",
      "Basınç kuvveti"
    ],
    icon: "🌡️",
    views: 105,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-fen-madde-endustri",
    title: "Madde ve Endüstri",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Maddenin yapısı, periyodik sistem ve kimyasal tepkimeler.",
    topics: [
      "Periyodik sistem",
      "Elementler",
      "Kimyasal tepkimeler",
      "Asitler ve bazlar"
    ],
    icon: "⚗️",
    views: 98,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-fen-enerji-donusumleri",
    title: "Enerji Dönüşümleri ve Çevre Bilimi",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Enerji dönüşümleri, besin zinciri ve çevre sorunları.",
    topics: [
      "Enerji dönüşümü",
      "Besin zinciri",
      "Besin ağı",
      "Çevre sorunları"
    ],
    icon: "🌱",
    views: 92,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-fen-elektrik-yukleri",
    title: "Elektrik Yükleri ve Elektrik Enerjisi",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Elektrik yükleri, elektrik enerjisi ve devreler.",
    topics: [
      "Elektrik yükü",
      "Elektriklenme",
      "Elektrik enerjisi",
      "Elektrik devreleri"
    ],
    icon: "⚡",
    views: 105,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },
  /* =====================================================
     8. SINIF TÜRKÇE / FEN DEVAMI
  ===================================================== */

  {
    id: "8-fen-elektrik-devreleri",
    title: "Elektrik Devreleri",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Elektrik devreleri ve devre elemanları hakkında temel bilgiler.",
    topics: [
      "Elektrik devresi",
      "Devre elemanları",
      "Ampul",
      "Pil",
      "Anahtar"
    ],
    icon: "🔌",
    views: 90,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-fen-makine",
    title: "Basit Makineler",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Basit makinelerin çalışma prensipleri ve günlük yaşam uygulamaları.",
    topics: [
      "Basit makineler",
      "Kaldıraç",
      "Makaralar",
      "Eğik düzlem",
      "Çıkrık"
    ],
    icon: "⚙️",
    views: 100,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  /* =====================================================
     8. SINIF İNGİLİZCE
  ===================================================== */

  {
    id: "8-ingilizce-friendship",
    title: "Friendship",
    subject: "İngilizce",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Arkadaşlık ilişkileri ve günlük iletişim ifadeleri.",
    topics: [
      "Friendship",
      "Making invitations",
      "Accepting invitations",
      "Refusing invitations"
    ],
    icon: "🇬🇧",
    views: 95,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-ingilizce-teen-life",
    title: "Teen Life",
    subject: "İngilizce",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Gençlerin günlük yaşamları, hobileri ve rutinleri.",
    topics: [
      "Daily routines",
      "Hobbies",
      "Free time",
      "Present Simple"
    ],
    icon: "🎧",
    views: 88,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-ingilizce-in-the-kitchen",
    title: "In the Kitchen",
    subject: "İngilizce",
    grade: "8. Sınıf",
    category: "Konu Özeti",
    description: "Yemekler, tarifler ve mutfakla ilgili İngilizce ifadeler.",
    topics: [
      "Food",
      "Recipes",
      "Cooking",
      "Ingredients"
    ],
    icon: "🍳",
    views: 80,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-ingilizce-on-the-phone",
    title: "On the Phone",
    subject: "İngilizce",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Telefon görüşmelerinde kullanılan temel İngilizce ifadeler.",
    topics: [
      "Phone calls",
      "Messages",
      "Invitations",
      "Requests"
    ],
    icon: "📱",
    views: 75,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-ingilizce-internet",
    title: "The Internet",
    subject: "İngilizce",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "İnternet ve teknolojiyle ilgili temel İngilizce kelimeler.",
    topics: [
      "Internet",
      "Technology",
      "Websites",
      "Online activities"
    ],
    icon: "🌐",
    views: 82,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-ingilizce-adventures",
    title: "Adventures",
    subject: "İngilizce",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Macera, seyahat ve geçmiş deneyimlerle ilgili İngilizce.",
    topics: [
      "Adventure",
      "Travel",
      "Past experiences",
      "Past Simple"
    ],
    icon: "🗺️",
    views: 78,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-ingilizce-tourism",
    title: "Tourism",
    subject: "İngilizce",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Turizm, tatil ve seyahatle ilgili İngilizce ifadeler.",
    topics: [
      "Tourism",
      "Travel",
      "Holiday",
      "Accommodation"
    ],
    icon: "✈️",
    views: 85,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-ingilizce-chores",
    title: "Chores",
    subject: "İngilizce",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Ev işleri ve günlük sorumluluklarla ilgili İngilizce.",
    topics: [
      "Housework",
      "Responsibilities",
      "Daily chores",
      "Must / Have to"
    ],
    icon: "🏠",
    views: 72,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  /* =====================================================
     8. SINIF DİN KÜLTÜRÜ
  ===================================================== */

  {
    id: "8-din-kader-kaza",
    title: "Kader ve Kaza",
    subject: "Din Kültürü",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Kader ve kaza kavramları ve insanın sorumluluğu.",
    topics: [
      "Kader",
      "Kaza",
      "İrade",
      "Sorumluluk"
    ],
    icon: "☪️",
    views: 80,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-din-zekat-sadaka",
    title: "Zekât ve Sadaka",
    subject: "Din Kültürü",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Zekât, sadaka ve yardımlaşmanın önemi.",
    topics: [
      "Zekât",
      "Sadaka",
      "Yardımlaşma",
      "Paylaşma"
    ],
    icon: "🤲",
    views: 75,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-din-din-ve-hayat",
    title: "Din ve Hayat",
    subject: "Din Kültürü",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Dinin birey ve toplum hayatındaki yeri.",
    topics: [
      "Din",
      "Ahlak",
      "Toplum",
      "Sorumluluk"
    ],
    icon: "📖",
    views: 70,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  /* =====================================================
     8. SINIF İNKILAP TARİHİ
  ===================================================== */

  {
    id: "8-inkilap-bir-kahraman-doguyor",
    title: "Bir Kahraman Doğuyor",
    subject: "T.C. İnkılap Tarihi ve Atatürkçülük",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Mustafa Kemal'in hayatı, eğitimi ve kişilik özellikleri.",
    topics: [
      "Mustafa Kemal",
      "Çocukluk dönemi",
      "Eğitim hayatı",
      "Kişilik özellikleri"
    ],
    icon: "🇹🇷",
    views: 120,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-inkilap-milli-uyanış",
    title: "Millî Uyanış",
    subject: "T.C. İnkılap Tarihi ve Atatürkçülük",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Kurtuluş Savaşı'na giden süreç ve Millî Mücadele.",
    topics: [
      "Mondros Ateşkes Antlaşması",
      "İşgaller",
      "Cemiyetler",
      "Kuva-yı Milliye"
    ],
    icon: "🇹🇷",
    views: 115,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-inkilap-milli-bir-destan",
    title: "Millî Bir Destan: Ya İstiklal Ya Ölüm!",
    subject: "T.C. İnkılap Tarihi ve Atatürkçülük",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Kurtuluş Savaşı'nın önemli cepheleri ve gelişmeleri.",
    topics: [
      "Doğu Cephesi",
      "Güney Cephesi",
      "Batı Cephesi",
      "Sakarya",
      "Büyük Taarruz"
    ],
    icon: "⚔️",
    views: 108,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-inkilap-ataturkculuk",
    title: "Atatürkçülük ve Çağdaşlaşan Türkiye",
    subject: "T.C. İnkılap Tarihi ve Atatürkçülük",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Atatürk ilkeleri ve inkılapları.",
    topics: [
      "Cumhuriyetçilik",
      "Milliyetçilik",
      "Halkçılık",
      "Devletçilik",
      "Laiklik",
      "İnkılapçılık"
    ],
    icon: "🇹🇷",
    views: 100,
    featured: true,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-inkilap-demokratiklesme",
    title: "Demokratikleşme Çabaları",
    subject: "T.C. İnkılap Tarihi ve Atatürkçülük",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Türkiye'de demokratikleşme ve çok partili hayata geçiş çalışmaları.",
    topics: [
      "Demokrasi",
      "Çok partili hayat",
      "Siyasi partiler",
      "Demokratikleşme"
    ],
    icon: "🏛️",
    views: 82,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },

  {
    id: "8-inkilap-ataturk-donemi",
    title: "Atatürk Dönemi Türk Dış Politikası",
    subject: "T.C. İnkılap Tarihi ve Atatürkçülük",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Atatürk döneminde Türkiye'nin dış politika anlayışı.",
    topics: [
      "Yurtta sulh cihanda sulh",
      "Musul",
      "Nüfus mübadelesi",
      "Hatay"
    ],
    icon: "🌍",
    views: 78,
    featured: false,
    date: "2026-08-10",
    pdf: "#"
  },
  {
    id: "8-turkce-fiilde-cati",
    title: "Fiilde Çatı",
    subject: "Türkçe",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "Fiillerin özne ve nesne ilişkisine göre özellikleri.",
    topics: [
      "Etken",
      "Edilgen",
      "Dönüşlü",
      "İşteş"
    ],
    icon: "📘",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  }
