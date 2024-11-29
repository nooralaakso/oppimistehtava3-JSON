fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/Varhaiskasvatus')
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
        var teksti = "";

        teksti += "<h1>Työpaikat</h1>";
        teksti += "<ul>";

        data.forEach(function (tyopaikka) {
            teksti += "<li>";
            teksti += "<p>Työtehtävä: " + tyopaikka.tyotehtava + "</p>";
            teksti += "<p>Osoite: " + tyopaikka.osoite + "</p>";
            teksti += "<p><a href='" + tyopaikka.linkki + "' target='_blank'>Linkki työpaikkailmoitukseen</a></p>";
            teksti += "<br>";
            teksti += "</li>";

        });

   

        teksti += "</ul>";

   

        document.getElementById("vastaus").innerHTML = teksti;

    }