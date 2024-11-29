fetch('https://raw.githubusercontent.com/nooralaakso/oppimistehtava3-JSON/refs/heads/main/palaveri.json')
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
        document.getElementById("palaveri").innerHTML =
            "<p>Tietoa ei pystytä hakemaan</p>";

    })

 

    function kerro(data) {
        var teksti = "";
        teksti += "<h1>Palaveri: " + data.palaveri.aihe + "</h1>";
        teksti += "<h2>Osallistujien määrä</h2>";
        teksti += "<p>" + data.palaveri.osallistujien_lukumäärä + " osallistujaa</p>";
        teksti += "<h2>Osallistujat</h2>";
        teksti += "<ul>";
        data.palaveri.osallistujat.forEach(function (osallistuja) {
            teksti += "<li>" + osallistuja + "</li>";
        });
        teksti += "</ul>";

        teksti += "<h2>Paikka</h2>";
        teksti += "<p>" + data.palaveri.paikka + "</p>";
        teksti += "<h2>Alkamisaika</h2>";
        teksti += "<p>" + data.palaveri.alkaminen + "</p>";
        teksti += "<h2>Kesto</h2>";
        teksti += "<p>" + data.palaveri.kesto + "</p>";

        document.getElementById("palaveri").innerHTML = teksti;

    }