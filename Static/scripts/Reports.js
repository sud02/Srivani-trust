$(document).ready(function() {
    var districtToMandals = {
        "Anakapalli": [
            "Nathnavaram", "Nakkapalli", "KKotapadu", "Kotauratla", "Cheedikada", 
            "Anakapalli", "S Rayavaram", "Yelamanchili", "Butchayyapeta", "Atchuthapuram",
             "Sabbavaram", "Makavarapalem", "Madugula", "Paravada", "Chodavaram", "Golugonda", 
             "Ravikamatham", "Rolugunta", "Devarapalli", "Kasimkota", "Rambilli", "Munagapaka",
              "Payakaraopeta", "Narsipatnam"],
        "Ananthapuram": [
            "Garladinne", "DHirehal", "Rayadurg", "Anantapur", "Tadipatri", 
            "Peddapappur", "Singanamala", "Atmakur", "Bommanahal", "Yadiki", 
            "Rapthadu", "Gooty", "Vidapanakal", "Narpala", "Beluguppa", 
            "Kundurpi", "Yellanur", "BKSamudram", "Brahmasamudram", "Settur", 
            "Guntakal", "Uravakonda", "Kanekal", "Kambadur", "Vairakarur", 
            "Pamidi", "Kudair", "Kalyanadurg", "Peddavaduguru", "Putlur", "Gummagatta"
        ],
        "Annamayya": [
            "Veeraballe", "Sambepalle", "Ramapuram", "TSundupalle", "Madanapalle",
            "Kalakada", "Valmikipuram", "Pullampeta", "Nimmanapalle", "Thamballapalle",
            "Gurramkonda", "Pedda Thippa-samudram", "Ramasamudram", "Penagalur", "Chitvel",
            "Pileru", "Chinnamandem", "Kambhamvaripalle", "Nandalur", "Mulakalacheruvu",
            "Rajampet", "Obulavaripalle", "Kodur", "Peddamandyam", "Kurabalakota",
            "Galiveedu", "Kalikiri", "Rayachoti", "BeerongiKothakota", "Lakkireddipalli"
        ],
        "Alluri Sitaram Raju District": [
            "Chinthapalli", "Paderu", "Y Ramavaram", "Hukumpeta", "Dumbriguda", 
            "Yetapaka", "Gangavaram", "Koyyuru", "Ananthagiri", "G Madugula", 
            "Vararamachandra-puram", "Pedabavalu", "Rajavommangi", "Addateegala", 
            "Munchingiputtu", "Araku Valley", "Devipatnam", "Chinturu", "GK Veedhi", 
            "Kunavaram", "Maredumilli", "Rampachodavaram"
        ],
        "Bapatla": [
            "Nizampatnam", "Karlapalem", "Parchur", "Bhattiprolu", "Vemuru", 
            "Martur", "Korisapadu", "Nagaram", "Amarthalur", "Santhamaguluru", 
            "Chinaganjam", "Vetapalem", "Karamchedu", "Pittalavanipalem", 
            "Cherukupalli", "Bapatla", "Yeddanapudi", "Ballikurava", "Addanki", 
            "Repalle", "Inkollu", "Chirala", "Tsunduru", "Kolluru", "JPangulur"
        ],
        "Chittoor": [
            "Kuppam", "Palamaner", "Bangarupalem", "Peddapanjani", "Yadamarri", 
            "Venkatagiri", "Kota", "Palasamudram", "Baireddipalle", "Penumur", 
            "Gangavaram", "Vedurukuppam", "Ramakuppam", "Chittoor", "Nindra", 
            "Santhipuram", "Thavanampalle", "Nagari", "Srirangarajapuram", 
            "Karvetinagar", "Puthalapattu", "Somala", "Vijayapuram", "Pulicherla", 
            "Gudupalle", "Gangadharanellore", "Sodam", "Punganuru", "Rompicherla", 
            "Irala", "Chowdepalle", "Gudipala"
        ],
        "East Godavari": [
            "Rajamahendra varam Rural", "Rajamahendra varam Urban", "Rajanagaram", 
            "Chagallu", "Rangampeta", "Seethanagaram", "Devarapalle", "Nidadavole", 
            "Tallapudi", "Gokavaram", "Nallajerla", "Kadiam", "Peravali", "Korukonda", 
            "Kovvur", "Undrajavaram", "Biccavolu", "Anaparthi", "Gopalapuram"
        ],
        "Eluru": [
            "Bheemadole", "Mandavalli", "Velairpadu", "Pedavegi", "Kamavarapukota", 
            "Jangareddigudem", "Nuzividu", "Lingapalem", "Jeelugu Milli", "Mudinepalle", 
            "TNarasapuram", "Chatrai", "Unguturu", "Kukunoor", "Musunuru", "Agiripalli", 
            "Polavaram", "Chintalapudi", "Koyyalagudem", "DwarakaTirumala", "Pedapadu", 
            "Kalidindi", "Denduluru", "Ganapavaram", "Buttayagudem", "Kaikaluru", "Eluru", 
            "Nidamarru"
        ],
        "Guntur": [
            "Pedakakani", "Tadepalli", "Chebrolu", "Vatticherukuru", "Prathipadu", 
            "Kollipara", "Mangalagiri", "Tadikonda", "Guntur West", "Phirangipuram", 
            "Thulluru", "Medikonduru", "Duggirala", "Ponnur", "Kakumanu", "Tenali", 
            "Pedanandipadu", "Guntur East"
        ],
        "Kakinada": [
            "Peddapuram", "Karapa", "Samalkota", "Sankhavaram", "Kakinada Urban", 
            "Kotananduru", "Prathipadu", "Pedapudi", "Rowthulapudi", "Pithapuram", 
            "Thondangi", "Kakinada Rural", "UKothapalli", "Yeleswaram", "Tallarevu", 
            "Kajuluru", "Gollaprolu", "Jaggampeta", "Tuni", "Kirlampudi", "Gadepalli"
        ],
        "Konaseema": [
            "Mamidikuduru", "Allavaram", "Mummidivaram", "Kapileswarapuram", 
            "Ramachandrapuram", "KGanagavaram", "Amalapuram", "Razole", "Uppalaguptam", 
            "Kothapeta", "Ambajipeta", "Sakhinetipalli", "Katrenikona", "Rayavaram", 
            "Mandapeta", "Alamuru", "Atreyapuram", "Malikipuram", "Ravulapalem", 
            "I Polavaram", "Ainavilli", "PGannavaram"
        ],
        "Krishna": [
            "Nagayalanka", "Koduru", "Pedaparupudi", "Avanigadda", "Gudivada", 
            "Pedana", "Pamarru", "Penamaluru", "Challapalli", "Bantumilli", 
            "Gudlavalleru", "Unguturu", "Bapulapadu", "Pamidimukkala", "Vuyyuru", 
            "Nandivada", "Guduru", "Ghantasala", "Movva", "Mopidevi", "Kruthivennu", 
            "Gannavaram", "Thotlavalluru", "Kankipadu", "Machilipatnam"
        ],
        "Kurnool": [
                "Gonegandla", "Mantralayam", "Nandavaram", "Veldurthy", "Peddakadubur", 
                "Kowthalam", "CBelagal", "Tuggali", "Gudur", "Kodumur", "Maddikera East", 
                "Halaharvi", "Devanakonda", "Holagunda", "Alur", "Kurnool Rural", "Aspari", 
                "Orvakal", "Krishnagiri", "Chippagiri", "Adoni", "Kurnool Urban", "Pattikonda", 
                "Kosigi", "Yemmiganur", "Kallur"
            ],
            "Parvathipuram Manyam": [
                "Gummalakshmipuram", "Jiyyammavalasa", "Garugubilli", "Pachipenta", "Seethampeta", 
                "Salur", "Kurupam", "Komarada", "Makkuva", "Parvathipuram", "Veeraghattam", 
                "Balijipeta", "Palakonda", "Bhamini", "Seethanagaram"
            ],
            "Nandyal": [
                "Nandyal", "Pamulapadu", "Srisailam", "Allagadda", "Atmakur", 
                "Midthur", "Bethamcherla", "Gospadu", "Nandikotkur", "Pagidyala", 
                "Koilakuntla", "Bandi Atmakur", "Owk", "Sanjamala", "Kothapalle", 
                "Mahanandi", "Gadivemula", "Panyam", "Dornipadu", "Chagalamarri", 
                "Peapully", "Dhone", "Banaganapalli", "Kolimigundla", "Sirvel", 
                "Jupadu Bunglow", "Rudravaram", "Velugodu", "Uyyalawada"
            ],
            "NTR District": [
                "Vilavawada", "Central Vijayawada", "West Veerullapadu", "Atlapragada", 
                "Konduru", "Vatsavai", "Nandigama", "Penuganchiprolu", "Reddigudem", 
                "Vijayawada East", "Tiruvuru", "Kanchikacherla", "Mylavaram", 
                "Ibrahimpatnam", "Gampalagudem", "Vissannapeta", "Vijayawada North", 
                "Gaddamanugu", "Konduru", "Chandarlapadu", "Jaggaiahpeta", "Vijayawada Rural"
            ],
            "Palnadu": [
                "Nekarikallu", "Rompicharla", "Bellamkonda", "Gurajala", "Savalyapuram", 
                "Chilakaluripet", "Veldurthy", "Machavaram", "Bollapalli", "Dachepalli", 
                "Macherla", "Edlapadu", "Atchampet", "Nadendla", "Piduguralla", 
                "Rentachintala", "Narasaraopet", "Rajupalem", "Karempudi", "Durgi", 
                "Vinukonda", "Pedakurapadu", "Sattenapalli", "Nuzendla", "Muppalla", 
                "Amaravathi", "Ipuru", "Krosuru"
            ],
            "Prakasam": [
                "Racherla", "Cumbum", "Donakonda", "Darsi", "Ongole", "Dornala", 
                "Konakanamitla", "Tangutur", "Ponnaluru", "Zarugumalli", "Kondapi", 
                "Ardhaveedu", "Kurichedu", "Markapuram", "Maddipadu", "Tarlupadu", 
                "Tripuranthakam", "Pullalacheruvu", "Chandrasekhara puram", "Santhanuthalapadu", 
                "Mundlamuru", "Singarayakonda", "Giddalur", "Komarolu", "Marripudi", 
                "Peddaaraveedu", "Bestavaripeta", "Yerragondapalem", "Pamur", "Pedacherlopalle", 
                "Podili", "Naguluppalapadu", "KothapatnamThallur", "Hanumanthunipadu", "Veligandla", 
                "Chimakurthy", "Kanigiri"
            ],
        "SPS Nellore": [
            "Nellore Rural", "Lingasamudram", "Rapur", "Thotapalli Gudur", "Jaladanki", 
            "Buchireddipalem", "Seetharamapuram", "Vinjamur", "Atmakur", "Muthukur", 
            "Kondapuram", "Podalakur", "Marripadu", "Sydapuram", "Kandukuru", "Kaluvoya", 
            "Varikuntapadu", "Manubolu", "Vidavalur", "Chejerla", "Voletivaripalem", 
            "Kaligiri", "Anumasamudrampeta", "Nellore Urban", "Venkatachalam", "Allur", 
            "Kavali", "Kodavalur", "Udayagiri", "Gudluru", "Bogole", "Dagadarthi", 
            "Ulavapadu", "Kovur", "Duttalur", "Ananthasagaram", "Sangam", "Indukurpet" 
        ],

 "Srikakulam": [
        "Burja", "Gara", "Ranastalam", "Meliaputti", "Hiramandalam", "Kotabommali", 
        "Kothuru", "Nandigam", "Jalumuru", "Palasa", "Saravakota", "Ponduru", 
        "Santhabommali", "Laveru", "Narasannapeta", "Pathapatnam", "Sarubujili", 
        "Kanchili", "Sompeta", "Ichchapuram", "Tekkali", "Kaviti", "Etcherla", 
        "Vajrapukotturu", "Srikakulam", "Ganguvarisigadam", "Laxminarasupeta", 
        "Mandasa", "Amadalavalasa", "Polaki"
    ],
    "Sri Satyasai": [
        "Ramagiri", "Kanaganipalli", "Agali", "Mudigubba", "Lepakshi", "Bathalapalli", 
        "Kothacheruvu", "Nallachervu", "Hindupur", "Tadimarri", "Tanakal", "Talupula", 
        "Dharmavaram", "Chennekothapalli", "Puttaparthi", "Bukkapatnam", "Penukonda", 
        "Amadagur", "Parigi", "Somandepalli", "Roddam", "Rolla", "Madakasira", "Nallamada", 
        "Gudibanda", "Kadiri", "O.D.Cheruvu", "Gorantla", "Chilamathur", "Gandlapenta", 
        "Amarapuram", "Nambulapulakunta"
    ],
    "Tirupati": [
        "Vadamalapet", "Tirupati Urban", "Ramachandrapuram", "Doravarisatram", "Yerpedu", 
        "Venkatagiri", "Ozili", "Balayapalli", "Varadaiahpalem", "Pakala", "Srikalahasti", 
        "Pichatur", "Puttur", "Renigunta", "Nagalapuram", "Satvavedu", "Chittamur", "Gudur", 
        "Naidupet", "Chinnagottigallu", "Thottambedu", "Buchi Naidu", "Kandriga", 
        "Narayanavanam", "Tirupati Rural", "Chillakur", "Vakadu", "Kumara Venkata Bhupala Puram", 
        "Yerravaripalem", "Sullurpeta", "Pellakur", "Kota", "Dakkili", "Chandragiri", "Tada"
    ],
    "Vizianagaram": [
        "Bondapalli",
        "Gantyada",
        "Vangara",
        "Cheepurupalli",
        "Mentada",
        "Jami",
        "Badangi",
        "Denkada",
        "Bhogapuram",
        "Regidi Amadalavalasa",
        "Rajam",
        "Kothavalasa",
        "Garividi",
        "Vepada",
        "Lakkavarapukota",
        "Srungavarapukota",
        "Vizianagaram",
        "Gajapathinagaram",
        "Gurla",
        "Bobbili",
        "Dattirajeru",
        "Poosapatirega",
        "Therlam",
        "Nellimarla",
        "Santhakaviti",
        "Ramabhadrapuram",
        "Merakamudidam"
    ],

    "Visakhapatnam": [
        "Gajuwaka",
        "Visakhapatnam Rural",
        "Padmanabham",
        "Anandapuram",
        "Gopalapatnam",
        "Maharanipeta",
        "Mulagada",
        "Seethammadhara",
        "Pedagantyada",
        "Pendurthi",
        "Bheemunipatnam"
    ],
"West Godavari": [
    "Tadepalligudem",
    "Tanuku",
    "Mogalthur",
    "Bhimavaram",
    "Yelamanchili",
    "Poduru",
    "Palacoderu",
    "Iragavaram",
    "Pentapadu",
    "Veeravasaram",
    "Penugonda",
    "Narasapuram",
    "Attili",
    "Penumantra",
    "Palacole",
    "Akividu",
    "Undi",
    "Achanta",
    "Kalla"
],
"YSR Kadapa": [
    "Kadapa",
    "Khajipeta",
    "Gopavaram",
    "Kalasapadu",
    "Simhadripuram",
    "Peddamudiam",
    "Kondapuram",
    "Badvel",
    "Atlur",
    "Veerapunayunipalle",
    "Chennur",
    "Sidhout",
    "Mylavaram",
    "Rajupalem",
    "Sri Avadhutha Kasi Nayana (SAKN)",
    "Brahmamgarimattam",
    "Lingala",
    "Proddutur",
    "Kamalapuram",
    "Thondur",
    "Pendlimarry",
    "Vallur",
    "Jammalamadugu",
    "Porumamilla",
    "Vempalli",
    "BKodur",
    "Yerraguntla",
    "Muddanur",
    "S Mydukur",
    "Chinthakommadinne",
    "Pulivendula",
    "Vemula",
    "Vontimitta",
    "Chakrayapet",
    "Duvvur",
    "Chapad"
]
    };

    var districtToColonies = {
        "Anakapalli": [
            "Pathavalabu",
            "SC colony- Arjunapeta",
            "SC Colony",
            "Thadaparthi",
            "Relli",
            "ST Konda Dora Colony",
            "Ayodhya Colony",
            "SC Relli Colony",
            "ST Colony"
        ],
        "Ananthapuram": [
            "Budaga Jangala Colony",
            "ST Colony",
            "SC Colony"
        ],
        "Annamayya": [
            "Ashok Nagar ST Colony",
            "Harijanavada",
            "Pedda Harijanawada",
            "SC Colony",
            "Cherlo Harijanawada",
            "Kotala",
            "Harijanawada",
            "ST Colony"
         ],
         "Alluri Sitaram Raju District": [
            "Chinthalagondi",
            "Darakonda Colony",
            "Bondru Guda",
            "Urisingi",
            "Pedduru",
            "Chinna Relangi Padu",
            "DV Kota",
            "Duppalavada",
            "Kakavada",
            "Valasi",
            "Gumma",
            "Gatthum",
            "Badimela",
            "Pathakondipalli",
            "Sc Colony",
            "Bullojupalem",
            "Allamputtu",
            "Singarala Padu",
            "Dakodu",
            "Bangaru Budi",
            "Chikilintha",
            "Doramamidi",
            "Valamuru Gondi",
            "Ujjangi",
            "Sunnampadu",
            "Kosuri Vari Veedhi",
            "Pindikonda",
            "panasa",
            "Madela",
            "Kunduluru",
            "Dirisinapalli",
            "Godugu Mamidi"
        ],

        "Bapatla": [
            "First ward Colony",
            "ST Colony",
            "Madiga Palle",
            "Sc Colony"
        ],

        "Chittoor": [
           "Ragi Samudram",
           "Sc Colony",
           "Bodhagutta Palli",
           "SC Colony Parvathi Nagar",
           "ST Colony",
           "SC Colony",
           "Vnuthalapalli"
        ],
        "East Godavari": [
            "Arundhati Colony",
            "Saradhanagar"
        ],
        "Eluru": [
            "Lankalapalli",
            "Harijanavada",
            "Arundhatipeta",
            "SC Colony",
            "Arjavari Gudem",
            "Yanadi Colony",
            "Harijanawada",
            "Ramanujapuram Colony",
            "Kunkala"
        ],
        
        "Guntur": [
            "Swarnandhra Nagara",
            "Harijanawada",
            "Yanadi Colony",
            "ST Colony"
        ],
        "Kakinada": [
            "Buradakota",
            "SC Colony",
            "Bouruvaka",
            "Fishermen Colony",
            "Pothabathulavari Colony",
            "ST colony"
        ],
        "Konaseema": [
            
        ],
        "Krishna": [],
        "Kurnool": [],
        "Parvathipuram Manyam": [],
        "Nandyal": [],
        "NTR District": [],
        "Palnadu": [],
        "Prakasam": [],
        "SPS Nellore": [],
        "Srikakulam": [],
        "Sri Satyasai": [],
        "Tirupati": [],
        "Vizianagaram": [],
        "Visakhapatnam": [],
        "West Godavari": [],
        "YSR Kadapa": []

    };

    $('#District').change(function() {
        var selectedDistrict = $(this).val();
        var mandals = districtToMandals[selectedDistrict] || [];
        var $mandalSelect = $('#Mandal');
        $mandalSelect.empty();
        $mandalSelect.append($('<option>').val("").text("Choose..."));

        $.each(mandals, function(_index, mandal) {
            $mandalSelect.append($('<option>').val(mandal).text(mandal));
        });
        var colonies = districtToColonies[selectedDistrict] || [];
        var $colonySelect = $('#Colony');
        $colonySelect.empty(); 
        $colonySelect.append($('<option>').val("").text("Select Colony"));
        $.each(colonies, function(_index, colony) {
            $colonySelect.append($('<option>').val(colony).text(colony));
    });
});
});
