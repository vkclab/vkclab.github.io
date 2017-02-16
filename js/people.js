$.getJSON('https://vkclab.github.io/json/people.json', function(jsonData) {

    // bug-check: log JSON object in console
    // console.log(jsonData)

    // section of webpage this script edits
    var div = $( ".content" );

    for (var i = 0; i < jsonData.length; i++) {

        var person = "<div class='row'>";

        person += "<div class='col-sm-3'>";
        if ('photo' in jsonData[i]) {
            person += "<img src='img/people/" + jsonData[i]['photo'] + "'>";
        }
        person += "</div>"; // close photo column

        person += "<div class='col-sm-9'>";
        person += "<p class='person_title'>" + jsonData[i]['nameyear'] + "</p>";
        if ('majors' in jsonData[i]) {
            person += "<p class='person_major'>" + jsonData[i]['majors'] + "</p>";
        }
        person += "<p class='person_blurb'>" + jsonData[i]['blurb'] + "</p>";
        person += "</div>" // close blurb column
        person += "</div>" // close row div

        // add person to webpage
        div.append(person);

    }
});