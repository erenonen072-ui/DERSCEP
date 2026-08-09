javascript
"use strict";

const DERSCEP_NOTLARI = [
  {
    id: "5-matematik-dogal-sayilar",
    title: "Doğal Sayılar",
    subject: "Matematik",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Doğal sayılar ve temel işlemler.",
    topics: ["Doğal sayılar", "Toplama", "Çıkarma", "Çarpma", "Bölme"],
    icon: "📐",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "5-turkce-sozcukte-anlam",
    title: "Sözcükte Anlam",
    subject: "Türkçe",
    grade: "5. Sınıf",
    category: "Ders Notu",
    description: "Sözcüklerin anlam özellikleri.",
    topics: ["Gerçek anlam", "Mecaz anlam", "Terim anlam"],
    icon: "📖",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "6-matematik-tam-sayilar",
    title: "Tam Sayılar",
    subject: "Matematik",
    grade: "6. Sınıf",
    category: "Ders Notu",
    description: "Tam sayılar ve tam sayılarla işlemler.",
    topics: ["Pozitif sayılar", "Negatif sayılar", "Sayı doğrusu"],
    icon: "📐",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "6-turkce-paragraf",
    title: "Paragrafta Anlam",
    subject: "Türkçe",
    grade: "6. Sınıf",
    category: "Konu Özeti",
    description: "Paragrafın ana fikri ve yardımcı fikirleri.",
    topics: ["Ana fikir", "Yardımcı fikir", "Konu"],
    icon: "📖",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "7-matematik-rasyonel-sayilar",
    title: "Rasyonel Sayılar",
    subject: "Matematik",
    grade: "7. Sınıf",
    category: "Ders Notu",
    description: "Rasyonel sayıların temel özellikleri.",
    topics: ["Rasyonel sayılar", "Kesirler", "Sıralama"],
    icon: "📐",
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
    description: "Kuvvet, iş ve enerji arasındaki ilişkiler.",
    topics: ["Kuvvet", "İş", "Enerji"],
    icon: "🔬",
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
    description: "Üslü ifadelerin temel kuralları.",
    topics: ["Üs", "Taban", "Üs kuralları"],
    icon: "📐",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "8-fen-dna",
    title: "DNA ve Genetik Kod",
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    category: "Ders Notu",
    description: "DNA'nın yapısı ve genetik kod.",
    topics: ["DNA", "Gen", "Kromozom"],
    icon: "🧬",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "9-matematik-sayilar",
    title: "Sayılar",
    subject: "Matematik",
    grade: "9. Sınıf",
    category: "Ders Notu",
    description: "9. sınıf matematik sayılar konusu.",
    topics: ["Sayı kümeleri", "Gerçek sayılar", "Üslü ifadeler"],
    icon: "📐",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "9-edebiyat-sozun-inceligi",
    title: "Sözün İnceliği",
    subject: "Türk Dili ve Edebiyatı",
    grade: "9. Sınıf",
    category: "Ders Notu",
    description: "Edebî metinlerde anlam ve anlatım.",
    topics: ["Edebiyat", "Dil", "Anlam"],
    icon: "📖",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "9-fizik-kuvvet-hareket",
    title: "Kuvvet ve Hareket",
    subject: "Fizik",
    grade: "9. Sınıf",
    category: "Ders Notu",
    description: "Kuvvet, hareket, hız ve sürat.",
    topics: ["Kuvvet", "Hareket", "Hız", "Sürat"],
    icon: "⚡",
    views: 100,
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
    description: "Atomun yapısı ve periyodik sistem.",
    topics: ["Atom", "Proton", "Nötron", "Elektron"],
    icon: "⚗️",
    views: 100,
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
    description: "Hücrenin yapısı ve organeller.",
    topics: ["Hücre", "Organeller", "Çekirdek"],
    icon: "🧬",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "9-tarih-ilk-cag",
    title: "İlk Çağ Medeniyetleri",
    subject: "Tarih",
    grade: "9. Sınıf",
    category: "Ders Notu",
    description: "İlk Çağ medeniyetleri ve özellikleri.",
    topics: ["Mısır", "Mezopotamya", "Anadolu"],
    icon: "🏛️",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "9-cografya-doga",
    title: "Doğa ve İnsan",
    subject: "Coğrafya",
    grade: "9. Sınıf",
    category: "Ders Notu",
    description: "Doğa ve insan arasındaki ilişki.",
    topics: ["Doğa", "İnsan", "Çevre"],
    icon: "🌍",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "10-matematik-fonksiyonlar",
    title: "Fonksiyonlar",
    subject: "Matematik",
    grade: "10. Sınıf",
    category: "Ders Notu",
    description: "Fonksiyonların temel özellikleri.",
    topics: ["Fonksiyon", "Tanım kümesi", "Değer kümesi"],
    icon: "📐",
    views: 100,
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
    description: "Elektrik akımı, gerilim ve direnç.",
    topics: ["Akım", "Gerilim", "Direnç"],
    icon: "⚡",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "10-kimya-gazlar",
    title: "Gazlar",
    subject: "Kimya",
    grade: "10. Sınıf",
    category: "Ders Notu",
    description: "Gazların temel özellikleri ve gaz yasaları.",
    topics: ["Gaz", "Basınç", "Hacim", "Sıcaklık"],
    icon: "⚗️",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "10-biyoloji-ekoloji",
    title: "Ekoloji",
    subject: "Biyoloji",
    grade: "10. Sınıf",
    category: "Ders Notu",
    description: "Ekosistem ve canlılar arasındaki ilişkiler.",
    topics: ["Ekosistem", "Popülasyon", "Komünite"],
    icon: "🧬",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "11-matematik-trigonometri",
    title: "Trigonometri",
    subject: "Matematik",
    grade: "11. Sınıf",
    category: "Ders Notu",
    description: "Trigonometri ve temel bağıntılar.",
    topics: ["Sinüs", "Kosinüs", "Tanjant"],
    icon: "📐",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "11-fizik-elektrik-manyetizma",
    title: "Elektrik ve Manyetizma",
    subject: "Fizik",
    grade: "11. Sınıf",
    category: "Ders Notu",
    description: "Elektrik ve manyetizma konularının temelleri.",
    topics: ["Elektrik", "Manyetizma", "Manyetik alan"],
    icon: "⚡",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "11-kimya-denge",
    title: "Kimyasal Denge",
    subject: "Kimya",
    grade: "11. Sınıf",
    category: "Ders Notu",
    description: "Kimyasal denge ve denge koşulları.",
    topics: ["Denge", "Denge sabiti", "Le Chatelier"],
    icon: "⚗️",
    views: 100,
    featured: false,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "11-biyoloji-sinir",
    title: "Sinir Sistemi",
    subject: "Biyoloji",
    grade: "11. Sınıf",
    category: "Ders Notu",
    description: "Sinir sisteminin yapısı ve görevleri.",
    topics: ["Nöron", "Beyin", "Omurilik"],
    icon: "🧬",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "12-matematik-turev",
    title: "Türev",
    subject: "Matematik",
    grade: "12. Sınıf",
    category: "Ders Notu",
    description: "Türev kavramı ve temel türev kuralları.",
    topics: ["Türev", "Türev alma", "Uygulamalar"],
    icon: "📐",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "12-fizik-modern-fizik",
    title: "Modern Fizik",
    subject: "Fizik",
    grade: "12. Sınıf",
    category: "Ders Notu",
    description: "Modern fiziğin temel kavramları.",
    topics: ["Atom", "Kuantum", "Modern fizik"],
    icon: "⚡",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "12-kimya-organik",
    title: "Organik Bileşikler",
    subject: "Kimya",
    grade: "12. Sınıf",
    category: "Ders Notu",
    description: "Organik bileşiklerin temel özellikleri.",
    topics: ["Hidrokarbonlar", "Alkoller", "Organik bileşikler"],
    icon: "⚗️",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  },
  {
    id: "12-biyoloji-gen-protein",
    title: "Genden Proteine",
    subject: "Biyoloji",
    grade: "12. Sınıf",
    category: "Ders Notu",
    description: "Genetik bilgi ve protein sentezi.",
    topics: ["DNA", "RNA", "Protein sentezi"],
    icon: "🧬",
    views: 100,
    featured: true,
    date: "2026-08-09",
    pdf: "#"
  }
];

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

window.DERSCEP_NOTLARI = DERSCEP_NOTLARI;
window.dersCepNotGetir = dersCepNotGetir;
window.dersCepSinifNotlari = dersCepSinifNotlari;
window.dersCepDersNotlari = dersCepDersNotlari;
window.dersCepOneCikanNotlar = dersCepOneCikanNotlar;
window.dersCepPopulerNotlar = dersCepPopulerNotlar;
window.dersCepSonNotlar = dersCepSonNotlar;
window.dersCepDersleri = dersCepDersleri;
window.dersCepSiniflari = dersCepSiniflari;

console.log("DersCep notları yüklendi:", DERSCEP_NOTLARI.length);

