```javascript
"use strict";

/*
==========================================================
 DERSCEP - MERKEZİ DERS NOTLARI
==========================================================

 Yapı:

 id
 title
 subject
 grade
 category
 unit
 description
 topics
 content
 important
 examples
 icon
 views
 featured
 date

 NOT:
 Bu dosya içerik merkezi olarak kullanılmaktadır.
 notlar.html -> kartları gösterir
 not.html     -> ayrıntılı notu gösterir

==========================================================
*/


const DERSCEP_NOTLARI = [

/* ======================================================
   5. SINIF MATEMATİK
====================================================== */

{
  id: "mat-5-sayilar",
  title: "Sayılar ve İşlemler",
  subject: "Matematik",
  grade: "5. Sınıf",
  category: "Ders Notu",
  unit: "Sayılar ve Nicelikler",
  description:
    "Doğal sayılar, basamak değeri, işlem önceliği ve temel sayı işlemleri.",
  topics: [
    "Doğal sayılar",
    "Basamak değeri",
    "Sayıların okunması",
    "Dört işlem",
    "İşlem önceliği"
  ],
  content:
    "Doğal sayılar günlük hayatta sayma ve sıralama amacıyla kullanılır. Bir doğal sayının her basamağının bulunduğu konuma göre farklı bir basamak değeri vardır. Matematiksel işlemlerde işlem sırasına dikkat edilmelidir.",
  important: [
    "Önce parantez içindeki işlemler yapılır.",
    "Çarpma ve bölme, toplama ve çıkarmadan önce yapılır.",
    "Aynı öncelikteki işlemler soldan sağa yapılır."
  ],
  examples: [
    "245 sayısında 4 rakamının basamak değeri 40'tır.",
    "12 + 3 × 4 işleminde önce çarpma yapılır: 12 + 12 = 24."
  ],
  icon: "🔢",
  views: 1520,
  featured: true,
  date: "2026-08-09"
},

{
  id: "mat-5-kesirler",
  title: "Kesirler",
  subject: "Matematik",
  grade: "5. Sınıf",
  category: "Konu Özeti",
  unit: "Sayılar ve Nicelikler",
  description:
    "Kesirlerin gösterimi, karşılaştırılması ve sayı doğrusu üzerindeki yerleri.",
  topics: [
    "Kesir",
    "Pay",
    "Payda",
    "Birim kesir",
    "Kesir karşılaştırma"
  ],
  content:
    "Bir bütünün eş parçalarından kaç tanesinin alındığını gösteren sayıya pay, bütünün kaç eş parçaya ayrıldığını gösteren sayıya payda denir. Kesirler sayı doğrusu üzerinde gösterilebilir.",
  important: [
    "Payda sıfır olamaz.",
    "Pay ve payda arasındaki ilişkiye dikkat edilmelidir."
  ],
  examples: [
    "3/5 kesrinde 3 pay, 5 paydadır.",
    "1/4 kesri 1/2 kesrinden küçüktür."
  ],
  icon: "🍕",
  views: 1280,
  featured: true,
  date: "2026-08-09"
},

{
  id: "mat-5-geometri",
  title: "Geometrik Şekiller",
  subject: "Matematik",
  grade: "5. Sınıf",
  category: "Ders Notu",
  unit: "Geometrik Şekiller",
  description:
    "Doğru, doğru parçası, açı ve temel geometrik şekiller.",
  topics: [
    "Nokta",
    "Doğru",
    "Doğru parçası",
    "Açı",
    "Üçgen",
    "Dörtgen"
  ],
  content:
    "Geometrik şekiller çevremizdeki nesneleri ve ilişkileri anlamamıza yardımcı olur. Nokta, doğru ve doğru parçası temel geometrik kavramlardır.",
  important: [
    "Doğru iki yönde sonsuza kadar uzanır.",
    "Doğru parçasının iki uç noktası vardır."
  ],
  examples: [
    "Bir cetvelin kenarı doğru parçasına örnek olarak düşünülebilir."
  ],
  icon: "📐",
  views: 970,
  featured: false,
  date: "2026-08-08"
},


/* ======================================================
   5. SINIF TÜRKÇE
====================================================== */

{
  id: "turkce-5-sozcuk-anlam",
  title: "Sözcükte Anlam",
  subject: "Türkçe",
  grade: "5. Sınıf",
  category: "Ders Notu",
  unit: "Sözcük ve Sözcük Öbekleri",
  description:
    "Sözcüklerin gerçek, mecaz ve terim anlamlarını öğren.",
  topics: [
    "Gerçek anlam",
    "Mecaz anlam",
    "Terim anlam",
    "Eş anlam",
    "Zıt anlam"
  ],
  content:
    "Sözcükler kullanıldıkları cümleye göre farklı anlamlar kazanabilir. Bir sözcüğün akla gelen ilk anlamı genellikle gerçek anlamdır. Gerçek anlamından uzaklaşarak kazandığı anlam mecaz anlam olarak adlandırılır.",
  important: [
    "Sözcüğün anlamını belirlerken cümledeki kullanımına bakılır.",
    "Terim anlam belirli bir bilim, sanat veya meslek alanına özgüdür."
  ],
  examples: [
    "Sıcak çay içtim. → Gerçek anlam.",
    "Sıcak bir gülümsemesi vardı. → Mecaz anlam."
  ],
  icon: "📖",
  views: 1420,
  featured: true,
  date: "2026-08-09"
},

{
  id: "turkce-5-cumle",
  title: "Cümlede Anlam",
  subject: "Türkçe",
  grade: "5. Sınıf",
  category: "Konu Özeti",
  unit: "Cümle Bilgisi",
  description:
    "Cümlelerin anlam özelliklerini ve temel düşünce ilişkilerini öğren.",
  topics: [
    "Neden-sonuç",
    "Amaç-sonuç",
    "Koşul",
    "Karşılaştırma",
    "Öznel ve nesnel ifadeler"
  ],
  content:
    "Cümleler arasında neden-sonuç, amaç-sonuç ve koşul gibi anlam ilişkileri kurulabilir. Bir cümlenin anlamını doğru belirlemek için cümlenin tamamına bakılmalıdır.",
  important: [
    "Neden-sonuç cümlelerinde bir olayın gerçekleşme nedeni bulunur.",
    "Amaç-sonuç cümlelerinde yapılmak istenen hedef belirtilir."
  ],
  examples: [
    "Yağmur yağdığı için maç ertelendi. → Neden-sonuç.",
    "Başarılı olmak için düzenli çalışıyor. → Amaç-sonuç."
  ],
  icon: "✍️",
  views: 1130,
  featured: false,
  date: "2026-08-08"
},


/* ======================================================
   5. SINIF FEN BİLİMLERİ
====================================================== */

{
  id: "fen-5-dunya-evren",
  title: "Dünya, Güneş ve Ay",
  subject: "Fen Bilimleri",
  grade: "5. Sınıf",
  category: "Ders Notu",
  unit: "Dünya ve Evren",
  description:
    "Dünya, Güneş ve Ay'ın temel özelliklerini ve hareketlerini öğren.",
  topics: [
    "Güneş",
    "Dünya",
    "Ay",
    "Ay'ın hareketleri",
    "Dünya'nın hareketleri"
  ],
  content:
    "Güneş bir yıldızdır ve Dünya için temel enerji kaynağıdır. Dünya Güneş'in etrafında dolanırken kendi ekseni etrafında da döner. Ay ise Dünya'nın doğal uydusudur.",
  important: [
    "Dünya'nın kendi ekseni etrafındaki hareketi gece ve gündüzün oluşmasında etkilidir.",
    "Ay Dünya'nın doğal uydusudur."
  ],
  examples: [
    "Gece ve gündüzün oluşmasının temel nedeni Dünya'nın kendi ekseni etrafında dönmesidir."
  ],
  icon: "🌍",
  views: 1180,
  featured: true,
  date: "2026-08-09"
},

{
  id: "fen-5-kuvvet",
  title: "Kuvvet ve Kuvvetin Ölçülmesi",
  subject: "Fen Bilimleri",
  grade: "5. Sınıf",
  category: "Ders Notu",
  unit: "Kuvvet ve Kuvvetin Ölçülmesi",
  description:
    "Kuvvetin cisimler üzerindeki etkileri ve kuvvetin ölçülmesi.",
  topics: [
    "Kuvvet",
    "İtme",
    "Çekme",
    "Dinamometre",
    "Kuvvetin birimi"
  ],
  content:
    "Kuvvet cisimlerin hareketini veya şeklini değiştirebilir. Kuvvet itme ya da çekme şeklinde uygulanabilir. Kuvvetin büyüklüğü dinamometre ile ölçülür.",
  important: [
    "Kuvvetin birimi Newton'dur.",
    "Kuvvet dinamometre ile ölçülür."
  ],
  examples: [
    "Kapıyı itmek bir itme kuvvetidir.",
    "Çekmeceyi kendimize doğru çekmek çekme kuvvetidir."
  ],
  icon: "💪",
  views: 1050,
  featured: false,
  date: "2026-08-07"
},


/* ======================================================
   5. SINIF SOSYAL BİLGİLER
====================================================== */

{
  id: "sosyal-5-birey-toplum",
  title: "Birey ve Toplum",
  subject: "Sosyal Bilgiler",
  grade: "5. Sınıf",
  category: "Ders Notu",
  unit: "Birey ve Toplum",
  description:
    "Bireyin toplum içindeki rolleri, hakları ve sorumlulukları.",
  topics: [
    "Birey",
    "Toplum",
    "Rol",
    "Hak",
    "Sorumluluk"
  ],
  content:
    "İnsanlar yaşamları boyunca farklı grupların içinde yer alır ve farklı roller üstlenir. Roller beraberinde bazı hak ve sorumluluklar getirir.",
  important: [
    "Haklarımız kadar sorumluluklarımız da vardır.",
    "Bir kişinin farklı ortamlarda farklı rolleri olabilir."
  ],
  examples: [
    "Bir öğrenci okulda öğrenci, evde ise aile bireyi rolünü üstlenebilir."
  ],
  icon: "👥",
  views: 850,
  featured: false,
  date: "2026-08-07"
},


/* ======================================================
   6. SINIF MATEMATİK
====================================================== */

{
  id: "mat-6-dogal-sayilar",
  title: "Doğal Sayılar ve İşlemler",
  subject: "Matematik",
  grade: "6. Sınıf",
  category: "Ders Notu",
  unit: "Sayılar ve Nicelikler",
  description:
    "Doğal sayılarla işlemler ve işlem özellikleri.",
  topics: [
    "Doğal sayılar",
    "Dört işlem",
    "İşlem önceliği",
    "Dağılma özelliği"
  ],
  content:
    "Doğal sayılarla yapılan işlemlerde işlem önceliği ve işlem özelliklerinin bilinmesi problem çözmeyi kolaylaştırır.",
  important: [
    "İşlem önceliğine dikkat edilmelidir.",
    "Dağılma özelliği parantezli işlemleri kolaylaştırabilir."
  ],
  examples: [
    "3 × (4 + 2) = 3 × 6 = 18."
  ],
  icon: "🔢",
  views: 920,
  featured: true,
  date: "2026-08-09"
},

{
  id: "mat-6-oran",
  title: "Oran",
  subject: "Matematik",
  grade: "6. Sınıf",
  category: "Konu Özeti",
  unit: "Sayılar ve Nicelikler",
  description:
    "İki çokluğun karşılaştırılmasında kullanılan oran kavramı.",
  topics: [
    "Oran",
    "Oran gösterimi",
    "Birim oran",
    "Çoklukların karşılaştırılması"
  ],
  content:
    "Oran, iki çokluğun birbirine bölünerek karşılaştırılmasıdır. Oran yazılırken karşılaştırılan çoklukların birimleri ve sıralaması dikkate alınır.",
  important: [
    "Oran iki çokluğu karşılaştırır.",
    "Birim oran bir çokluğun bir birime karşılık gelen miktarını ifade eder."
  ],
  examples: [
    "6 elmanın 3 elmaya oranı 6/3 = 2'dir."
  ],
  icon: "⚖️",
  views: 870,
  featured: false,
  date: "2026-08-08"
},


/* ======================================================
   7. SINIF MATEMATİK
====================================================== */

{
  id: "mat-7-tamsayilar",
  title: "Tam Sayılar",
  subject: "Matematik",
  grade: "7. Sınıf",
  category: "Ders Notu",
  unit: "Sayılar ve İşlemler",
  description:
    "Pozitif ve negatif tam sayılarla temel işlemler.",
  topics: [
    "Tam sayılar",
    "Pozitif sayılar",
    "Negatif sayılar",
    "Sayı doğrusu",
    "Tam sayılarla işlemler"
  ],
  content:
    "Tam sayılar pozitif doğal sayıları, negatif doğal sayıları ve sıfırı kapsar. Sayı doğrusunda sağa doğru gidildikçe sayılar büyür.",
  important: [
    "Pozitif sayılar sıfırdan büyüktür.",
    "Negatif sayılar sıfırdan küçüktür.",
    "Sıfır ne pozitif ne negatiftir."
  ],
  examples: [
    "-3 + 5 = 2.",
    "-4 - 2 = -6."
  ],
  icon: "➕",
  views: 1100,
  featured: true,
  date: "2026-08-09"
},

{
  id: "mat-7-cebir",
  title: "Cebirsel İfadeler",
  subject: "Matematik",
  grade: "7. Sınıf",
  category: "Ders Notu",
  unit: "Cebirsel Düşünme",
  description:
    "Değişken, terim, katsayı ve cebirsel ifade kavramları.",
  topics: [
    "Değişken",
    "Terim",
    "Katsayı",
    "Cebirsel ifade",
    "Benzer terimler"
  ],
  content:
    "Cebirsel ifadelerde bilinmeyen veya değişkenler harflerle gösterilebilir. Bir cebirsel ifade bir veya daha fazla terimden oluşabilir.",
  important: [
    "3x ifadesinde 3 katsayı, x değişkendir.",
    "Benzer terimler aynı değişken ve aynı kuvvet yapısına sahiptir."
  ],
  examples: [
    "3x + 2x = 5x.",
    "5a - 2a = 3a."
  ],
  icon: "𝑥",
  views: 980,
  featured: true,
  date: "2026-08-08"
},


/* ======================================================
   8. SINIF MATEMATİK
====================================================== */

{
  id: "mat-8-carpanlar",
  title: "Çarpanlar ve Katlar",
  subject: "Matematik",
  grade: "8. Sınıf",
  category: "Ders Notu",
  unit: "Sayılar",
  description:
    "Çarpan, kat, asal sayı, EBOB ve EKOK kavramları.",
  topics: [
    "Çarpan",
    "Kat",
    "Asal sayı",
    "EBOB",
    "EKOK"
  ],
  content:
    "Bir doğal sayıyı kalansız bölen doğal sayılara o sayının çarpanları denir. Asal sayının yalnızca iki pozitif çarpanı vardır.",
  important: [
    "2 en küçük asal sayıdır.",
    "1 asal sayı değildir.",
    "EBOB ortak bölenlerin en büyüğüdür.",
    "EKOK ortak katların en küçüğüdür."
  ],
  examples: [
    "12'nin pozitif çarpanları 1, 2, 3, 4, 6 ve 12'dir."
  ],
  icon: "🔢",
  views: 1540,
  featured: true,
  date: "2026-08-09"
},

{
  id: "mat-8-uslu",
  title: "Üslü İfadeler",
  subject: "Matematik",
  grade: "8. Sınıf",
  category: "Ders Notu",
  unit: "Üslü İfadeler",
  description:
    "Üslü ifadelerin anlamı ve temel işlem kuralları.",
  topics: [
    "Üslü ifade",
    "Taban",
    "Üs",
    "Çarpma",
    "Bölme"
  ],
  content:
    "Üslü ifadeler bir sayının kendisiyle tekrarlı çarpımını kısa biçimde göstermeye yarar. a üzeri n ifadesinde a taban, n ise üstür.",
  important: [
    "a üzeri 1 = a.",
    "Sıfırdan farklı bir sayının sıfırıncı kuvveti 1'dir.",
    "Aynı tabanlı üslü ifadeler çarpılırken üsler toplanır."
  ],
  examples: [
    "2³ = 2 × 2 × 2 = 8.",
    "2³ × 2² = 2⁵ = 32."
  ],
  icon: "²",
  views: 1870,
  featured: true,
  date: "2026-08-09"
},

{
  id: "mat-8-karekok",
  title: "Kareköklü İfadeler",
  subject: "Matematik",
  grade: "8. Sınıf",
  category: "Ders Notu",
  unit: "Kareköklü İfadeler",
  description:
    "Karekök kavramı, tam kare sayılar ve köklü ifadeler.",
  topics: [
    "Karekök",
    "Tam kare",
    "Köklü ifade",
    "Kök dışına çıkarma"
  ],
  content:
    "Bir sayının karekökü, karesi o sayıya eşit olan sayıdır. Pozitif tam kare sayıların karekökleri doğal sayıdır.",
  important: [
    "25'in karekökü 5'tir.",
    "Tam kare sayıları bilmek işlemleri kolaylaştırır."
  ],
  examples: [
    "√25 = 5.",
    "√36 = 6."
  ],
  icon: "√",
  views: 1430,
  featured: true,
  date: "2026-08-08"
},


/* ======================================================
   9. SINIF MATEMATİK
   TYMM 9. SINIF TEMALARI
====================================================== */

{
  id: "mat-9-sayilar",
  title: "Sayılar",
  subject: "Matematik",
  grade: "9. Sınıf",
  category: "Ders Notu",
  unit: "1. Tema: Sayılar",
  description:
    "Gerçek sayı yapısı, sayı kümeleri ve sayı işlemleri.",
  topics: [
    "Sayı kümeleri",
    "Gerçek sayılar",
    "Üslü ifadeler",
    "Köklü ifadeler",
    "Sayı ilişkileri"
  ],
  content:
    "Sayılar matematiğin temel yapı taşlarıdır. Doğal sayılar, tam sayılar, rasyonel sayılar ve irrasyonel sayılar gerçek sayıların farklı alt kümelerini oluşturur.",
  important: [
    "Doğal sayılar tam sayıların bir alt kümesidir.",
    "Rasyonel sayılar iki tam sayının oranı biçiminde yazılabilir.",
    "İrrasyonel sayılar kesir biçiminde tam olarak ifade edilemez."
  ],
  examples: [
    "5 doğal sayıdır.",
    "-3 tam sayıdır.",
    "1/2 rasyonel sayıdır."
  ],
  icon: "🔢",
  views: 2140,
  featured: true,
  date: "2026-08-09"
},

{
  id: "mat-9-nicelikler",
  title: "Nicelikler ve Değişimler",
  subject: "Matematik",
  grade: "9. Sınıf",
  category: "Ders Notu",
  unit: "2. Tema: Nicelikler ve Değişimler",
  description:
    "Değişkenler arasındaki ilişkileri ve matematiksel modelleri incele.",
  topics: [
    "Değişken",
    "İlişki",
    "Fonksiyon fikri",
    "Değişim",
    "Modelleme"
  ],
  content:
    "Matematikte birçok durum bir değişkenin başka bir değişkene bağlı olarak değişmesiyle açıklanabilir. Bu ilişkiler tablo, grafik veya cebirsel ifadelerle modellenebilir.",
  important: [
    "Değişkenler arasındaki ilişki farklı gösterimlerle ifade edilebilir.",
    "Grafikler değişimi görsel olarak incelemeyi sağlar."
  ],
  examples: [
    "Bir aracın zamana bağlı aldığı yol değişkenler arasındaki ilişkiye örnek olabilir."
  ],
  icon: "📈",
  views: 1290,
  featured: true,
  date: "2026-08-09"
},

{
  id: "mat-9-algoritma",
  title: "Algoritma ve Bilişim",
  subject: "Matematik",
  grade: "9. Sınıf",
  category: "Konu Özeti",
  unit: "3. Tema: Algoritma ve Bilişim",
  description:
    "Problem çözme, algoritma ve matematiksel düşünme ilişkisi.",
  topics: [
    "Algoritma",
    "Problem çözme",
    "Adım",
    "Akış",
    "Bilişim"
  ],
  content:
    "Algoritma bir problemi çözmek veya bir işi gerçekleştirmek için izlenen sıralı ve açık adımlardır. Matematiksel problem çözmede algoritmik düşünme kullanılabilir.",
  important: [
    "Algoritmadaki adımlar açık ve sıralı olmalıdır.",
    "Bir problemin çözümü parçalara ayrılabilir."
  ],
  examples: [
    "İki sayının toplamını bulmak için sayıları alıp toplamak ve sonucu yazdırmak basit bir algoritmadır."
  ],
  icon: "💻",
  views: 850,
  featured: false,
  date: "2026-08-08"
},

{
  id: "mat-9-geometri",
  title: "Geometrik Şekiller",
  subject: "Matematik",
  grade: "9. Sınıf",
  category: "Ders Notu",
  unit: "4. Tema: Geometrik Şekiller",
  description:
    "Geometrik şekillerin özellikleri ve temel geometrik ilişkiler.",
  topics: [
    "Üçgen",
    "Dörtgen",
    "Açı",
    "Doğru",
    "Geometrik ilişkiler"
  ],
  content:
    "Geometri şekillerin özelliklerini, açılarını, uzunluklarını ve birbirleriyle ilişkilerini inceler. Geometrik düşünmede şekiller arasındaki ilişkileri fark etmek önemlidir.",
  important: [
    "Bir üçgenin iç açıları toplamı 180 derecedir."
  ],
  examples: [
    "Bir üçgende iki açı 50° ve 60° ise üçüncü açı 70° olur."
  ],
  icon: "📐",
  views: 1130,
  featured: true,
  date: "2026-08-08"
},

{
  id: "mat-9-istatistik",
  title: "İstatistiksel Araştırma Süreci",
  subject: "Matematik",
  grade: "9. Sınıf",
  category: "Ders Notu",
  unit: "6. Tema: İstatistiksel Araştırma Süreci",
  description:
    "Veri toplama, düzenleme, yorumlama ve sonuç çıkarma.",
  topics: [
    "Veri",
    "Araştırma",
    "Tablo",
    "Grafik",
    "Yorumlama"
  ],
  content:
    "İstatistiksel araştırmalarda önce araştırma sorusu belirlenir. Daha sonra uygun veriler toplanır, düzenlenir, analiz edilir ve sonuçlar yorumlanır.",
  important: [
    "Araştırma sorusu açık ve anlaşılır olmalıdır.",
    "Verilerin nasıl toplandığı sonuçların güvenilirliğini etkiler."
  ],
  examples: [
    "Bir sınıftaki öğrencilerin günlük kitap okuma süreleri araştırma verisi olabilir."
  ],
  icon: "📊",
  views: 760,
  featured: false,
  date: "2026-08-07"
},

{
  id: "mat-9-olasilik",
  title: "Veriden Olasılığa",
  subject: "Matematik",
  grade: "9. Sınıf",
  category: "Konu Özeti",
  unit: "7. Tema: Veriden Olasılığa",
  description:
    "Olasılık düşüncesinin temel kavramları.",
  topics: [
    "Olasılık",
    "Olay",
    "Örnek uzay",
    "Deney",
    "Sonuç"
  ],
  content:
    "Olasılık bir olayın gerçekleşme ihtimalini ifade eder. Bir deneyin mümkün sonuçlarının tamamına örnek uzay denir.",
  important: [
    "Olasılık 0 ile 1 arasında değer alır.",
    "İmkânsız olayın olasılığı 0'dır.",
    "Kesin olayın olasılığı 1'dir."
  ],
  examples: [
    "Adil bir zar atıldığında 6 gelme olasılığı 1/6'dır."
  ],
  icon: "🎲",
  views: 920,
  featured: true,
  date: "2026-08-07"
},


/* ======================================================
   9. SINIF TÜRK DİLİ VE EDEBİYATI
====================================================== */

{
  id: "edebiyat-9-siir",
  title: "Şiir",
  subject: "Türk Dili ve Edebiyatı",
  grade: "9. Sınıf",
  category: "Ders Notu",
  unit: "Şiir",
  description:
    "Şiirin temel özellikleri, yapı unsurları ve şiir dili.",
  topics: [
    "Şiir",
    "Nazım",
    "Dize",
    "Kafiye",
    "Redif",
    "Ölçü"
  ],
  content:
    "Şiir duygu, düşünce ve hayallerin estetik bir dille ifade edildiği edebî türlerden biridir. Şiirde ses, ritim, anlam ve imge önemli bir yer tutar.",
  important: [
    "Dize şiirin temel yapı birimlerinden biridir.",
    "Kafiye ses benzerliğine dayanır.",
    "Redif görev ve anlam bakımından aynı olan ek veya kelimelerin tekrarına dayanır."
  ],
  examples: [
    "Aynı görevde kullanılan eklerin tekrarı redif olabilir."
  ],
  icon: "📖",
  views: 1875,
  featured: true,
  date: "2026-08-09"
},

{
  id: "edebiyat-9-edebi-sanatlar",
  title: "Edebî Sanatlar",
  subject: "Türk Dili ve Edebiyatı",
  grade: "9. Sınıf",
  category: "Ders Notu",
  unit: "Edebî Sanatlar",
  description:
    "Metinlerde anlatımı güçlendiren temel edebî sanatlar.",
  topics: [
    "Teşbih",
    "Kişileştirme",
    "Mecaz",
    "Abartma",
    "Edebî sanat"
  ],
  content:
    "Edebî sanatlar anlatımın etkisini ve estetik değerini artırmak amacıyla kullanılır. Benzetme ve kişileştirme en sık karşılaşılan sanatlar arasındadır.",
  important: [
    "Kişileştirmede insan dışındaki varlıklara insan özelliği verilir.",
    "Benzetmede iki varlık arasında ortak özellik üzerinden ilişki kurulur."
  ],
  examples: [
    "Rüzgâr bütün gece ağladı. → Kişileştirme."
  ],
  icon: "✍️",
  views: 1130,
  featured: true,
  date: "2026-08-08"
},


/* ======================================================
   9. SINIF FİZİK
====================================================== */

{
  id: "fizik-9-hareket",
  title: "Hareket ve Kuvvet",
  subject: "Fizik",
  grade: "9. Sınıf",
  category: "Ders Notu",
  unit: "Hareket ve Kuvvet",
  description:
    "Hareket, konum, sürat, hız ve kuvvet kavramlarının temelleri.",
  topics: [
    "Hareket",
    "Konum",
    "Sürat",
    "Hız",
    "Kuvvet"
  ],
  content:
    "Fizikte hareket bir cismin seçilen referans noktasına göre konumunun değişmesidir. Sürat alınan yolun zamana oranı olarak düşünülebilir.",
  important: [
    "Sürat = Alınan yol / Zaman.",
    "Hareket değerlendirilirken referans noktası önemlidir."
  ],
  examples: [
    "100 metreyi 20 saniyede alan bir cismin ortalama sürati 5 m/s'dir."
  ],
  icon: "⚡",
  views: 1437,
  featured: true,
  date: "2026-08-09"
},

{
  id: "fizik-9-enerji",
  title: "Enerji",
  subject: "Fizik",
  grade: "9. Sınıf",
  category: "Konu Özeti",
  unit: "Enerji",
  description:
    "Enerji, iş ve güç kavramlarının temel ilişkileri.",
  topics: [
    "Enerji",
    "İş",
    "Güç",
    "Kinetik enerji",
    "Potansiyel enerji"
  ],
  content:
    "Enerji iş yapabilme yeteneği olarak ifade edilir. Cisimlerin hareketlerinden veya konumlarından kaynaklanan farklı enerji türleri bulunabilir.",
  important: [
    "Kinetik enerji hareketten kaynaklanır.",
    "Potansiyel enerji konum veya durumdan kaynaklanabilir."
  ],
  examples: [
    "Hareket eden bir otomobilin kinetik enerjisi vardır."
  ],
  icon: "🔋",
  views: 841,
  featured: false,
  date: "2026-08-08"
},


/* ======================================================
   9. SINIF KİMYA
====================================================== */

{
  id: "kimya-9-atom",
  title: "Atom ve Periyodik Sistem",
  subject: "Kimya",
  grade: "9. Sınıf",
  category: "Ders Notu",
  unit: "Atom",
  description:
    "Atomun temel yapısı ve periyodik sistemin temel kavramları.",
  topics: [
    "Atom",
    "Proton",
    "Nötron",
    "Elektron",
    "Periyodik sistem"
  ],
  content:
    "Atom maddenin temel yapı taşlarından biridir. Atom çekirdeğinde proton ve nötronlar bulunurken elektronlar çekirdek çevresinde bulunur.",
  important: [
    "Proton pozitif yüklüdür.",
    "Elektron negatif yüklüdür.",
    "Nötron yüksüzdür."
  ],
  examples: [
    "Elektriksel olarak nötr bir atomda proton sayısı elektron sayısına eşittir."
  ],
  icon: "⚗️",
  views: 1092,
  featured: true,
  date: "2026-08-09"
},

{
  id: "kimya-9-madde",
  title: "Maddenin Yapısı ve Özellikleri",
  subject: "Kimya",
  grade: "9. Sınıf",
  category: "Konu Özeti",
  unit: "Madde",
  description:
    "Maddenin temel özellikleri ve hâlleri.",
  topics: [
    "Madde",
    "Katı",
    "Sıvı",
    "Gaz",
    "Tanecik modeli"
  ],
  content:
    "Maddeler tanecikli yapıdadır. Katı, sıvı ve gaz hâllerinde taneciklerin hareketleri ve aralarındaki boşluklar farklılık gösterir.",
  important: [
    "Katıların belirli şekli ve hacmi vardır.",
    "Sıvıların belirli hacmi vardır ancak belirli şekilleri yoktur.",
    "Gazlar bulundukları kabı doldurur."
  ],
  examples: [
    "Su katı hâlde buz, sıvı hâlde su ve gaz hâlde su buharı olarak bulunabilir."
  ],
  icon: "🧪",
  views: 900,
  featured: false,
  date: "2026-08-08"
},


/* ======================================================
   9. SINIF BİYOLOJİ
====================================================== */

{
  id: "biyoloji-9-hucre",
  title: "Hücre",
  subject: "Biyoloji",
  grade: "9. Sınıf",
  category: "Ders Notu",
  unit: "Hücre",
  description:
    "Hücrenin temel yapısı ve hücresel organizasyon.",
  topics: [
    "Hücre",
    "Hücre zarı",
    "Sitoplazma",
    "Çekirdek",
    "Organeller"
  ],
  content:
    "Hücre canlıların temel yapısal ve işlevsel birimidir. Hücreler farklı görevleri yerine getiren yapılara sahiptir.",
  important: [
    "Hücre zarı hücre ile çevresi arasındaki madde alışverişinde rol oynar.",
    "Çekirdek ökaryot hücrelerde genetik materyalin bulunduğu temel yapılardan biridir."
  ],
  examples: [
    "Bitki hücrelerinde hücre duvarı ve kloroplast gibi yapılar bulunabilir."
  ],
  icon: "🧬",
  views: 1219,
  featured: true,
  date: "2026-08-09"
},


/* ======================================================
   9. SINIF TARİH
====================================================== */

{
  id: "tarih-9-ilk-cag",
  title: "İlk Çağ Medeniyetleri",
  subject: "Tarih",
  grade: "9. Sınıf",
  category: "Ders Notu",
  unit: "İlk Çağ",
  description:
    "İlk Çağ'da ortaya çıkan önemli medeniyetler ve gelişmeler.",
  topics: [
    "İlk Çağ",
    "Mezopotamya",
    "Mısır",
    "Anadolu",
    "Medeniyet"
  ],
  content:
    "İlk Çağ boyunca farklı coğrafyalarda önemli medeniyetler ortaya çıkmıştır. Tarım, şehirleşme, yazının kullanılması ve devlet teşkilatlarının gelişmesi tarihsel süreçte önemli değişimler oluşturmuştur.",
  important: [
    "Yazının kullanılması tarihsel dönemlerin belirlenmesinde önemli bir dönüm noktasıdır.",
    "Mezopotamya önemli ilk medeniyet merkezlerinden biridir."
  ],
  examples: [
    "Sümerler yazının gelişiminde önemli bir yere sahiptir."
  ],
  icon: "🏛️",
  views: 978,
  featured: true,
  date: "2026-08-08"
},


/* ======================================================
   9. SINIF COĞRAFYA
====================================================== */

{
  id: "cografya-9-doga-insan",
  title: "Doğa ve İnsan",
  subject: "Coğrafya",
  grade: "9. Sınıf",
  category: "Ders Notu",
  unit: "Doğa ve İnsan",
  description:
    "Doğal çevre ile insan faaliyetleri arasındaki ilişki.",
  topics: [
    "Doğa",
    "İnsan",
    "Çevre",
    "Coğrafya",
    "Doğal sistemler"
  ],
  content:
    "Coğrafya doğal çevre ile insan arasındaki karşılıklı ilişkiyi inceler. İnsan faaliyetleri doğal çevreden etkilenirken doğal çevre de insan faaliyetlerinden etkilenebilir.",
  important: [
    "İnsan ve doğa arasında karşılıklı etkileşim vardır.",
    "Doğal kaynakların bilinçli kullanılması önemlidir."
  ],
  examples: [
    "Yer şekilleri ulaşım yollarının oluşturulmasını etkileyebilir."
  ],
  icon: "🌍",
  views: 734,
  featured: false,
  date: "2026-08-07"
},


/* ======================================================
   9. SINIF DİN KÜLTÜRÜ
====================================================== */

{
  id: "din-9-allah-insan",
  title: "Allah-İnsan İlişkisi",
  subject: "Din Kültürü",
  grade: "9. Sınıf",
  category: "Ders Notu",
  unit: "1. Ünite: Allah-İnsan İlişkisi",
  description:
    "İnsan, yaratılış, sorumluluk ve Allah ile ilişki konularının temel kavramları.",
  topics: [
    "İnsan",
    "Yaratılış",
    "Sorumluluk",
    "İrade",
    "Allah-insan ilişkisi"
  ],
  content:
    "İslam düşüncesinde insanın yaratılışı, sorumluluğu ve iradesi önemli konular arasındadır. İnsan yaptığı tercihlerden sorumlu bir varlık olarak ele alınır.",
  important: [
    "İnsanın sorumluluğu irade ve tercihleriyle ilişkilidir.",
    "Ahlaki davranışlarda niyet ve sorumluluk önemlidir."
  ],
  examples: [
    "Bir kişinin kendi isteğiyle yaptığı bir davranış, sorumluluk kavramı açısından değerlendirilir."
  ],
  icon: "🕌",
  views: 710,
  featured: false,
  date: "2026-08-07"
},


/* ======================================================
   10. SINIF MATEMATİK
====================================================== */

{
  id: "mat-10-sayilar",
  title: "Sayılar",
  subject: "Matematik",
  grade: "10. Sınıf",
  category: "Ders Notu",
  unit: "1. Tema: Sayılar",
  description:
    "10. sınıf matematikte sayı kavramları ve ilişkileri.",
  topics: [
    "Sayılar",
    "İşlemler",
    "Sayı ilişkileri",
    "Matematiksel ifadeler"
  ],
  content:
    "Sayılar matematiksel modelleme ve problem çözmenin temelini oluşturur. Sayılar arasındaki ilişkiler farklı matematiksel gösterimlerle incelenebilir.",
  important: [
    "İşlem yaparken tanım ve koşullar dikkate alınmalıdır."
  ],
  examples: [
    "Bir sayı ile onun mutlak değeri arasındaki ilişki sayı doğrusu üzerinden incelenebilir."
  ],
  icon: "🔢",
  views: 600,
  featured: true,
  date: "2026-08-06"
},

{
  id: "mat-10-geometrik-sekiller",
  title: "Geometrik Şekiller",
  subject: "Matematik",
  grade: "10. Sınıf",
  category: "Ders Notu",
  unit: "4. Tema: Geometrik Şekiller",
  description:
    "Geometrik şekillerin özellikleri ve geometrik ilişkiler.",
  topics: [
    "Üçgen",
    "Dörtgen",
    "Açı",
    "Uzunluk",
    "Geometrik ilişkiler"
  ],
  content:
    "Geometrik şekillerin özelliklerini incelemek için açı, uzunluk ve alan gibi niceliklerden yararlanılır.",
  important: [
    "Geometrik problemlerde verilenler ile istenen arasındaki ilişki kurulmalıdır."
  ],
  examples: [
    "Üçgenlerde açı ve kenar ilişkileri kullanılarak bilinmeyen ölçüler bulunabilir."
  ],
  icon: "📐",
  views: 570,
  featured: false,
  date: "2026-08-06"
},


/* ======================================================
   11. SINIF MATEMATİK
====================================================== */

{
  id: "mat-11-fonksiyon",
  title: "Fonksiyonlar",
  subject: "Matematik",
  grade: "11. Sınıf",
  category: "Ders Notu",
  unit: "Fonksiyonlar",
  description:
    "Fonksiyon kavramı ve fonksiyonların temel özellikleri.",
  topics: [
    "Fonksiyon",
    "Tanım kümesi",
    "Değer kümesi",
    "Görüntü",
    "Fonksiyon grafiği"
  ],
  content:
    "Fonksiyon, bir kümenin her elemanını başka bir kümede belirli bir elemanla eşleyen matematiksel ilişkidir.",
  important: [
    "Tanım kümesindeki her elemanın bir görüntüsü olmalıdır.",
    "Fonksiyonlar tablo, grafik veya cebirsel ifade ile gösterilebilir."
  ],
  examples: [
    "f(x)=2x fonksiyonu her x değeri için 2x değerini üretir."
  ],
  icon: "ƒ",
  views: 510,
  featured: true,
  date: "2026-08-05"
},


/* ======================================================
   12. SINIF MATEMATİK
====================================================== */

{
  id: "mat-12-limit",
  title: "Limit Kavramı",
  subject: "Matematik",
  grade: "12. Sınıf",
  category: "Ders Notu",
  unit: "Limit ve Süreklilik",
  description:
    "Limit kavramının temel mantığı ve fonksiyonların limit davranışları.",
  topics: [
    "Limit",
    "Fonksiyon",
    "Yaklaşım",
    "Süreklilik",
    "Limit işlemleri"
  ],
  content:
    "Limit, bir fonksiyonun bağımsız değişken belirli bir değere yaklaşırken fonksiyon değerinin hangi değere yaklaştığını inceleyen temel kalkülüs kavramlarından biridir.",
  important: [
    "Limit doğrudan fonksiyonun o noktadaki değerinden farklı olabilir.",
    "Limit kavramında yaklaşma davranışı önemlidir."
  ],
  examples: [
    "Bir fonksiyon x değeri 2'ye yaklaşırken 5'e yaklaşıyorsa limit 5 olarak ifade edilir."
  ],
  icon: "∞",
  views: 430,
  featured: true,
  date: "2026-08-05"
},


/* ======================================================
   10. SINIF TÜRK DİLİ VE EDEBİYATI
====================================================== */

{
  id: "edebiyat-10-hikaye",
  title: "Hikâye",
  subject: "Türk Dili ve Edebiyatı",
  grade: "10. Sınıf",
  category: "Ders Notu",
  unit: "Hikâye",
  description:
    "Hikâyenin yapı unsurları ve anlatım özellikleri.",
  topics: [
    "Olay",
    "Kişi",
    "Mekân",
    "Zaman",
    "Anlatıcı"
  ],
  content:
    "Hikâye yaşanmış veya yaşanabilecek olayları kısa biçimde anlatan edebî türlerden biridir. Olay, kişi, zaman ve mekân hikâyenin temel yapı unsurlarıdır.",
  important: [
    "Anlatıcı ile yazar aynı kişi olmak zorunda değildir.",
    "Olay örgüsü olayların belirli bir düzen içinde verilmesidir."
  ],
  examples: [
    "Bir hikâyede kahramanın yaşadığı olaylar olay örgüsünü oluşturabilir."
  ],
  icon: "📚",
  views: 420,
  featured: false,
  date: "2026-08-05"
},


/* ======================================================
   11. SINIF FİZİK
====================================================== */

{
  id: "fizik-11-kuvvet-hareket",
  title: "Kuvvet ve Hareket",
  subject: "Fizik",
  grade: "11. Sınıf",
  category: "Ders Notu",
  unit: "Kuvvet ve Hareket",
  description:
    "Kuvvet ve hareket arasındaki temel fizik ilişkileri.",
  topics: [
    "Kuvvet",
    "Hareket",
    "İvme",
    "Denge",
    "Newton yasaları"
  ],
  content:
    "Kuvvet, bir cismin hareket durumunu değiştirebilen etkidir. Newton yasaları kuvvet ile hareket arasındaki ilişkileri açıklamak için kullanılır.",
  important: [
    "Net kuvvet sıfırsa cismin hareket durumu değişmez.",
    "Kuvvet ve ivme arasında doğrudan ilişki vardır."
  ],
  examples: [
    "Net kuvvet uygulanan bir cismin hareket durumu değişebilir."
  ],
  icon: "⚡",
  views: 380,
  featured: false,
  date: "2026-08-04"
},


/* ======================================================
   12. SINIF FİZİK
====================================================== */

{
  id: "fizik-12-elektrik",
  title: "Elektrik ve Manyetizma",
  subject: "Fizik",
  grade: "12. Sınıf",
  category: "Ders Notu",
  unit: "Elektrik ve Manyetizma",
  description:
    "Elektriksel ve manyetik olayların temel kavramları.",
  topics: [
    "Elektrik",
    "Akım",
    "Gerilim",
    "Direnç",
    "Manyetik alan"
  ],
  content:
    "Elektrik devrelerinde akım, gerilim ve direnç arasındaki ilişkiler temel fizik konularındandır. Manyetik alanlar elektrik akımıyla ilişkili olarak incelenebilir.",
  important: [
    "Akım elektrik yüklerinin hareketiyle ilişkilidir.",
    "Direnç devrede akıma karşı gösterilen zorluğu ifade eder."
  ],
  examples: [
    "Basit bir devrede pil, iletken ve direnç gibi elemanlar bulunabilir."
  ],
  icon: "🔌",
  views: 350,
  featured: false,
  date: "2026-08-04"
},


/* ======================================================
   10. SINIF KİMYA
====================================================== */

{
  id: "kimya-10-kimyasal-tepkime",
  title: "Kimyasal Tepkimeler",
  subject: "Kimya",
  grade: "10. Sınıf",
  category: "Ders Notu",
  unit: "Kimyasal Tepkimeler",
  description:
    "Kimyasal tepkimelerin temel özellikleri ve tepkime gösterimleri.",
  topics: [
    "Kimyasal tepkime",
    "Girenler",
    "Ürünler",
    "Tepkime denklemi",
    "Kimyasal değişim"
  ],
  content:
    "Kimyasal tepkimelerde başlangıçtaki maddeler yeni maddelere dönüşür. Tepkimeler semboller ve formüller kullanılarak gösterilebilir.",
  important: [
    "Kimyasal tepkimelerde atom türleri korunur.",
    "Tepkime denklemleri uygun katsayılarla denkleştirilir."
  ],
  examples: [
    "Hidrojen ve oksijenin tepkimesi sonucunda su oluşabilir."
  ],
  icon: "🧪",
  views: 340,
  featured: false,
  date: "2026-08-04"
},


/* ======================================================
   11. SINIF BİYOLOJİ
====================================================== */

{
  id: "biyoloji-11-destek-hareket",
  title: "Destek ve Hareket Sistemi",
  subject: "Biyoloji",
  grade: "11. Sınıf",
  category: "Ders Notu",
  unit: "İnsan Fizyolojisi",
  description:
    "İnsan vücudundaki destek ve hareket sisteminin temel yapısı.",
  topics: [
    "Kemik",
    "Eklem",
    "Kas",
    "İskelet",
    "Hareket"
  ],
  content:
    "Destek ve hareket sistemi iskelet ve kaslardan oluşan yapılardan meydana gelir. Kemikler vücuda destek sağlarken kaslar hareketin gerçekleşmesine yardımcı olur.",
  important: [
    "İskelet vücuda destek sağlar.",
    "Kasların kasılıp gevşemesi hareketin oluşmasına katkı sağlar."
  ],
  examples: [
    "Kolun bükülmesi sırasında kaslar ve eklemler birlikte görev yapar."
  ],
  icon: "🦴",
  views: 300,
  featured: false,
  date: "2026-08-03"
},


/* ======================================================
   12. SINIF BİYOLOJİ
====================================================== */

{
  id: "biyoloji-12-genden-proteine",
  title: "Genden Proteine",
  subject: "Biyoloji",
  grade: "12. Sınıf",
  category: "Ders Notu",
  unit: "Genden Proteine",
  description:
    "Genetik bilginin aktarılması ve protein sentezinin temel mantığı.",
  topics: [
    "DNA",
    "Gen",
    "RNA",
    "Protein",
    "Genetik bilgi"
  ],
  content:
    "DNA canlıların kalıtsal bilgisini taşıyan temel moleküllerden biridir. Genetik bilginin kullanılması sonucunda hücrede çeşitli proteinlerin üretimi gerçekleşebilir.",
  important: [
    "DNA genetik bilginin temel taşıyıcısıdır.",
    "Proteinler canlılarda çok çeşitli görevler üstlenir."
  ],
  examples: [
    "Bir genin taşıdığı bilgi, belirli bir proteinin üretim sürecinde kullanılabilir."
  ],
  icon: "🧬",
  views: 290,
  featured: false,
  date: "2026-08-03"
}

];


/* ======================================================
   YARDIMCI FONKSİYONLAR
====================================================== */

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


/* ======================================================
   GLOBAL
====================================================== */

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
```
