# Instructions for ETC page

The [etc.js](../js/etc.js) file currently contains the code for adding former lab members to the page. Other code modifying the events/protocols/links tabs may also be entered here.

----------

## Former members tab

1. __Part 1: UPDATING the list of former members__

  1. The instructions for this part are very similar to the __PART 1__ instructions in [publications.md](publications.md). The corresponding Google Spreadsheet file is "Former VKC Lab People (Web)".

  2. *__Note that it is CRUCIAL for the first line to match the keys specified in the etc.js file.__*

  3. Please check that each member's image file matches the one specified in the spreadsheet, e.g. that someone named Rosalind Franklin who has "former_rosalind.jpg" listed under the Photo column does have an image located at _img/people/former_rosalind.jpg_ .

  4. Images MUST BE SQUARE but may be of any size (recommended 600x600 px).

2. __Part 2: CHANGING the type of info listed about former members__

  1. The instructions for this part are very similar to the __PART 2__ instructions in [publications.md](publications.md). The corresponding JavaScript file is _etc.js_ .

  2. Please be careful when editing _etc.js_ . Bear in mind that there are two parts to the contents in the _Former Members_ tab: the headshots and the details. The code pulls from _former.json_ once but parses it twice: once to create the list of headshots, and another to create an (invisible) list of details on each lab member. Clicking on one headshot "shows" the details for that member and "hides" the details for all other members. __When editing _etc.js_ , Please be careful not to erase anything that contains "onclick()", since this is how the show/hide function works.