
/**************************************************
* Below is code for the FORMER MEMBERS tab
**************************************************/

// load json object once and lay everything out
// some elements will be hidden until others are clicked on
$.getJSON('https://vkclab.github.io/json/former.json', function(jsonData) {

    // bug-check: log JSON object in console
    // console.log(jsonData)

    // create rows of members' faces
    var faces = $( "#former_faces" );
    face_string = "<div>";
    for (var i = 0; i < jsonData.length; i++) {
        face_string += "<img class='icon' src='img/people/"+jsonData[i]['photo']+
                       "' alt='"+jsonData[i]['nameyear']+"' onclick='show_member("+i+")'>";
        if (i%8==0 && i>0) {
            face_string += "</div><div>";
        }
    }
    face_string += "</div>";
    console.log(face_string);
    faces.html(face_string);

    // create member-specific divs
    var former_details = $( "#former_details" );
    var ids = "";
    for (var i = 0; i < jsonData.length; i++) {
        ids += "<div id='former_member_"+i+"'></div>"
    }
    former_details.html(ids);

    // add details of a former lab member to their specific div
    for (var i = 0; i < jsonData.length; i++) {
        var details = $( "#former_member_"+i );
        var person = "<div class='row person'>";
        // photo column
        person += "<div class='col-sm-3'>";
        if ('photo' in jsonData[i]) {
            person += "<img src='img/people/" + jsonData[i]['photo'] + "'>";
        }
        person += "</div>"; // close photo column
        // words column
        person += "<div class='col-sm-9'>";
        // name, major
        person += "<p class='person_title'>" + jsonData[i]['nameyear'] + "</p>";
        console.log(jsonData[i]['nameyear'])
        person += "<p class='person_major'>" + jsonData[i]['majors'] + "</p>";
        // links
        if (('linkedin' in jsonData[i]) && ('website' in jsonData[i])) {
            person += "<p class='links'>";
            person += "<a href='" + jsonData[i]['linkedin'] + "'>LinkedIn</a>";
            person += " &#8226; ";
            person += "<a href='" + jsonData[i]['website'] + "'>Website</a>";
            person += "</p>";
        } else if ('linkedin' in jsonData[i]) {
            person += "<p class='links'>";
            person += "<a href='" + jsonData[i]['linkedin'] + "'>LinkedIn</a>";
            person += "</p>";
        } else if ('website' in jsonData[i]) {
            person += "<p class='links'>";
            person += "<a href='" + jsonData[i]['website'] + "'>Website</a>";
            person += "</p>";
        }
        // blurb
        person += "<p class='person_blurb'>" + jsonData[i]['blurb'] + "</p>";
        person += "</div>"; // close blurb column
        person += "</div>"; // close row div
        // add the former lab member to webpage, but hidden
        details.html(person).hide();
    }

});

// click on a member to show their details
function show_member(n) {
    for (i = 0; i < 100; i++) {
        var member = $( "#former_member_"+i );
        if (i==n) {
            member.show();
        } else {
            member.hide();
        }
    }
}