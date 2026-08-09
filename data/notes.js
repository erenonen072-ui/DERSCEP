javascript
/* =========================================================
   DERSCEP - TÜM SINIFLAR / TÜM DERSLER / KONU VERİLERİ
   5. sınıftan 12. sınıfa kadar
   ========================================================= */

"use strict";

const DERSCEP_NOTLARI = [];

/* =========================================================
   YARDIMCI
   ========================================================= */

function konuEkle(
  grade,
  subject,
  topics,
  icon = "📚"
) {
  topics.forEach((title, index) => {
    const subjectKey = subject
      .toLocaleLowerCase("tr-TR")
      .replace(/[^a-z0-9ğüşöçıİĞÜŞÖÇ]+/gi, "-")
      .replace(/^-|-$/g, "");

    const gradeNumber = grade.replace(/\D/g, "");

    DERSCEP_NOTLARI.push({
      id:
        `${gradeNumber}-${subjectKey}-${index + 1}`
          .toLocaleLowerCase("tr-TR"),

      title,

      subject,

      grade,

      category: "Ders Notu",

      description:
        `${grade} ${subject} dersi ${title} konusu için DersCep konu özeti ve çalışma notları.`,

      topics: [title],

      icon,

      views: 0,

      featured: index < 2,

      date: "2026-08-09",

      pdf: "#"
    });
  });
}

/* =========================================================
   5. SINIF
   ========================================================= */

/* TÜRKÇE */
konuEkle("5. Sınıf", "Türkçe", [
  "Sözcükte Anlam",
  "Cümlede Anlam",
  "Paragrafta Anlam",
  "Metin Türleri",
  "Hikâye Unsurları",
  "Şiir Bilgisi",
  "Yazım Kuralları",
  "Noktalama İşaretleri",
  "İsimler",
  "Sıfatlar",
  "Zamirler",
  "Fiiller",
  "Cümlenin Ögeleri",
  "Anlatım Bozuklukları"
], "📖");

/* MATEMATİK */
konuEkle("5. Sınıf", "Matematik", [
  "Doğal Sayılar",
  "Doğal Sayılarla İşlemler",
  "Kesirler",
  "Kesirlerle İşlemler",
  "Ondalık Gösterim",
  "Yüzdeler",
  "Temel Geometrik Kavramlar",
  "Açılar",
  "Üçgenler",
  "Dörtgenler",
  "Çember ve Daire",
  "Uzunluk ve Zaman Ölçme",
  "Alan Ölçme",
  "Veri Toplama ve Değerlendirme",
  "Olasılık"
], "📐");

/* FEN */
konuEkle("5. Sınıf", "Fen Bilimleri", [
  "Dünya ve Evren",
  "Kuvvet ve Kuvvetin Ölçülmesi",
  "Kuvvetin Ölçülmesi ve Sürtünme",
  "Canlılar Dünyası",
  "Işık ve Işık Kaynakları",
  "Maddenin Değişimi",
  "Isı ve Sıcaklık",
  "Elektrik Devreleri",
  "Devre Elemanları",
  "Çevre ve Geri Dönüşüm"
], "🔬");

/* SOSYAL */
konuEkle("5. Sınıf", "Sosyal Bilgiler", [
  "Birlikte Yaşamak",
  "Evimiz Dünya",
  "Ortak Mirasımız",
  "Yaşayan Demokrasimiz",
  "Hayatımızdaki Ekonomi",
  "Teknoloji ve Sosyal Bilimler"
], "🌍");

/* İNGİLİZCE */
konuEkle("5. Sınıf", "İngilizce", [
  "Hello",
  "My Town",
  "Games and Hobbies",
  "My Daily Routine",
  "Health",
  "Movies",
  "Party Time",
  "Fitness",
  "The Animal Shelter",
  "Festivals"
], "🇬🇧");

/* =========================================================
   6. SINIF
   ========================================================= */

konuEkle("6. Sınıf", "Türkçe", [
  "Sözcükte Anlam",
  "Cümlede Anlam",
  "Paragraf",
  "Metin Türleri",
  "Fiiller",
  "İsim ve Sıfatlar",
  "Zamirler",
  "Edat Bağlaç Ünlem",
  "Yazım Kuralları",
  "Noktalama İşaretleri",
  "Anlatım Bozuklukları"
], "📖");

