function clicked(){
    document.getElementById("monthID").innerHTML = "December";
    document.getElementById("yearID").innerHTML = "2019";
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
    var month = today.getMonth();
    var year = today.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    document.getElementById("monthID").innerHTML = monthNames[month];
    document.getElementById("yearID").innerHTML = year;



}
