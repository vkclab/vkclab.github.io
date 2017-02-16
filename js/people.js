$.getJSON('https://vkclab.github.io/json/people.json', function(jsonData) {

    // bug-check: log JSON object in console
    // console.log(jsonData)

    // section of webpage this script edits
    var div = $( ".content" );

    for (var i = 0; i < jsonData.length; i++) {

        var person = "<div class='row'>";

        person += "<div class='col-sm-4'>";
        if ('photo' in jsonData[i]) {
            person += "<img src='../img/people/" + jsonData[i]['photo'] + "'>";
        }
        person += "</div>"; // close photo column

        person += "<div class='col-sm-8'>";

        person += "<p class='person_title'>" + jsonData[i]['nameyear'];
        if ('major' in jsonData[i]) {
            person += "<span class='person_major'>" + jsonData[i]['major'] + "</span>";
        }
        person += "</p>";
        person += "<p class='person_blurb'>" + jsonData[i]['nameyear'] + "</p>";

        person += "</div>" // close blurb column
        person += "</div>" // close row div

        // add person to webpage
        div.append(person);

    }
});