konuEkle("6. Sınıf", "Matematik", [
  "Doğal Sayılar ve İşlemler",
  "Çarpanlar ve Katlar",
  "Kümeler",
  "Tam Sayılar",
  "Kesirler",
  "Ondalık Gösterim",
  "Oran",
  "Cebirsel İfadeler",
  "Veri Toplama",
  "Açılar",
  "Alan Ölçme",
  "Çember",
  "Geometrik Cisimler",
  "Sıvı Ölçme",
  "Olasılık"
], "📐");

konuEkle("6. Sınıf", "Fen Bilimleri", [
  "Güneş Sistemi ve Tutulmalar",
  "Vücudumuzdaki Sistemler",
  "Kuvvet ve Hareket",
  "Maddenin Ayırt Edici Özellikleri",
  "Ses ve Özellikleri",
  "Vücudumuzdaki Sistemler ve Sağlığı",
  "Elektriğin İletimi",
  "Dünya ve Evren"
], "🔬");

konuEkle("6. Sınıf", "Sosyal Bilgiler", [
  "Birlikte Yaşamak",
  "Evimiz Dünya",
  "Ortak Mirasımız",
  "Yaşayan Demokrasimiz",
  "Hayatımızdaki Ekonomi",
  "Teknoloji ve Sosyal Bilimler"
], "🌍");

konuEkle("6. Sınıf", "İngilizce", [
  "Life",
  "Yummy Breakfast",
  "Downtown",
  "Weather and Emotions",
  "At the Fair",
  "Occupations",
  "Holidays",
  "Bookworms",
  "Saving the Planet",
  "Democracy"
], "🇬🇧");

/* =========================================================
   7. SINIF
   ========================================================= */

konuEkle("7. Sınıf", "Türkçe", [
  "Sözcükte Anlam",
  "Cümlede Anlam",
  "Paragraf",
  "Fiiller",
  "Fiilde Yapı",
  "Zarflar",
  "Cümlenin Ögeleri",
  "Fiilde Çatı",
  "Yazım Kuralları",
  "Noktalama İşaretleri",
  "Metin Türleri"
], "📖");

konuEkle("7. Sınıf", "Matematik", [
  "Tam Sayılarla İşlemler",
  "Rasyonel Sayılar",
  "Rasyonel Sayılarla İşlemler",
  "Cebirsel İfadeler",
  "Eşitlik ve Denklem",
  "Oran ve Orantı",
  "Yüzdeler",
  "Doğrular ve Açılar",
  "Çokgenler",
  "Çember ve Daire",
  "Veri Analizi",
  "Cisimlerin Farklı Yönlerden Görünümleri",
  "Olasılık"
], "📐");

konuEkle("7. Sınıf", "Fen Bilimleri", [
  "Uzay Araştırmaları",
  "Hücre ve Bölünmeler",
  "Kuvvet ve Enerji",
  "Saf Madde ve Karışımlar",
  "Işığın Madde ile Etkileşimi",
  "Canlılarda Üreme Büyüme ve Gelişme",
  "Elektrik Devreleri",
  "Ekosistem",
  "Güneş Sistemi"
], "🔬");

konuEkle("7. Sınıf", "Sosyal Bilgiler", [
  "Birey ve Toplum",
  "Kültür ve Miras",
  "İnsanlar Yerler ve Çevreler",
  "Bilim Teknoloji ve Toplum",
  "Üretim Dağıtım ve Tüketim",
  "Etkin Vatandaşlık",
  "Küresel Bağlantılar"
], "🌍");

konuEkle("7. Sınıf", "İngilizce", [
  "Appearance and Personality",
  "Sports",
  "Biographies",
  "Wild Animals",
  "Television",
  "Celebrations",
  "Dreams",
  "Public Buildings",
  "Environment",
  "Planets"
], "🇬🇧");

/* =========================================================
   8. SINIF
   ========================================================= */

konuEkle("8. Sınıf", "Türkçe", [
  "Sözcükte Anlam",
  "Cümlede Anlam",
  "Paragraf",
  "Fiilimsiler",
  "Cümlenin Ögeleri",
  "Cümle Türleri",
  "Fiilde Çatı",
  "Yazım Kuralları",
  "Noktalama İşaretleri",
  "Anlatım Bozuklukları",
  "Metin Türleri"
], "📖");

konuEkle("8. Sınıf", "Matematik", [
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
], "📐");

