const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const dateItems = document.querySelectorAll('.deadline-format h4');

//let futureDate = new Date (2021, 4, 24, 46, 18, 0);
let tempDate = new Date ();

let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date (tempYear, tempMonth, tempDay + 5, 11, 30, 0);


const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();

giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// Future time in milliseconds
const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  const currentTime = new Date ().getTime();
  const remainingTime = futureTime - currentTime;

  // Get a day, an hour, and  a mimute all in milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  let daysRemaining = Math.floor(remainingTime/oneDay);
  let hoursRemaining = Math.floor((remainingTime%oneDay)/oneHour);
  let minutesRemaining = Math.floor((remainingTime%oneHour)/oneMinute);
  let secondsRemaining = Math.floor((remainingTime%oneMinute)/oneSecond);

  const dateValues = [daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining];

  const formatDateItem = (dateItem) => {
    if(dateItem < 10) {
      return dateItem = `0${dateItem}`
    }
    return dateItem;
  }

  dateItems.forEach((dateItem, index)=>{
    dateItem.innerHTML = formatDateItem(dateValues[index]);
  })

  if(remainingTime < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
  }
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();


