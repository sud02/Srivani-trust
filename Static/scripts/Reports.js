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
        "Eluru": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "Guntur": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "Kakinada": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "Konaseema": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "Krishna": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "Kurnool": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "Parvathipuram Manyam": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "Nandyal": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "NTR District": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "Palnadu": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "Prakasam": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "SPS Nellore": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "Srikakulam": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "Sri Satyasai": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "Tirupati": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "Vizianagaram": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "Visakhapatnam": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "West Godavari": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "YSR Kadapa": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    
        
    };

    var districtToColonies = {
        "Anakapalli": ["", "", ""],
        "Ananthapuram": ["", "", ""],

    };

    $('#District').change(function() {
        var selectedDistrict = $(this).val();
        var mandals = districtToMandals[selectedDistrict] || [];
        var $mandalSelect = $('#Mandal');
        $mandalSelect.empty();
        $mandalSelect.append($('<option>').val("").text("Choose..."));

        $.each(mandals, function(index, mandal) {
            $mandalSelect.append($('<option>').val(mandal).text(mandal));
        });

        var colonies = districtToColonies[selectedDistrict] || [];
        var $colonySelect = $('#Colony');
        $colonySelect.empty(); 
        $colonySelect.append($('<option>').val("").text("Select Colony"));
        $.each(colonies, function(index, colony) {
            $colonySelect.append($('<option>').val(colony).text(colony));
    });
});
});

