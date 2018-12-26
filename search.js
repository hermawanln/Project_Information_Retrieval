var docs = null;
var indices = null;
window.onload = function() {
  docs = getElem("documents");
  docs.innerHTML = JSON.stringify(startingDoc);
  indices = makeIndices(JSON.parse(docs.innerHTML));
}
var startingDoc = [
  {
    title:"Burung tidak bisa terbang dan sebutir telur",
    text: "Suatu hari, seekor burung yang sebatang kara dan tidak dapat terbang secara tidak sengaja menemukan sebutir telur yang tergeletak ditanah. Burung tersebut sangat senang dan membawa serta mengerami telur tersebut. Tidak lama kemudian menetaslah telur tersebut yang ternyata merupakan telur elang dan burung tersebut tetap merawat seperti anaknya sendiri.",
  },
  {
    title:"Elang yang sabar dan rajawali yang sombong",
    text:"Suatu hari, Ketika seekor elang bertengger di dahan pohon dan melihat keadaan sekitar datanglah seekor rajawali yang menertawai karena mengira elang sedang bermalas-malasan. Lalu pergilah si rajawali mencari tikus yang ada ditanah, si rajawali terbang sangat rendah karena mengira jika terbang rendah dapat lebih cepat menemukan tikus. Elang yang sudah mengamati keadaan sekitar telah mengincar seekor tikus yang ternyata juga dilihat oleh rajawali, lalu terbanglah sang elang memangsa tikus tersebut yang ternyata laju terbang elang lebih cepat dari rajawali."
  },
  {
    title:"Kancil si Pencuri Timun",
    text:"Kancil yang sangat kelaparan karena hutan mengering karena kemarau panjang dan banyak pohon yang ditebang oleh manusia untuk dijadikan rumah-rumah. Kancil yang sangat kelaparan akhirnya memberanikan diri mencuri timun yang ditanam oleh manusia. Pada saat kancil akan mencuri timun ternyata ada manusia yang mengawasi tanaman timun tersebut, dan pada akhirnya kancil tertangkap oleh manusia. "
  },
  {
    title:"Kura-Kura dan kekuatan kakinya",
    text:"Dahulu kala ada seekor kura-kura mencari buah yang sudah jatuh untuk dimakan. Kura-kura kebetulan bertemu dengan rusa dan si rusa mengejeknya karena mencari buah yang sudah jatuh ke tanah. Lalu karena merasa direndahkan kura-kura menantang rusa dengan adu tendang yang berakhir pada saat rusa jatuh ditendang kura-kura dan kura-kura tidak bergeser sedikitpun saat ditendang oleh rusa."
  },
  {
    title:"Kerja keras seorang keledai",
    text:"Pada zaman dahulu hiduplah seekor keledai yang memiliki pekerjaan menarik kereta barang, pada awalnya pemilik keledai selalu ditendang karena tidak kuat menarik kereta barang yang besarnya 4 kali dari keledai. Suatu saat saat pemilik pergi ke kota mengantar barang, sang pemilik melihat seekor sapi yang besarnya 3 kali besar keledai yang tidak kuat menarik kereta yang ukurannya lebih kecil dari sapi. Mulai saat itu si keledai diperlakukan dengan baik oleh pemiliknya. "
  },
  {
    title:"Sabuk raja sulaiman",
    text:"Pada suatu hari sang harimau sedang mengejar kancil yang akan dijadikan santapan oleh harimau. Secara tiba-tiba kancil berhenti dan memberi tahu harimau kalau ada sabuk raja sulaiman di ranting suatu pohon yang bisa menjadikan siapapun yang memakainya tidak perlu pergi mencari makanan karena makanan akan datang dengan sendirinya. Karena sudah sangat lapar dan malas mengejar si kancil, harimau akhirnya dengan cepat memakai sabuk tersebut yang ternyata adalah ular phyton."
  },
  {
    title:"Kancil yang menolong kerbau",
    text:"Pada suatu hari di pinggir sungai ada buaya yang tertimpa dahan pohon yang besar. kebetulan ada kerbau yang akan minum, kemudian buaya meminta tolong kepada kerbau agar mengangkat dahan yang besar. Saat kerbau akan mengangkat dahan muncullah kancil dan sang kancil langsung melarangnya karena kancil tau niat tersembunyi sang buaya yang akan memakan kerbau saat sudah ditolong."
  },
  {
    title:"Balapan antara kelinci dan kura-kura",
    text:"Pada zaman dahulu hiduplah kelinci yang sangat bangga dengan kelincahannya yang menjadikannya semakin sombong. Kelinci tersebut melihat kura-kura yang berjalan sangat pelan dan mengejek kura-kura. Kelinci dengan sombongnya menantang kura-kura dalam perlombaan lari, saat perlombaan kelinci melihat ada ladang wortel yang membuatnya mampir untuk mengambil wortel. Setelah kelinci kenyang dia memutuskan berhenti dulu dan menunggu agar bisa mengejek kura-kura, tetapi kelinci tertidur dan kura-kura memenangkan pertandingan tersebut. "
  },
  {
    title:"Si Bangau dan Si Parto | Balas Budi Si Burung Bangau",
    text:"Dahulu kala di suatu desa di tepi hutan, hidup seorang pemuda bernama Si Parto. Kerjanya mengambil kayu bakar di gunung dan menjualnya ke kota. Uang hasil penjualan dibelikannya makanan. Terus seperti itu setiap harinya. Hingga pada suatu hari ketika ia berjalan pulang dari kota ia melihat sesuatu yang menggelepar di atas hujan. Setelah di dekatinya ternyata seekor burung bangau yang terjerat diperangkap sedang meronta-ronta. Si Parto segera melepaskan perangkap itu. Bangau itu sangat gembira, ia berputar-putar di atas kepala Si Parto beberapa kali sebelum terbang ke angkasa. Karena cuaca yang sangat dingin, sesampainya di rumah, Si Parto segera menyalakan tungku api dan menyiapkan makan malam. Saat itu terdengar suara ketukan pintu di luar rumah."
  },
  {
    title:"Ikan Emas Ajaib dan Si Nenek Serakah",
    text:"Dahulu kala, di suatu desa terpencil, tinggalah sepasang kakek dan nenek yang miskin. Pekerjaan si kakek adalah mencari ikan di laut. Meski hampir setiap hari kakek pergi menjala ikan, namun hasil yang didapat hanya cukup untuk makan sehari-hari saja. Bahkan tidak jarang si kakek pulang dengan tangan hampa, namun itu semua dijalani si kakek dengan sabar."
  },
  {
    title:"Kisah Burung Pipit Berlidah Pendek",
    text:"Pada Zaman dahulu kala, di suatu desa kecil di Negara Jepang tinggalah sepasang kakek dan nenek. Kakek adalah seorang yang sangat baik hati dan pekerja keras. Sebaliknya nenek adalah seorang penggerutu dan senang mencaci maki, sikapnya juga kasar dan buruk. Itulah sebabnya kakek lebih suka menghabiskan waktunya dengan bekerja di ladang dari pagi hingga petang. Mereka tidak dikaruniai anak, tapi kakek memiliki seekor burung pipit yang selalu menghiburnya. Dia sangat cantik dan diberi nama Suzume. Kakek sangat menyayanginya. Setiap petang sepulangnya dari ladang, kakek akan membuka kandang Suzume, membiarkannya terbang di dalam rumah, lalu mengajaknya bermain, berbicara, dan mengajarinya trik-trik yang dengan cepat dipelajarinya."
  },
  {
    title:"Monyet dan Babi Hutan",
    text:"Di suatu hutan rimba hidup seekor Babi hutan yang pemurung. Ia mempunyai tetangga seekor Monyet yang mempunyai sifat sebaliknya. Monyet itu periang, banyak memiliki sahabat, serta pintar memberi nasihat. Karena senantiasa sedih dan murung, suatu hari Babi hutan pergi ke rumah Monyet."
  },
  {
    title:"Si Kancil dan Sekawanan Gajah",
    text:"Dongeng Si Kancil: Suatu hari di Hutan Pakis, Si Kancil tengah berjalan-jalan di tepian danau. Sambil bersiul dan berdendang keasyikan sambil makan buah mentimun kesukaannya. “Blusukkkk krik krik krik….byuuurrr!!!!” Sang Kancil tiba-tiba terperosok ke dalam sebuah sumur tua tatkala sedang berada di tepi hutan saat dalam perjalanan menuju Pantai Samas. Kabut masih tebal saat itu sehingga sumur tersebut tidak terlihat oleh Sang Kancil. Rupanya itu adalah sumur peninggalan Tarzan yang telah lama meninggalkan tempat itu untuk menjadi Tarzan Kota."
  }
];

