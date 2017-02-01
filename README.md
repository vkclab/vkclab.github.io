# VKC Lab Website

## Contents

#### HTML (.html) pages

- index
- people
- photos
- publications
- etc
- contact

#### CSS (.css) files

- style (shared across all pages)
- index
- people
- photos
- publications
- etc
- contact

#### JavaScript (.js) files

- publications -- script to list all papers from JSON object (mentioned below)

#### JSON (.json) files

- contains a JSON object of all published papers; exported from a Google Spreadsheet titled "VKC Lab Publications (Web)"

=====

## Instructions for updating list of publications

_Each time you update the list of publications, you must also extract a JSON file and copy that into **publications.json**. You must then push the changes to **publications.json** to GitHub. Instructions for how to do so are below._

1. Open the Google Spreadsheet titled "VKC Lab Publications (Web)".

2. At the bottom are several "sheets" labeled in decreasing order, from 2016 to 2004.

  * If the publication you want to add is from a year that does not already have a sheet (e.g. when adding the first publication from 2017)...

    1. Create a sheet with that year and drag it to the front of the queue.
    2. Copy the first line from another sheet (the line with "Author, Title, ..."). __It is crucial tha tthe first line does not vary from sheet to sheet.__
    3. (Optional: Drag the thick line right below "A, B, C, ..." down by one cell, such that it's below the first line.)
    4. Enter the relevant information from the publication in the second line: Author, Title, Journal, Pages (if applicable), DOI, Google Scholar, and Epistemio.

  * If the year already exists in the sheets, insert a blank row between the first and second row, and add the relevant information from the publication: Author, Title, Journal, Pages (if applicable), DOI, Google Scholar, and Epistemio.

3. Towards the top of the spreadsheet is the menu ("File, Edit, View, ..."). The last option in the menu should be "Export JSON"; click on it, and then "Export JSON for all sheets." You may or may not need to give it permission to run the script.

  * (In case this doesn't work, the script was copied from [this GitHub Gist](https://gist.github.com/pamelafox/1878143), which should have more instructions on how to debug).

4. A window of the exported JSON should pop up. (These are the cells of each sheet converted into a JSON object.) Copy and paste this newly-generated JSON into the __publications.json__ file, _making sure to erase over the previous content_. (Otherwise you'd have duplicates.)

5. Add, commit, and then push the changes from publications.json to GitHub. The JavaScript file _publications.js_ should automatically properly format the JSON objects (which contains papers from each year) into a user-friendly listings on the Publications page.

=====