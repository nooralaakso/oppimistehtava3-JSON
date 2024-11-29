fetch('https://raw.githubusercontent.com/nooralaakso/oppimistehtava3-JSON/refs/heads/main/digicafe.json') 
// Muunnetaan vastaus JSON muotoon 
.then(function (response) { 
return response.json(); 
})
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {
    // Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro(responseJson);

})
// Jos tuli jokin virhe 
.catch(function (error) { 
document.getElementById("vastaus").innerHTML =  
"<p>Tietoa ei pystytä hakemaan</p>"; 
})

function kerro(data) {
    //Muuttuja teksti, johon tulostettava tieto kerätään
    var teksti = "";
    teksti += "<h1>" + data.yritys + "</h1>";
    teksti += "<h2>Yhteustiedot</h2>";
    teksti += "<p>Osoite: " + data.yhteystiedot.osoite  + "</p>";
    teksti += "<p>Puhelin: " + data.yhteystiedot.puhelin + "</p>";
    teksti += "<p>Email: " + data.yhteystiedot.email + "</p>";

    teksti += "<h2>Tuotteet</h2>";
    teksti += "<ul>";
    data.tuotteet.forEach(function(tuote){
        teksti += "<li>" + tuote + "</li>";
    });
    teksti += "</ul>";

    teksti += "<h2>Henkilökunta</h2>";
    teksti += "<ul>";
    data.henkilokunta.forEach(function (hlo) {
        teksti += "<li>" + hlo.nimi + " (" + hlo.titteli + ")</li>";
    });
    teksti += "</ul>";

    //Tulostus sivulle
    document.getElementById("vastaus").innerHTML = teksti;
}