konuEkle("8. Sınıf", "Fen Bilimleri", [
  "Mevsimler ve İklim",
  "DNA ve Genetik Kod",
  "Basınç",
  "Madde ve Endüstri",
  "Basit Makineler",
  "Enerji Dönüşümleri ve Çevre Bilimi",
  "Elektrik Yükleri ve Elektrik Enerjisi",
  "Canlılar ve Enerji İlişkileri"
], "🔬");

konuEkle("8. Sınıf", "T.C. İnkılap Tarihi ve Atatürkçülük", [
  "Bir Kahraman Doğuyor",
  "Millî Uyanış: Bağımsızlık Yolunda Atılan Adımlar",
  "Millî Bir Destan: Ya İstiklal Ya Ölüm",
  "Atatürkçülük ve Çağdaşlaşan Türkiye",
  "Demokratikleşme Çabaları",
  "Atatürk Dönemi Türk Dış Politikası",
  "Atatürk'ün Ölümü ve Sonrası"
], "🇹🇷");

konuEkle("8. Sınıf", "İngilizce", [
  "Friendship",
  "Teen Life",
  "In the Kitchen",
  "On the Phone",
  "The Internet",
  "Adventures",
  "Tourism",
  "Chores",
  "Science",
  "Natural Forces"
], "🇬🇧");

/* =========================================================
   9. SINIF
   ========================================================= */

konuEkle("9. Sınıf", "Matematik", [
  "Sayılar",
  "Nicelikler ve Değişimler",
  "Algoritma ve Bilişim",
  "Geometrik Şekiller",
  "Eşlik ve Benzerlik",
  "İstatistiksel Araştırma Süreci",
  "Veriden Olasılığa"
], "📐");

konuEkle("9. Sınıf", "Türk Dili ve Edebiyatı", [
  "Sözün İnceliği",
  "Anlam Arayışı",
  "Anlamın Yapı Taşları",
  "Dilin Zenginliği",
  "İletişim ve İnsan İlişkileri",
  "Anlamın Yapılandırılması",
  "Edebiyatın Diğer Bilimlerle İlişkisi"
], "📖");

konuEkle("9. Sınıf", "Fizik", [
  "Fizik Bilimi ve Kariyer Keşfi",
  "Kuvvet ve Hareket",
  "Akışkanlar",
  "Enerji",
  "Isı ve Sıcaklık",
  "Elektrik",
  "Dalgalar"
], "⚡");

konuEkle("9. Sınıf", "Kimya", [
  "Etkileşim",
  "Çeşitlilik",
  "Etkileşimler",
  "Kimyasal Tepkimeler",
  "Kimyasal Hesaplamalar",
  "Kimyanın Temelleri",
  "Kimya ve Sürdürülebilirlik"
], "⚗️");

konuEkle("9. Sınıf", "Biyoloji", [
  "Yaşam",
  "Organizasyon",
  "Ekoloji",
  "Enerji ve Metabolizma",
  "Hücre",
  "Canlıların Yapısı"
], "🧬");

konuEkle("9. Sınıf", "Tarih", [
  "Geçmişin İnşa Sürecinde Tarih",
  "Eski Çağ Medeniyetleri",
  "Orta Çağ Medeniyetleri",
  "İlk ve Orta Çağlarda Türk Dünyası",
  "İslam Medeniyetinin Doğuşu",
  "Türklerin İslamiyet'i Kabulü"
], "🏛️");

konuEkle("9. Sınıf", "Coğrafya", [
  "Coğrafyanın Doğası",
  "Mekânsal Bilgi Teknolojileri",
  "Doğal Sistemler ve Süreçler",
  "Beşerî Sistemler ve Süreçler",
  "Ekonomik Faaliyetler",
  "Afetler ve Sürdürülebilir Çevre"
], "🌍");

konuEkle("9. Sınıf", "İngilizce", [
  "School Life and Education",
  "Classroom Life",
  "Personal Life",
  "Family Life",
  "Neighbourhood and City Life",
  "Life in the World",
  "Life and Culture"
], "🇬🇧");

/* =========================================================
   10. SINIF
   ========================================================= */

konuEkle("10. Sınıf", "Matematik", [
  "Sayılar",
  "Nicelikler ve Değişimler",
  "Sayma Algoritma ve Bilişim",
  "Geometrik Şekiller",
  "Analitik İnceleme",
  "İstatistiksel Araştırma Süreci",
  "Veriden Olasılığa"
], "📐");

