function setMonth(day){
    var month = day.getMonth();
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
function updateCalendarDays(day){
    const monthTotalDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var currentMonth = day.getMonth();
    var currentYear = day.getFullYear();

    var firstOfMonth = new Date(currentYear, currentMonth, 1, 1, 1, 1, 1);
    var dayFirstOfMonth = firstOfMonth.getDay(); // Gets the day of the week

    // This will be the first x squares of the calendar (ie last months days)
    var lastOfPrevMonth =  new Date(currentYear, currentMonth - 1,
                                monthTotalDays[currentMonth - 1], 1, 1, 1, 1);
    var dayLastOfPrevMonth =  lastOfPrevMonth.getDay(); // Gets the day of the
                                                       // week of the last day
                                                       // of the previous month
    var dayNum = 1;
    var prevMonthDayNum = monthTotalDays[currentMonth-1] - dayLastOfPrevMonth;
    var nextMonthDayNum = 1;

    for(var row = 0; row < 5; row++){
        for(var col = 0; col < 7; col++){

            // If we are before the start of the month then we take the last
            // months days and set to disabled
            if(col <= dayLastOfPrevMonth && row == 0 && dayFirstOfMonth !== 0){
                document.getElementById("" + row + " " + col).innerHTML = prevMonthDayNum;
                document.getElementById("" + row + " " + col).className = "day day--disabled"
                prevMonthDayNum++;

            }
            // The days of the current month
            else if(dayNum <= monthTotalDays[currentMonth]){
                document.getElementById("" + row + " " + col).innerHTML = dayNum;
                dayNum++;
            }
            // If we are after the start of the month then we take the next
            // months days and set to disabled
            else{
                document.getElementById("" + row + " " + col).innerHTML = nextMonthDayNum;
                document.getElementById("" + row + " " + col).className = "day day--disabled"
                nextMonthDayNum++;
            }

        }
    }
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
        updateCalendarDays(today);

        var len = 50;
        var count = 0;
        var lineReader = require('line-reader');

        document.getElementById('file').onchange = function(){

          var file = this.files[0];

          var reader = new FileReader();
          reader.onload = function(progressEvent){
            // Entire file
            //console.log(this.result);

            // By lines
            var lines = this.result.split('\n');
            for(var line = 0; line < lines.length; line++){
                console.log(lines[line]);
            }
          };
          reader.readAsText(file);
        };
        // lineReader.open('testcalfile.ics', function(err, reader) {
        //     for(;count !== 177;){
        //         if(err) throw error;
        //             if (reader.hasNextLine()) {
        //                 reader.nextLine(function(err, line) {
        //                     if(err) throw error;
        //                     console.log(line);
        //                     count++;
        //                 });
        //             }
        //             else{
        //                 reader.close(function(err) {
        //                     if(err) throw err;
        //                 });
        //             }
        //     }
        // });
}
