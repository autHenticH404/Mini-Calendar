const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const daysElement = document.getElementById('days');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function renderCalendar() {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  monthElement.textContent = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(currentYear, currentMonth));
  yearElement.textContent = currentYear;

  let days = '';
  for (let i = 0; i < firstDayOfMonth; i++) {
    days += '<div class="day"></div>';
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const today = new Date().getDate() === i && new Date().getMonth() === currentMonth && new Date().getFullYear() === currentYear;
    days += `<div class="day${today ? ' today' : ''}">${i}</div>`;
  }

  daysElement.innerHTML = days;
}

prevMonthBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

renderCalendar();