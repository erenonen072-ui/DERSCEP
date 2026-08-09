```javascript
/* =====================================================
   DERSCEP - MERKEZİ NOT VERİLERİ
   5. - 12. SINIF
   MEB / Türkiye Yüzyılı Maarif Modeli esas alınarak
   genişletilebilir veri yapısı
===================================================== */

"use strict";

const DERSCEP_NOTLARI = [];

/* =====================================================
   YARDIMCI
===================================================== */

function notEkle({
  id,
  title,
  subject,
  grade,
  category = "Konu Özeti",
  description,
  topics = [],
  icon = "📚",
  views = 0,
  featured = false,
  date = "2026-08-09",
  pdf = "#"
}) {
  DERSCEP_NOTLARI.push({
    id,
    title,
    subject,
    grade,
    category,
    description,
    topics,
    icon,
    views,
    featured,
    date,
    pdf
  });
}

/* =====================================================
   5. SINIF
===================================================== */

/* ---------- TÜRKÇE ---------- */

[
  ["Sözcükte Anlam", "📖"],
  ["Cümlede Anlam", "📝"],
  ["Paragrafta Anlam", "📚"],
  ["Metin Türleri", "📄"],
  ["Hikâye Unsurları", "✍️"],
  ["Şiir Bilgisi", "📜"],
  ["Yazım Kuralları", "✏️"],
  ["Noktalama İşaretleri", "❗"],
  ["Söz Varlığı", "🧠"],
  ["Dil Bilgisi Temelleri", "📘"]
].forEach(([title, icon], i) =>
  notEkle({
    id: `tr-5-${i + 1}`,
    title,
    subject: "Türkçe",
    grade: "5. Sınıf",
    description: `${title} konusu için 5. sınıf düzeyinde konu özeti ve çalışma notları.`,
    topics: [title],
    icon,
    views: 1000 - i * 31,
    featured: i < 3
  })
);

/* ---------- MATEMATİK ---------- */

[
  "Doğal Sayılar",
  "Doğal Sayılarla İşlemler",
  "Kesirler",
  "Kesirlerle İşlemler",
  "Ondalık Gösterim",
  "Yüzdeler",
  "Temel Geometrik Kavramlar",
  "Üçgen ve Dörtgenler",
  "Uzunluk ve Zaman Ölçme",
  "Veri Toplama ve Değerlendirme"
].forEach((title, i) =>
  notEkle({
    id: `mat-5-${i + 1}`,
    title,
    subject: "Matematik",
    grade: "5. Sınıf",
    description: `${title} konusu için 5. sınıf matematik konu özeti.`,
    topics: [title],
    icon: "📐",
    views: 1300 - i * 42,
    featured: i < 3
  })
);

/* ---------- FEN BİLİMLERİ ---------- */

[
  "Dünya, Güneş ve Ay",
  "Kuvvet ve Kuvvetin Ölçülmesi",
  "Canlılar Dünyası",
  "Işık ve Işık Kaynakları",
  "Maddenin Doğası",
  "Maddenin Isı Etkisi",
  "Devre Elemanları",
  "Elektrik Devreleri"
].forEach((title, i) =>
  notEkle({
    id: `fen-5-${i + 1}`,
    title,
    subject: "Fen Bilimleri",
    grade: "5. Sınıf",
    description: `${title} konusu için 5. sınıf fen bilimleri çalışma notu.`,
    topics: [title],
    icon: "🔬",
    views: 1100 - i * 37
  })
);

/* ---------- SOSYAL BİLGİLER ---------- */

[
  "Birlikte Yaşamak",
  "Evimiz Dünya",
  "Ortak Mirasımız",
  "Yaşayan Demokrasimiz",
  "Hayatımızdaki Ekonomi",
  "Teknoloji ve Sosyal Bilimler"
].forEach((title, i) =>
  notEkle({
    id: `sos-5-${i + 1}`,
    title,
    subject: "Sosyal Bilgiler",
    grade: "5. Sınıf",
    description: `${title} konusu için 5. sınıf sosyal bilgiler konu notu.`,
    topics: [title],
    icon: "🌍",
    views: 900 - i * 30
  })
);

/* ---------- İNGİLİZCE ---------- */

[
  "Hello",
  "My Town",
  "Games and Hobbies",
  "My Daily Routine",
  "Health",
  "Movies",
  "Party Time",
  "Fitness"
].forEach((title, i) =>
  notEkle({
    id: `eng-5-${i + 1}`,
    title,
    subject: "İngilizce",
    grade: "5. Sınıf",
    description: `${title} ünitesi için İngilizce kelime ve konu notları.`,
    topics: [title, "Vocabulary", "Grammar"],
    icon: "🇬🇧",
    views: 800 - i * 25
  })
);

/* =====================================================
   6. SINIF
===================================================== */

/* MATEMATİK */

[
  "Doğal Sayılar ve İşlemler",
  "Çarpanlar ve Katlar",
  "Kümeler",
  "Tam Sayılar",
  "Kesirlerle İşlemler",
  "Ondalık Gösterim",
  "Oran",
  "Cebirsel İfadeler",
  "Açılar",
  "Alan ve Hacim",
  "Çember",
  "Veri Analizi"
].forEach((title, i) =>
  notEkle({
    id: `mat-6-${i + 1}`,
    title,
    subject: "Matematik",
    grade: "6. Sınıf",
    description: `${title} konusu için 6. sınıf matematik ders notu.`,
    topics: [title],
    icon: "📐",
    views: 1500 - i * 40,
    featured: i < 3
  })
);

/* TÜRKÇE */

[
  "Sözcükte Anlam",
  "Cümlede Anlam",
  "Paragraf",
  "Metin Türleri",
  "Fiiller",
  "Zamirler",
  "Sıfatlar",
  "Yazım Kuralları",
  "Noktalama İşaretleri",
  "Anlatım Biçimleri"
].forEach((title, i) =>
  notEkle({
    id: `tr-6-${i + 1}`,
    title,
    subject: "Türkçe",
    grade: "6. Sınıf",
    description: `${title} konusu için 6. sınıf Türkçe konu özeti.`,
    topics: [title],
    icon: "📖",
    views: 1200 - i * 35
  })
);

/* FEN */

[
  "Güneş Sistemi ve Tutulmalar",
  "Kuvvet ve Hareket",
  "Canlılarda Sistemler",
  "Madde ve Isı",
  "Ses ve Özellikleri",
  "Vücudumuzdaki Sistemler",
  "Elektriğin İletimi",
  "Dünya ve Evren"
].forEach((title, i) =>
  notEkle({
    id: `fen-6-${i + 1}`,
    title,
    subject: "Fen Bilimleri",
    grade: "6. Sınıf",
    description: `${title} konusu için 6. sınıf fen bilimleri notu.`,
    topics: [title],
    icon: "🔬",
    views: 1000 - i * 30
  })
);

/* SOSYAL */

[
  "Biz ve Değerlerimiz",
  "Evimiz Dünya",
  "Küresel Bağlantılar",
  "Bilim ve Teknoloji",
  "Üretim ve Ekonomi",
  "Yönetime Katılıyorum"
].forEach((title, i) =>
  notEkle({
    id: `sos-6-${i + 1}`,
    title,
    subject: "Sosyal Bilgiler",
    grade: "6. Sınıf",
    description: `${title} konusu için 6. sınıf sosyal bilgiler notu.`,
    topics: [title],
    icon: "🌍",
    views: 850 - i * 25
  })
);

/* =====================================================
   7. SINIF
===================================================== */

/* MATEMATİK */

[
  "Tam Sayılarla İşlemler",
  "Rasyonel Sayılar",
  "Cebirsel İfadeler",
  "Eşitlik ve Denklem",
  "Oran ve Orantı",
  "Yüzdeler",
  "Doğrular ve Açılar",
  "Çokgenler",
  "Çember ve Daire",
  "Veri Analizi",
  "Cisimlerin Görünümleri"
].forEach((title, i) =>
  notEkle({
    id: `mat-7-${i + 1}`,
    title,
    subject: "Matematik",
    grade: "7. Sınıf",
    description: `${title} konusu için 7. sınıf matematik konu notu.`,
    topics: [title],
    icon: "📐",
    views: 1600 - i * 45,
    featured: i < 3
  })
);

/* TÜRKÇE */

[
  "Sözcükte Anlam",
  "Cümlede Anlam",
  "Paragraf",
  "Fiiller",
  "Zarflar",
  "Fiilde Yapı",
  "Ek Fiil",
  "Cümle Türleri",
  "Anlatım Bozuklukları",
  "Yazım ve Noktalama"
].forEach((title, i) =>
  notEkle({
    id: `tr-7-${i + 1}`,
    title,
    subject: "Türkçe",
    grade: "7. Sınıf",
    description: `${title} konusu için 7. sınıf Türkçe ders notu.`,
    topics: [title],
    icon: "📖",
    views: 1250 - i * 33
  })
);

/* FEN */

[
  "Uzay Araştırmaları",
  "Hücre ve Bölünmeler",
  "Kuvvet ve Enerji",
  "Saf Madde ve Karışımlar",
  "Işığın Madde ile Etkileşimi",
  "Canlılarda Üreme ve Gelişme",
  "Elektrik Devreleri",
  "Ekosistem"
].forEach((title, i) =>
  notEkle({
    id: `fen-7-${i + 1}`,
    title,
    subject: "Fen Bilimleri",
    grade: "7. Sınıf",
    description: `${title} konusu için 7. sınıf fen bilimleri notu.`,
    topics: [title],
    icon: "🔬",
    views: 1050 - i * 32
  })
);

/* SOSYAL */

[
  "Birey ve Toplum",
  "Kültür ve Miras",
  "İnsanlar, Yerler ve Çevreler",
  "Bilim, Teknoloji ve Toplum",
  "Üretim, Dağıtım ve Tüketim",
  "Etkin Vatandaşlık",
  "Küresel Bağlantılar"
].forEach((title, i) =>
  notEkle({
    id: `sos-7-${i + 1}`,
    title,
    subject: "Sosyal Bilgiler",
    grade: "7. Sınıf",
    description: `${title} konusu için 7. sınıf sosyal bilgiler notu.`,
    topics: [title],
    icon: "🌍",
    views: 950 - i * 28
  })
);

/* =====================================================
   8. SINIF
===================================================== */

/* MATEMATİK */

[
  "Çarpanlar ve Katlar",
  "Üslü İfadeler",
  "Kareköklü İfadeler",
  "Veri Analizi",
  "Basit Olayların Olma Olasılığı",
  "Cebirsel İfadeler ve Özdeşlikler",
  "Doğrusal Denklemler",
  "Eşitsizlikler",
  "Üçgenler",
  "Eşlik ve Benzerlik",
  "Dönüşüm Geometrisi",
  "Geometrik Cisimler"
].forEach((title, i) =>
  notEkle({
    id: `mat-8-${i + 1}`,
    title,
    subject: "Matematik",
    grade: "8. Sınıf",
    description: `${title} konusu için 8. sınıf matematik ve sınav hazırlık notu.`,
    topics: [title, "LGS"],
    icon: "📐",
    views: 2200 - i * 55,
    featured: i < 4
  })
);

/* TÜRKÇE */

[
  "Sözcükte Anlam",
  "Cümlede Anlam",
  "Paragraf",
  "Fiilimsiler",
  "Cümlenin Ögeleri",
  "Cümle Türleri",
  "Fiilde Çatı",
  "Yazım Kuralları",
  "Noktalama İşaretleri",
  "Anlatım Bozuklukları"
].forEach((title, i) =>
  notEkle({
    id: `tr-8-${i + 1}`,
    title,
    subject: "Türkçe",
    grade: "8. Sınıf",
    description: `${title} konusu için 8. sınıf Türkçe ve LGS hazırlık notu.`,
    topics: [title, "LGS"],
    icon: "📖",
    views: 2100 - i * 50,
    featured: i < 3
  })
);

/* FEN */

[
  "Mevsimler ve İklim",
  "DNA ve Genetik Kod",
  "Basınç",
  "Madde ve Endüstri",
  "Basit Makineler",
  "Enerji Dönüşümleri ve Çevre Bilimi",
  "Elektrik Yükleri ve Elektrik Enerjisi"
].forEach((title, i) =>
  notEkle({
    id: `fen-8-${i + 1}`,
    title,
    subject: "Fen Bilimleri",
    grade: "8. Sınıf",
    description: `${title} konusu için 8. sınıf fen bilimleri ve LGS notu.`,
    topics: [title, "LGS"],
    icon: "🔬",
    views: 1900 - i * 45,
    featured: i < 3
  })
);

/* İNKILAP */

[
  "Bir Kahraman Doğuyor",
  "Millî Uyanış",
  "Millî Bir Destan",
  "Atatürkçülük ve Çağdaşlaşan Türkiye",
  "Demokratikleşme Çabaları",
  "Atatürk Dönemi Türk Dış Politikası",
  "Atatürk'ün Ölümü ve Sonrası"
].forEach((title, i) =>
  notEkle({
    id: `ink-8-${i + 1}`,
    title,
    subject: "T.C. İnkılap Tarihi ve Atatürkçülük",
    grade: "8. Sınıf",
    description: `${title} konusu için 8. sınıf İnkılap Tarihi notu.`,
    topics: [title, "LGS"],
    icon: "🇹🇷",
    views: 1800 - i * 40
  })
);

/* =====================================================
   9. SINIF
===================================================== */

/* MATEMATİK */

[
  "Sayılar",
  "Nicelikler ve Değişimler",
  "Geometrik Şekiller",
  "Eşlik ve Benzerlik",
  "Algoritma ve Bilişim",
  "İstatistiksel Araştırma",
  "Veriden Olasılığa",
  "Fonksiyonlar"
].forEach((title, i) =>
  notEkle({
    id: `mat-9-${i + 1}`,
    title,
    subject: "Matematik",
    grade: "9. Sınıf",
    description: `${title} konusu için 9. sınıf matematik ders notu.`,
    topics: [title],
    icon: "📐",
    views: 1800 - i * 40,
    featured: i < 3
  })
);

/* TÜRK DİLİ VE EDEBİYATI */

[
  "Sözün İnceliği",
  "Anlam Arayışı",
  "Anlamın Yapı Taşları",
  "Dilin Zenginliği",
  "İletişim ve Dil",
  "Metinlerin Sınıflandırılması",
  "Şiir",
  "Hikâye",
  "Tiyatro",
  "Bilgilendirici Metinler"
].forEach((title, i) =>
  notEkle({
    id: `ed-9-${i + 1}`,
    title,
    subject: "Türk Dili ve Edebiyatı",
    grade: "9. Sınıf",
    description: `${title} konusu için 9. sınıf Türk Dili ve Edebiyatı notu.`,
    topics: [title],
    icon: "📚",
    views: 1700 - i * 35,
    featured: i < 3
  })
);

/* FİZİK */

[
  "Fizik Bilimi ve Kariyer Keşfi",
  "Kuvvet ve Hareket",
  "Akışkanlar",
  "Enerji",
  "Isı ve Sıcaklık",
  "Elektrik",
  "Dalgalar"
].forEach((title, i) =>
  notEkle({
    id: `fiz-9-${i + 1}`,
    title,
    subject: "Fizik",
    grade: "9. Sınıf",
    description: `${title} konusu için 9. sınıf fizik ders notu.`,
    topics: [title],
    icon: "⚡",
    views: 1400 - i * 35
  })
);

/* KİMYA */

[
  "Etkileşim",
  "Atomdan Periyodik Tabloya",
  "Etkileşimler",
  "Kimyasal Tepkimeler",
  "Kimyasal Hesaplamalar",
  "Maddenin Hâlleri"
].forEach((title, i) =>
  notEkle({
    id: `kim-9-${i + 1}`,
    title,
    subject: "Kimya",
    grade: "9. Sınıf",
    description: `${title} konusu için 9. sınıf kimya ders notu.`,
    topics: [title],
    icon: "⚗️",
    views: 1300 - i * 30
  })
);

/* BİYOLOJİ */

[
  "Yaşam Bilimi Biyoloji",
  "Sınıflandırma ve Biyoçeşitlilik",
  "Hücre",
  "Organizasyon",
  "Canlılarda Enerji Dönüşümleri"
].forEach((title, i) =>
  notEkle({
    id: `bio-9-${i + 1}`,
    title,
    subject: "Biyoloji",
    grade: "9. Sınıf",
    description: `${title} konusu için 9. sınıf biyoloji ders notu.`,
    topics: [title],
    icon: "🧬",
    views: 1250 - i * 30
  })
);

/* TARİH */

[
  "Geçmişin İnşa Sürecinde Tarih",
  "Eski Çağ Medeniyetleri",
  "Orta Çağ Medeniyetleri",
  "Türklerin İlk Dönemleri",
  "İslam Medeniyeti"
].forEach((title, i) =>
  notEkle({
    id: `tar-9-${i + 1}`,
    title,
    subject: "Tarih",
    grade: "9. Sınıf",
    description: `${title} konusu için 9. sınıf tarih ders notu.`,
    topics: [title],
    icon: "🏛️",
    views: 1100 - i * 30
  })
);

/* COĞRAFYA */

[
  "Coğrafyanın Doğası",
  "Mekânsal Bilgi Teknolojileri",
  "Doğal Sistemler ve Süreçler",
  "Beşerî Sistemler ve Süreçler",
  "Ekonomik Faaliyetler",
  "Afetler ve Çevre"
].forEach((title, i) =>
  notEkle({
    id: `cog-9-${i + 1}`,
    title,
    subject: "Coğrafya",
    grade: "9. Sınıf",
    description: `${title} konusu için 9. sınıf coğrafya ders notu.`,
    topics: [title],
    icon: "🌍",
    views: 1050 - i * 25
  })
);

/* =====================================================
   10. SINIF
===================================================== */

/* MATEMATİK */

[
  "Sayılar",
  "Nicelikler ve Değişimler",
  "Geometrik Şekiller",
  "Veri",
  "Algoritma ve Bilişim",
  "Sayma ve Olasılık"
].forEach((title, i) =>
  notEkle({
    id: `mat-10-${i + 1}`,
    title,
    subject: "Matematik",
    grade: "10. Sınıf",
    description: `${title} konusu için 10. sınıf matematik ders notu.`,
    topics: [title],
    icon: "📐",
    views: 1700 - i * 40
  })
);

/* EDEBİYAT */

[
  "Sözün Ezgisi",
  "Kelimelerin Ritmi",
  "Dünden Bugüne",
  "Nesillerin Mirası",
  "Hikâye ve Roman",
  "Şiir",
  "Tiyatro",
  "Bilgilendirici Metinler"
].forEach((title, i) =>
  notEkle({
    id: `ed-10-${i + 1}`,
    title,
    subject: "Türk Dili ve Edebiyatı",
    grade: "10. Sınıf",
    description: `${title} konusu için 10. sınıf edebiyat ders notu.`,
    topics: [title],
    icon: "📚",
    views: 1550 - i * 35
  })
);

/* FİZİK */

[
  "Kuvvet ve Hareket",
  "Elektrik",
  "Dalgalar",
  "Enerji",
  "Optik",
  "Madde ve Özellikleri"
].forEach((title, i) =>
  notEkle({
    id: `fiz-10-${i + 1}`,
    title,
    subject: "Fizik",
    grade: "10. Sınıf",
    description: `${title} konusu için 10. sınıf fizik notu.`,
    topics: [title],
    icon: "⚡",
    views: 1250 - i * 30
  })
);

/* KİMYA */

[
  "Kimyanın Temelleri",
  "Kimyasal Tepkimeler",
  "Gazlar",
  "Çözeltiler",
  "Asitler, Bazlar ve Tuzlar",
  "Kimya ve Enerji"
].forEach((title, i) =>
  notEkle({
    id: `kim-10-${i + 1}`,
    title,
    subject: "Kimya",
    grade: "10. Sınıf",
    description: `${title} konusu için 10. sınıf kimya notu.`,
    topics: [title],
    icon: "⚗️",
    views: 1200 - i * 30
  })
);

/* BİYOLOJİ */

[
  "Enerji ve Metabolizma",
  "Hücre Bölünmeleri",
  "Kalıtım",
  "Ekosistem Ekolojisi",
  "Canlılar ve Çevre"
].forEach((title, i) =>
  notEkle({
    id: `bio-10-${i + 1}`,
    title,
    subject: "Biyoloji",
    grade: "10. Sınıf",
    description: `${title} konusu için 10. sınıf biyoloji notu.`,
    topics: [title],
    icon: "🧬",
    views: 1180 - i * 30
  })
);

/* =====================================================
   11. SINIF
===================================================== */

/* MATEMATİK */

[
  "İstatistiksel Araştırma Süreci",
  "Trigonometri",
  "Fonksiyonlar",
  "Denklemler ve Eşitsizlikler",
  "Çember ve Daire",
  "Uzay Geometri",
  "Olasılık"
].forEach((title, i) =>
  notEkle({
    id: `mat-11-${i + 1}`,
    title,
    subject: "Matematik",
    grade: "11. Sınıf",
    description: `${title} konusu için 11. sınıf matematik ders notu.`,
    topics: [title],
    icon: "📐",
    views: 1650 - i * 40
  })
);

/* EDEBİYAT */

[
  "Bir Diğer Dünya",
  "Kültür ve Değerler",
  "Sanat ve Estetik",
  "Millî Edebiyat",
  "Edebî Türler",
  "Şiir",
  "Roman",
  "Tiyatro",
  "Dünya Edebiyatı"
].forEach((title, i) =>
  notEkle({
    id: `ed-11-${i + 1}`,
    title,
    subject: "Türk Dili ve Edebiyatı",
    grade: "11. Sınıf",
    description: `${title} konusu için 11. sınıf edebiyat ders notu.`,
    topics: [title],
    icon: "📚",
    views: 1450 - i * 35
  })
);

/* FİZİK */

[
  "Kuvvet ve Hareket",
  "Elektrik ve Manyetizma",
  "Dalgalar",
  "Optik",
  "Enerji",
  "Modern Fizik"
].forEach((title, i) =>
  notEkle({
    id: `fiz-11-${i + 1}`,
    title,
    subject: "Fizik",
    grade: "11. Sınıf",
    description: `${title} konusu için 11. sınıf fizik ders notu.`,
    topics: [title],
    icon: "⚡",
    views: 1300 - i * 30
  })
);

/* KİMYA */

[
  "Modern Atom Teorisi",
  "Gazlar",
  "Sıvı Çözeltiler",
  "Kimyasal Enerji",
  "Kimyasal Tepkimelerde Hız",
  "Kimyasal Denge",
  "Asit-Baz Dengesi"
].forEach((title, i) =>
  notEkle({
    id: `kim-11-${i + 1}`,
    title,
    subject: "Kimya",
    grade: "11. Sınıf",
    description: `${title} konusu için 11. sınıf kimya ders notu.`,
    topics: [title],
    icon: "⚗️",
    views: 1280 - i * 30
  })
);

/* BİYOLOJİ */

[
  "Denetleyici ve Düzenleyici Sistemler",
  "Duyu Organları",
  "Destek ve Hareket Sistemi",
  "Sindirim Sistemi",
  "Dolaşım Sistemi",
  "Solunum Sistemi",
  "Üriner Sistem",
  "Üreme Sistemi",
  "Ekosistem Ekolojisi"
].forEach((title, i) =>
  notEkle({
    id: `bio-11-${i + 1}`,
    title,
    subject: "Biyoloji",
    grade: "11. Sınıf",
    description: `${title} konusu için 11. sınıf biyoloji ders notu.`,
    topics: [title],
    icon: "🧬",
    views: 1300 - i * 30
  })
);

/* =====================================================
   12. SINIF
===================================================== */

/* MATEMATİK */

[
  "Üstel ve Logaritmik Fonksiyonlar",
  "Diziler",
  "Trigonometri",
  "Limit ve Süreklilik",
  "Türev",
  "İntegral",
  "Analitik Geometri",
  "Olasılık"
].forEach((title, i) =>
  notEkle({
    id: `mat-12-${i + 1}`,
    title,
    subject: "Matematik",
    grade: "12. Sınıf",
    description: `${title} konusu için 12. sınıf matematik ve YKS hazırlık notu.`,
    topics: [title, "YKS"],
    icon: "📐",
    views: 2300 - i * 50,
    featured: i < 3
  })
);

/* EDEBİYAT */

[
  "Edebiyat ve Toplum",
  "Cumhuriyet Dönemi Edebiyatı",
  "Hikâye",
  "Şiir",
  "Roman",
  "Tiyatro",
  "Deneme",
  "Söylev",
  "Dünya Edebiyatı",
  "Edebî Akımlar"
].forEach((title, i) =>
  notEkle({
    id: `ed-12-${i + 1}`,
    title,
    subject: "Türk Dili ve Edebiyatı",
    grade: "12. Sınıf",
    description: `${title} konusu için 12. sınıf edebiyat ve YKS hazırlık notu.`,
    topics: [title, "YKS"],
    icon: "📚",
    views: 2100 - i * 45,
    featured: i < 3
  })
);

/* FİZİK */

[
  "Çembersel Hareket",
  "Basit Harmonik Hareket",
  "Dalga Mekaniği",
  "Elektromanyetizma",
  "Modern Fizik",
  "Modern Fiziğin Teknolojideki Uygulamaları"
].forEach((title, i) =>
  notEkle({
    id: `fiz-12-${i + 1}`,
    title,
    subject: "Fizik",
    grade: "12. Sınıf",
    description: `${title} konusu için 12. sınıf fizik ve YKS hazırlık notu.`,
    topics: [title, "YKS"],
    icon: "⚡",
    views: 1750 - i * 35
  })
);

/* KİMYA */

[
  "Kimya ve Elektrik",
  "Karbon Kimyasına Giriş",
  "Organik Bileşikler",
  "Enerji Kaynakları ve Bilim",
  "Kimya ve Nanoteknoloji"
].forEach((title, i) =>
  notEkle({
    id: `kim-12-${i + 1}`,
    title,
    subject: "Kimya",
    grade: "12. Sınıf",
    description: `${title} konusu için 12. sınıf kimya ve YKS hazırlık notu.`,
    topics: [title, "YKS"],
    icon: "⚗️",
    views: 1600 - i * 35
  })
);

/* BİYOLOJİ */

[
  "Genden Proteine",
  "Nükleik Asitler",
  "Canlılarda Enerji Dönüşümleri",
  "Bitki Biyolojisi",
  "Canlılar ve Çevre",
  "Ekoloji"
].forEach((title, i) =>
  notEkle({
    id: `bio-12-${i + 1}`,
    title,
    subject: "Biyoloji",
    grade: "12. Sınıf",
    description: `${title} konusu için 12. sınıf biyoloji ve YKS hazırlık notu.`,
    topics: [title, "YKS"],
    icon: "🧬",
    views: 1550 - i * 35
  })
);

/* =====================================================
   ORTAK DERSLER
===================================================== */

/* DİN KÜLTÜRÜ */

for (let grade = 5; grade <= 8; grade++) {
  [
    "İnanç",
    "İbadet",
    "Ahlak ve Değerler",
    "Hz. Muhammed",
    "Kur'an-ı Kerim ve Anlamı"
  ].forEach((title, i) => {
    notEkle({
      id: `din-${grade}-${i + 1}`,
      title,
      subject: "Din Kültürü",
      grade: `${grade}. Sınıf`,
      description: `${title} konusu için ${grade}. sınıf Din Kültürü ders notu.`,
      topics: [title],
      icon: "☪️",
      views: 700 - i * 20
    });
  });
}

/* İNGİLİZCE - 6/7/8 */

for (let grade = 6; grade <= 8; grade++) {
  [
    "Life",
    "Yummy Breakfast",
    "Downtown",
    "Weather and Emotions",
    "At the Fair",
    "Occupations",
    "Holidays",
    "Chores"
  ].forEach((title, i) => {
    notEkle({
      id: `eng-${grade}-${i + 1}`,
      title,
      subject: "İngilizce",
      grade: `${grade}. Sınıf`,
      description: `${title} ünitesi için ${grade}. sınıf İngilizce notları.`,
      topics: [title, "Vocabulary", "Grammar"],
      icon: "🇬🇧",
      views: 750 - i * 20
    });
  });
}

/* =====================================================
   LİSE ORTAK COĞRAFYA
===================================================== */

for (let grade = 10; grade <= 12; grade++) {
  [
    "Doğal Sistemler",
    "Beşerî Sistemler",
    "Ekonomik Faaliyetler",
    "Çevre ve Toplum",
    "Küresel Ortam"
  ].forEach((title, i) => {
    notEkle({
      id: `cog-${grade}-${i + 1}`,
      title,
      subject: "Coğrafya",
      grade: `${grade}. Sınıf`,
      description: `${title} konusu için ${grade}. sınıf coğrafya ders notu.`,
      topics: [title],
      icon: "🌍",
      views: 800 - i * 20
    });
  });
}

/* =====================================================
   YARDIMCI FONKSİYONLAR
===================================================== */

function dersCepNotGetir(id) {
  return DERSCEP_NOTLARI.find(
    note => note.id === id
  );
}

function dersCepSinifNotlari(grade) {
  return DERSCEP_NOTLARI.filter(
    note => note.grade === grade
  );
}

function dersCepDersNotlari(subject) {
  return DERSCEP_NOTLARI.filter(
    note => note.subject === subject
  );
}

function dersCepOneCikanNotlar() {
  return DERSCEP_NOTLARI.filter(
    note => note.featured === true
  );
}

function dersCepPopulerNotlar(limit = 6) {
  return [...DERSCEP_NOTLARI]
    .sort(
      (a, b) =>
        Number(b.views || 0) -
        Number(a.views || 0)
    )
    .slice(0, limit);
}

function dersCepSonNotlar(limit = 6) {
  return [...DERSCEP_NOTLARI]
    .sort(
      (a, b) =>
        new Date(b.date || 0) -
        new Date(a.date || 0)
    )
    .slice(0, limit);
}

function dersCepDersleri() {
  return [
    ...new Set(
      DERSCEP_NOTLARI.map(
        note => note.subject
      )
    )
  ];
}

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

window.DERSCEP_NOTLARI = DERSCEP_NOTLARI;

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

/* =====================================================
   KONTROL
===================================================== */

console.log(
  `DersCep: ${DERSCEP_NOTLARI.length} not yüklendi.`
);
```
