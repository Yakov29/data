const time = prompt("Запишите дату в инпут! Пример: January 1 2029");

function startCountdownTimer({ selector, targetDate }) {
  const timer = document.querySelector(selector);
  const refs = {
    days: timer.querySelector('[data-value="days"]'),
    hours: timer.querySelector('[data-value="hours"]'),
    mins: timer.querySelector('[data-value="mins"]'),
    secs: timer.querySelector('[data-value="secs"]'),
  };

  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const timeDiff = targetDate - currentTime;

    if (timeDiff <= 0) {
      clearInterval(intervalId);
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((timeDiff % (1000 * 60)) / 1000);

    updateTimerFace(refs, days, hours, mins, secs);
  }, 1000);
}

function updateTimerFace(refs, days, hours, mins, secs) {
  refs.days.textContent = days < 10 ? `0${days}` : days;
  refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
  refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
  refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
}

startCountdownTimer({
  selector: "#timer-1",
  targetDate: new Date(`${time}`),
});
