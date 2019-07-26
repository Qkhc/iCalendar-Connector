function setMonth(day){
    var month = day.getMonth();
    // Maybe add a monthDays [31, 28, 30...etc]
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    document.getElementById("monthID").innerHTML = monthNames[month];
}

function setYear(day){
    var year = day.getFullYear();
    document.getElementById("yearID").innerHTML = year;
}

/*
*   This function will read the current month and determine 
*   how the days should be alligned.
*   i.e In what column/row cell should the first and last of the month be 
*   as well as all the other days in between.
*   This should also set the empty cells before and after the first and last
*   of the month to the appropriate days of the previous and following month.
*   Example: The first of the month falls on a tuesday, the monday and sunday 
*   cells should be the last 2 days of the previous month. 
*/
function updateCalendarDays(){

}


// Main Skeleton
/*
Wait Refresh time
Check Current Month & Year
    Update Calendar Appropriately

Open ICS file
    if(line == "begin VEVENT")
        while(line != "end VEVENT")
            analyzeLine(line, object(VEVENT)) // This will take in the line and
                                              // put the appropriate info into
                                              // the object.
            next line
        put object into vevent array

    go through vevent array and insert items into current months days

*/
function main(){

    var today = new Date();
    setMonth(today);
    setYear(today);
    // updateCalendarDays();

    var lineReader = require('line-reader');
    var count = 0;

    lineReader.eachLine('testcalfile.ics', function(line, last) {
      console.log(line);
      count++;

      if (last) {
          //document.getElementById("yearID").innerHTML = line;

        return false; // stop reading
      }
    });

}
