let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("booking-select-year");
let selectMonth = document.getElementById("booking-select-month");
let monthAndYear = document.getElementById("booking-month-year");

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// POPULATE CALENDAR ON LOAD TO SHOW THE CURRENT MONTH
showCalendar(currentMonth, currentYear);

//NEXT MONTH
function bookingCalendarNextMonth() {
  // if current month is december
  if(currentMonth === 11){
    currentYear = currentYear + 1;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
  }
  else{
    currentMonth = currentMonth + 1;
    showCalendar(currentMonth, currentYear);
  }
}

//PREV MONTH
function bookingCalendarPrevMonth() {
  // if current month is january
  if(currentMonth === 0){
    currentYear = currentYear - 1;
    currentMonth = currentMonth + 11;
    showCalendar(currentMonth, currentYear);
  }
  else{
    currentMonth = currentMonth - 1;
    showCalendar(currentMonth, currentYear);
  }
}

//JUMP TO SELECTED MONTH AND YEAR
function bookingCalendarJump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

// FUNCTION TO DETERMINE HOW MANY DAYS IN A MONTH
function daysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
}

//POPULATE CALENDAR TABLE
function showCalendar(targetMonth, targetYear) {

  // 1. get the calendar table and clear all previous cell data
  let tbl = document.getElementById("calendar-body"); // body of the calendar
  tbl.innerHTML = "";

  // 2. adjust the calendar title to reflect the current month and date
  monthAndYear.innerHTML = months[targetMonth] + ", " + targetYear;

  // 3. adjust the select values to reflect the current month and date
  selectYear.value = targetYear;
  selectMonth.value = targetMonth;

  // 4. current and next month start on
  let date = 1;
  let nextMonthDate = 1;

  // 5. what day of the week is the 1st day of the current month on
  let firstDay = (new Date(targetYear, targetMonth, 1)).getDay();

  // 6. how many days in the current month
  let currentMonthDays = daysInMonth(targetMonth, targetYear);

  // 7. determine what is the previous month and what year it belongs to
  let selectedYear = parseInt(selectYear.value);
  let selectedMonth = parseInt(selectMonth.value);
  let lastMonth;
  let lastMonthYear;
  if(selectedMonth === 0){
    lastMonth = 11;
    lastMonthYear = selectedYear - 1;
  }
  else{
    lastMonth = selectedMonth - 1;
    lastMonthYear = selectedYear;
  }

  // 7. how many days in the previous month - how many are visible
  let lastMonthDays = new Date(lastMonthYear, lastMonth+1, 0).getDate();
  let lastMonthStartDate;
  let lastMonthVisibleDays;
  if(firstDay===0){
    lastMonthStartDate = lastMonthDays - 6;
    lastMonthVisibleDays = 6;
  }
  else{
    lastMonthStartDate = lastMonthDays - firstDay + 2;
    lastMonthVisibleDays = firstDay - 1;
  }

  // 9. determine how many weeks are visible
  let visibleWeeks = Math.ceil((lastMonthDays - lastMonthStartDate + 1 + currentMonthDays) / 7);

  // 10. creating and populate all cells
  for (let i = 0; i < visibleWeeks; i++) {

    // creates a table row
    let row = document.createElement("tr");

    //creates cells and populate them with data
    for (let j = 0; j < 7; j++) {

      // visible days from the month before
      if (i === 0 && j < lastMonthVisibleDays) {
        cell = document.createElement("td");
        cell.className = "days days--inactive";
        cellText = document.createTextNode(lastMonthStartDate);
        cell.appendChild(cellText);
        row.appendChild(cell);

        lastMonthStartDate++;
      }

      // visible days from the following month
      else if (date > currentMonthDays) {
        cell = document.createElement("td");
        cell.className = "days days--inactive";
        cellText = document.createTextNode(nextMonthDate);
        cell.appendChild(cellText);
        row.appendChild(cell);
        nextMonthDate++;
      }

      // days in this months
      else {
        cell = document.createElement("td");
        cellText = document.createTextNode(date);

        let whatDay = (new Date(targetYear, targetMonth, date)).getDay();

        // if this day of the month has already passed
        if(date < today.getDate() && targetYear === today.getFullYear() && targetMonth === today.getMonth()){
          cell.className = "days days--inactive";
        }
        // if weekend day
        else if(whatDay === 6 || whatDay === 0) {
          cell.className = "days days--inactive";
        }
        // if the date is today
        else if(date === today.getDate() && targetYear === today.getFullYear() && targetMonth === today.getMonth()) {
          cell.className = "days days--active days--today";
        }
        else{
          cell.className = "days days--active";
        }

        cell.appendChild(cellText);
        row.appendChild(cell);
        date++;
      }
    }

    // appending each new row to the calendar body
    tbl.appendChild(row);

  }

}



