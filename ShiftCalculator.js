
monthAndYear = document.getElementById("monthAndYear");
checkLabel = document.getElementById("checkLabel");
const sun = "sun_max_fill.jpg";
const moon = "moon_stars_fill.jpg";


const date1 = new Date();

let day1 = date1.getDate();
let month1 = date1.getMonth() + 1;
let year1 = date1.getFullYear();

dayCheck = document.getElementById("checkDay");
monthCheck = document.getElementById("checkMonth");
yearCheck = document.getElementById("checkYear");



// This arrangement can be altered based on how we want the date's format to appear.
const currentDate1 = month1 + "/" + day1 + "/" + year1;

//Alex End
//Print to page title
monthAndYear.innerHTML = "Currently: " + shiftFirstOutput(currentDate1);

//Alex shift calculation
function getShift(checkDate)
{
    //Calculate difference in days from reference date (March, 1, 2023)
    const referenceDate = new Date('3/1/2023');
    const checkDate1 = new Date(checkDate);
    const diffTime = Math.abs(checkDate1 - referenceDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    //Mod difference in days by 12 to calculate current day in cycle
    const dayInCycle = (diffDays + 1)%12;
    if(dayInCycle >= 0 && dayInCycle < 12)
    {
        return dayInCycle;
    }
}
function checkDate(){
    var m = document.getElementById("checkMonth");
    var monthText = m.options[m.selectedIndex].text;
    var d = document.getElementById("checkDay");
    var dayText = d.options[d.selectedIndex].text;
    var y = document.getElementById("checkYear");
    var yearText = y.options[y.selectedIndex].text;

    var currentCheckDate = monthText + "/" + dayText + "/" + yearText;
    checkLabel.innerHTML = "On " + currentCheckDate + " it will be Alex's " + shiftSecondOutput(currentCheckDate);
}
function shiftFirstOutput(checkDate)
{
    switch(getShift(checkDate))
    {
        case 1:
            return "1st Day Off";
            break;
        case 2:
            return "2nd Day Off";
            break;
        case 3:
            return "3rd Day Off";
            break;
        case 4:
            document.getElementById("flashImage").src = moon;
            return "1st Night Working";
            break;
        case 5:
            document.getElementById("flashImage").src = moon;
            return "2nd Night Working";
            break;
        case 6:
            document.getElementById("flashImage").src = moon;
            return "3rd Night Working";
            break;
        case 7:
            return "1st Day Off";
            break;
        case 8:
            return "2nd Day Off";
            break;
        case 9:
            return "3rd Day Off";
            break;
        case 10:
            document.getElementById("flashImage").src = sun;
            return "1st Day Working";
            break;
        case 11:
            document.getElementById("flashImage").src = sun;
            return "2nd Day Working";
            break;
        case 0:
            document.getElementById("flashImage").src = sun;
            return "3rd Day Working";
            break;
    }
}
function shiftSecondOutput(checkDate)
{
    switch(getShift(checkDate))
    {
        case 1:
            return "1st Day Off";
            break;
        case 2:
            return "2nd Day Off";
            break;
        case 3:
            return "3rd Day Off";
            break;
        case 4:
            document.getElementById("flashImage").src = moon;
            return "1st Night Working";
            break;
        case 5:
            document.getElementById("flashImage").src = moon;
            return "2nd Night Working";
            break;
        case 6:
            document.getElementById("flashImage").src = moon;
            return "3rd Night Working";
            break;
        case 7:
            return "1st Day Off";
            break;
        case 8:
            return "2nd Day Off";
            break;
        case 9:
            return "3rd Day Off";
            break;
        case 10:
            document.getElementById("flashImage").src = sun;
            return "1st Day Working";
            break;
        case 11:
            document.getElementById("flashImage").src = sun;
            return "2nd Day Working";
            break;
        case 0:
            document.getElementById("flashImage").src = sun;
            return "3rd Day Working";
            break;
    }
}
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}