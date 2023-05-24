
var monthAndYear = document.getElementById("monthAndYear");
var tomorrow = document.getElementById("tomorrow");
var yesterday = document.getElementById("yesterday");
var yesterdayLabel = document.getElementById("yesterdayLabel");
var tomorrowLabel = document.getElementById("tomorrowLabel");
var todayLabel = document.getElementById("todayLabel");


checkLabel = document.getElementById("checkLabel");
const sun = "sun_max_fill.png";
const moon = "moon_stars_fill.png";
const vacay = "Gift Fill.png";
var vacation = [new Date(2023, 7, 1), new Date(2023, 7, 2), new Date(2023, 7, 3),new Date(2023, 7, 7), new Date(2023, 7, 8),new Date(2023, 7, 9), new Date(2023, 6, 20), new Date(2023, 6, 21), new Date(2023, 6, 22)];

const date1 = new Date();
let firstFlag = false;
let day1 = date1.getDate();
let month1 = date1.getMonth() + 1;
let year1 = date1.getFullYear();

if(!firstFlag)
{
    dayCheck = document.getElementById("checkDay");
    monthCheck = document.getElementById("checkMonth");
    yearCheck = document.getElementById("checkYear");
    firstFlag = true;
}
// This arrangement can be altered based on how we want the date's format to appear.
const yesterdaysDate = month1 + "/" + (day1-1) + "/" + year1;
const currentDate1 = month1 + "/" + day1 + "/" + year1;
const tomorrowsDate = month1 + "/" + (day1+1) + "/" + year1;
//Print to page title
monthAndYear.innerHTML = shiftFirstOutput(currentDate1);
tomorrow.innerHTML = shiftFirstOutput(tomorrowsDate);
yesterday.innerHTML = shiftFirstOutput(yesterdaysDate);

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
    if(checkAgainstVacation(checkDate1))
    {
        return -1;
    }
    if(dayInCycle >= 0 && dayInCycle < 12)
    {
        console.log(checkDate + "\n " + dayInCycle);
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

    let currentCheckDate = new Date(yearText, m.selectedIndex, dayText);
    let yesterdayCheckDate = new Date(currentCheckDate);
    let tomorrowCheckDate = new Date(currentCheckDate);

    yesterdayCheckDate.setDate(currentCheckDate.getDate() - 1);
    console.log("Yesterday: " + yesterdayCheckDate);
    
    tomorrowCheckDate.setDate(currentCheckDate.getDate() + 1);
    console.log("Tomorrow: " + tomorrowCheckDate);

    //checkLabel.innerHTML = "On " + currentCheckDate + " it will be Alex's " + shiftSecondOutput(currentCheckDate);
    todayLabel.innerHTML = formatDateString(currentCheckDate);
    yesterdayLabel.innerHTML = formatDateString(yesterdayCheckDate);
    tomorrowLabel.innerHTML = formatDateString(tomorrowCheckDate);
    monthAndYear.innerHTML = shiftFirstOutput(currentCheckDate);
    tomorrow.innerHTML = shiftFirstOutput(tomorrowCheckDate);
    yesterday.innerHTML = shiftFirstOutput(yesterdayCheckDate);

}
function getMonthIndex(month)
{
    switch(month)
    {
        case "July":
            return 6;
    }
}
function formatDateString(dateToConvert)
{
    let tring = dateToConvert.getFullYear() + "/" + (dateToConvert.getMonth() + 1) + "/" + dateToConvert.getDate();
    return tring;
}
function shiftFirstOutput(checkDate)
{
    switch(getShift(checkDate))
    {
        case -1:
            //document.getElementById("flashImage").src = vacay;
            return "Vacation";
            break;
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
            //document.getElementById("flashImage").src = moon;
            return "1st Night Working";
            break;
        case 5:
            //document.getElementById("flashImage").src = moon;
            return "2nd Night Working";
            break;
        case 6:
            //document.getElementById("flashImage").src = moon;
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
            //document.getElementById("flashImage").src = sun;
            return "1st Day Working";
            break;
        case 11:
            //document.getElementById("flashImage").src = sun;
            return "2nd Day Working";
            break;
        case 0:
            //document.getElementById("flashImage").src = sun;
            return "3rd Day Working";
            break;
    }
}
function shiftSecondOutput(checkDate)
{
    switch(getShift(checkDate))
    {
        case -1:
           // document.getElementById("flashImage").src = vacay;
            return "Vacation";
            break;
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
           // document.getElementById("flashImage").src = moon;
            return "1st Night Working";
            break;
        case 5:
            //document.getElementById("flashImage").src = moon;
            return "2nd Night Working";
            break;
        case 6:
           // document.getElementById("flashImage").src = moon;
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
            //document.getElementById("flashImage").src = sun;
            return "1st Day Working";
            break;
        case 11:
            //document.getElementById("flashImage").src = sun;
            return "2nd Day Working";
            break;
        case 0:
            //document.getElementById("flashImage").src = sun;
            return "3rd Day Working";
            break;
    }
}
function addVacation(newDate)
{
    vacation.push(newDate);
}
function checkAgainstVacation(checkDate)
{
    for(let i = 0; i < vacation.length; i++)
    {
        if(vacation[i].valueOf() === checkDate.valueOf())
        {
            return true;
        }
        
    }
    return false;
}
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}