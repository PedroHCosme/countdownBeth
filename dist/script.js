document.addEventListener('DOMContentLoaded', () => {
  updateTime();
});

function updateTime() {
  // Target date: February 17th, 2024
  const targetDate = moment.tz("2024-02-19 22:40", "America/Sao_Paulo");
  console.log(targetDate);

  // Current date
  const currentDate = moment();

  // Calculate the difference between target and current dates
  const diff = targetDate.diff(currentDate);

  // Convert the difference to duration format
  const duration = moment.duration(diff);

  // Update the displayed time
  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  // Update CSS variables with the countdown values
  document.documentElement.style.setProperty('--timer-day', "'" + days + "'");
  document.documentElement.style.setProperty('--timer-hours', "'" + hours + "'");
  document.documentElement.style.setProperty('--timer-minutes', "'" + minutes + "'");
  document.documentElement.style.setProperty('--timer-seconds', "'" + seconds + "'");

  // Request animation frame for smooth animation
  requestAnimationFrame(updateTime);
}