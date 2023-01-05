import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/material_green.css');
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  btnEl: document.querySelector('button'),
  spanDayEl: document.querySelector('span[data-days]'),
  spanHoursEl: document.querySelector('span[data-hours]'),
  spanMinutesEl: document.querySelector('span[data-minutes]'),
  spanSecondsEl: document.querySelector('span[data-seconds]'),
};

refs.btnEl.addEventListener('click', onBtnClick);
refs.btnEl.disabled = true;
let userTime = new Date();

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (!(selectedDates[0] >= new Date())) {
      Notify.failure('Please choose a date in the future');
    }
    refs.btnEl.disabled = false;
    userTime = selectedDates[0];
  },
});

function onBtnClick() {
  refs.btnEl.disabled = true;

  intervalId = setInterval(() => {
    const time = convertMs(userTime - Date.now());

    if (userTime >= Date.now()) {
      refs.spanDayEl.textContent = time.days;
      refs.spanHoursEl.textContent = time.hours;
      refs.spanMinutesEl.textContent = time.minutes;
      refs.spanSecondsEl.textContent = time.seconds;
    } else {
      stop();
    }
  }, 1000);
}

function stop() {
  Notify.success('Time is over =)');
  clearInterval(intervalId);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