konuEkle("10. Sınıf", "Türk Dili ve Edebiyatı", [
  "Sözün Ezgisi",
  "Kelamın Kalemi",
  "Dünden Bugüne",
  "Nesillerin Mirası",
  "Türkçenin Söz Varlığı",
  "Sanat ve Edebiyat"
], "📖");

konuEkle("10. Sınıf", "Fizik", [
  "Kuvvet ve Hareket",
  "Elektrik",
  "Dalgalar",
  "Optik",
  "Enerji",
  "Basınç"
], "⚡");

konuEkle("10. Sınıf", "Kimya", [
  "Kimyanın Temelleri",
  "Kimyasal Tepkimeler",
  "Gazlar",
  "Çözeltiler",
  "Kimya ve Enerji",
  "Kimya ve Elektrik",
  "Sürdürülebilirlik"
], "⚗️");

konuEkle("10. Sınıf", "Biyoloji", [
  "Enerji",
  "Ekoloji",
  "Hücre",
  "Canlılarda Yapı ve İşlev",
  "Kalıtım",
  "Canlıların Sınıflandırılması"
], "🧬");

konuEkle("10. Sınıf", "Tarih", [
  "Türkistan'dan Türkiye'ye",
  "Beylikten Devlete Osmanlı",
  "Cihan Devleti Osmanlı",
  "Değişen Dünya Dengeleri Karşısında Osmanlı",
  "Osmanlı Kültür ve Medeniyeti"
], "🏛️");

konuEkle("10. Sınıf", "Coğrafya", [
  "Doğal Sistemler",
  "Beşerî Sistemler",
  "Ekonomik Faaliyetler",
  "Afetler",
  "Çevre ve Toplum",
  "Bölgeler ve Ülkeler"
], "🌍");

konuEkle("10. Sınıf", "Felsefe", [
  "Felsefenin Anlamı",
  "Felsefi Düşüncenin Özellikleri",
  "Bilgi Felsefesi",
  "Bilim Felsefesi",
  "Ahlak Felsefesi",
  "Siyaset Felsefesi",
  "Sanat Felsefesi",
  "Din Felsefesi"
], "🤔");

/* =========================================================
   11. SINIF
   ========================================================= */

konuEkle("11. Sınıf", "Matematik", [
  "Nicelikler ve Değişimler",
  "Geometrik Şekiller",
  "İstatistiksel Araştırma Süreci",
  "Fonksiyonlar",
  "Trigonometri",
  "Analitik Geometri",
  "Limit ve Süreklilik",
  "Türev",
  "İntegral"
], "📐");

konuEkle("11. Sınıf", "Türk Dili ve Edebiyatı", [
  "Edebiyat ve Toplum",
  "Hikâye",
  "Şiir",
  "Makale",
  "Sohbet ve Fıkra",
  "Roman",
  "Tiyatro",
  "Eleştiri",
  "Mülakat ve Röportaj"
], "📖");

konuEkle("11. Sınıf", "Fizik", [
  "Kuvvet ve Hareket",
  "Elektrik ve Manyetizma",
  "Dalgalar",
  "Optik",
  "Enerji",
  "Modern Fizik"
], "⚡");

konuEkle("11. Sınıf", "Kimya", [
  "Modern Atom Teorisi",
  "Gazlar",
  "Sıvı Çözeltiler",
  "Kimyasal Tepkimelerde Enerji",
  "Kimyasal Tepkimelerde Hız",
  "Kimyasal Denge",
  "Asitler Bazlar ve Tuzlar",
  "Organik Bileşikler"
], "⚗️");

konuEkle("11. Sınıf", "Biyoloji", [
  "İnsan Fizyolojisi",
  "Sinir Sistemi",
  "Endokrin Sistem",
  "Duyu Organları",
  "Destek ve Hareket Sistemi",
  "Sindirim Sistemi",
  "Dolaşım Sistemi",
  "Solunum Sistemi",
  "Üriner Sistem",
  "Üreme Sistemi"
], "🧬");

konuEkle("11. Sınıf", "Tarih", [
  "Değişen Dünya Dengeleri",
  "Osmanlı Siyaseti",
  "Osmanlı Kültür ve Medeniyeti",
  "Avrupa ve Osmanlı",
  "20. Yüzyıl Başlarında Osmanlı",
  "Millî Mücadele"
], "🏛️");