function beginQuery() {
  docs = getElem("documents");
  indices =  makeIndices(JSON.parse(docs.innerHTML));
  var queryString = getElem("query").value;
  log("query string:");
  log(queryString);
  getElem("query").disabled = true;
  getElem("submitQuery").disabled = true;
  var listOfRelevantDocuments = [];
  var toSearch = queryString.split(" ");
  toSearch.forEach(function(s) {
    listOfRelevantDocuments.push(indices[s]);
  })
  log(listOfRelevantDocuments);

  getElem("query").disabled = false;
  getElem("submitQuery").disabled = false;
  displayResults(listOfRelevantDocuments);
}

function displayResults(results) {
  var resultDiv = getElem("searchResults");
  resultDiv.innerHTML = '';
  results.forEach(function(r){
    resultDiv.appendChild(document.createTextNode(r.toString()));
  })
}
// function validateDocument() {
//   console.log("val",  JSON.parse(docs.innerHTML));
// }

function makeIndices(doc){
  // log(docCount);
  var uniqWords = {};
  doc.forEach(function(d) {
    var wordsInDoc = d.text.split(' ');
    // log(wordsInDoc);
    for (j = 0; j < wordsInDoc.length; j++) {
      var currWord = wordsInDoc[j].toLowerCase();
      // log(currWord);
      if (uniqWords[currWord] == undefined){
        uniqWords[currWord] = [d.title];
      } else if (uniqWords[currWord].includes(d.title) == false) {
        uniqWords[currWord].push(d.title);
      }
    }
  });
  log(uniqWords);
  return uniqWords;
}

// utility functions and aliases

function log(text) {
  console.log(text);
}
function getElem(id) {
  return document.getElementById(id);
}
