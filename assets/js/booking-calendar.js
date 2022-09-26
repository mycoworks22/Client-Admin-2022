let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("booking-select-year");
let selectMonth = document.getElementById("booking-select-month");


let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// POPULATE CALENDAR ON LOAD TO SHOW THE CURRENT MONTH
let monthAndYear = document.getElementById("booking-month-year");
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

//POPULATE CALENDAR TABLE AND OPEN AVAILABLE SLOTS
function showCalendar(targetMonth, targetYear) {

  // what day of the week is the 1st day of the current month on
  let firstDay = (new Date(targetYear, targetMonth)).getDay();

  // get the calendar table and clear all previous cell data
  let tbl = document.getElementById("calendar-body"); // body of the calendar
  tbl.innerHTML = "";

  // adjust the calendar title to reflect the current month and date
  monthAndYear.innerHTML = months[targetMonth] + ", " + targetYear;

  // adjust select values to reflect the current month and date
  selectYear.value = targetYear;
  selectMonth.value = targetMonth;

  // set start of counting for the cells with this month and next month dates
  let date = 1;
  let nextMonthDate = 1;

  //determine what days of the previous month are visible
  let selectedYear = parseInt(selectYear.value);
  let selectedMonth = parseInt(selectMonth.value);
  let lastMonth;
  let lastMonthYear;
  //if statement to determine if previous month is in the same year as the currently selected month
  if(selectedMonth === 0){
    lastMonth = 11;
    lastMonthYear = selectedYear - 1;
  }
  else{
    lastMonth = selectedMonth - 1;
    lastMonthYear = selectedYear;
  }
  let lastMonthDays = new Date(lastMonthYear, lastMonth+1, 0).getDate(); //how many days in prev month
  let lastMonthDate = lastMonthDays - firstDay + 1; //how many days from last month are visible, what is the first visible date
  let lastMonthDateStart = lastMonthDate;


  // creating all cells
  for (let i = 0; i < 6; i++) {
    // creates a table row
    let row = document.createElement("tr");

    //creating individual cells, filing them up with data.
    for (let j = 0; j < 7; j++) {

        // days in prev months
        if (i === 0 && j < firstDay) {
              cell = document.createElement("td");
              cell.className = "days days--last";
              cellText = document.createTextNode(lastMonthDateStart);
              cell.appendChild(cellText);
              row.appendChild(cell);

              lastMonthDateStart++;
        }

        // days in next month
        else if (date > daysInMonth(month, year)) {
          cell = document.createElement("td");
          cell.className = "days days--next";
          cellText = document.createTextNode(nextMonthDate);
          cell.appendChild(cellText);
          row.appendChild(cell);
          nextMonthDate++;
        }

        // days in this months
        else {
              cell = document.createElement("td");
              cellText = document.createTextNode(date);
              cell.className = "days days--this";
              // color today's date
              if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                cell.className = "days days--this days--today";
              }

              cell.appendChild(cellText);
              row.appendChild(cell);
              date++;
        }

    }

    tbl.appendChild(row); // appending each row into calendar body.
  }

   //OPEN AVAILABLE SLOTS
   let currentMonthDates = document.querySelectorAll(".days--this");

   currentMonthDates.forEach(function (date) {

      date.addEventListener('click', e => {
         currentMonthDates.forEach(e => e.classList.remove("days--clicked"));
         date.classList.add("days--clicked");

         let slots = document.querySelector(".calendarSlots");
         slots.style.display = "flex";
      })

   });
}

function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}


// SHOW/HIDE BOOKING STAGES
let stage1 = document.querySelector(".bookingWrap--1");
let stage2 = document.querySelector(".bookingWrap--2");
let stage3 = document.querySelector(".bookingWrap--3");

let stage2Btn = document.querySelector("#toBookingStage2");
let stage3Btn = document.querySelector(".confirmBooking");

stage2Btn.addEventListener('click', e => {
   stage1.style.display = "none";
   stage2.style.display = "block";
})

stage3Btn.addEventListener('click', e => {
   stage2.style.display = "none";
   stage3.style.display = "block";
})