konuEkle("11. Sınıf", "Coğrafya", [
  "Doğal Sistemler",
  "Beşerî Sistemler",
  "Ekonomik Faaliyetler",
  "Kültür Bölgeleri",
  "Çevre ve Toplum",
  "Türkiye'nin Jeopolitiği"
], "🌍");

konuEkle("11. Sınıf", "Felsefe", [
  "Felsefenin Ortaya Çıkışı",
  "MÖ 6. Yüzyıl ve MS 2. Yüzyıl Felsefesi",
  "MS 2. Yüzyıl ve MS 15. Yüzyıl Felsefesi",
  "15. Yüzyıl ve 17. Yüzyıl Felsefesi",
  "18. Yüzyıl ve 19. Yüzyıl Felsefesi",
  "20. Yüzyıl Felsefesi"
], "🤔");

/* =========================================================
   12. SINIF
   ========================================================= */

konuEkle("12. Sınıf", "Matematik", [
  "Nicelikler ve Değişimler",
  "Değişimin Matematiği",
  "Geometrik Şekiller",
  "Geometrik Cisimler",
  "Hazır Veriler Üzerinde Çalışma",
  "Fonksiyonlar",
  "Limit",
  "Türev",
  "İntegral"
], "📐");

konuEkle("12. Sınıf", "Türk Dili ve Edebiyatı", [
  "Cumhuriyet Dönemi Türk Edebiyatı",
  "Şiir",
  "Roman",
  "Hikâye",
  "Tiyatro",
  "Deneme",
  "Söylev",
  "Mülakat",
  "Röportaj"
], "📖");

konuEkle("12. Sınıf", "Fizik", [
  "Elektrik ve Manyetizma",
  "Çembersel Hareket",
  "Basit Harmonik Hareket",
  "Dalga Mekaniği",
  "Atom Fiziğine Giriş",
  "Modern Fizik",
  "Modern Fiziğin Teknolojideki Uygulamaları"
], "⚡");

konuEkle("12. Sınıf", "Kimya", [
  "Kimya ve Elektrik",
  "Karbon Kimyasına Giriş",
  "Organik Bileşikler",
  "Enerji Kaynakları",
  "Çevre Kimyası",
  "Kimya ve Sürdürülebilirlik"
], "⚗️");

konuEkle("12. Sınıf", "Biyoloji", [
  "Genden Proteine",
  "Nükleik Asitler",
  "Protein Sentezi",
  "Canlılarda Enerji Dönüşümleri",
  "Fotosentez",
  "Hücresel Solunum",
  "Bitki Biyolojisi",
  "Canlılar ve Çevre"
], "🧬");

konuEkle("12. Sınıf", "Coğrafya", [
  "Doğal Sistemler",
  "Beşerî Sistemler",
  "Ekonomik Faaliyetler",
  "Türkiye'nin Ekonomisi",
  "Kültür Bölgeleri",
  "Çevre ve Toplum",
  "Küresel Çevre Sorunları"
], "🌍");

konuEkle("12. Sınıf", "T.C. İnkılap Tarihi ve Atatürkçülük", [
  "20. Yüzyıl Başlarında Osmanlı Devleti",
  "Millî Mücadele",
  "Atatürkçülük ve Türk İnkılabı",
  "İki Savaş Arasındaki Dönemde Türkiye",
  "II. Dünya Savaşı Sürecinde Türkiye",
  "II. Dünya Savaşı Sonrasında Türkiye",
  "Toplumsal Devrim Çağında Dünya ve Türkiye",
  "21. Yüzyılın Eşiğinde Türkiye ve Dünya"
], "🇹🇷");

konuEkle("12. Sınıf", "İngilizce", [
  "Music",
  "Friendship",
  "Human Rights",
  "Coming Soon",
  "Psychology",
  "Famous People",
  "Generations",
  "Alternative Energy",
  "Technology",
  "Manners"
], "🇬🇧");

/* =========================================================
   FONKSİYONLAR
   ========================================================= */

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
        new Date(b.date) -
        new Date(a.date)
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

/* =========================================================
   GLOBAL
   ========================================================= */

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

console.log(
  `DersCep: ${DERSCEP_NOTLARI.length} konu yüklendi.`
);
