const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date();
const currentDay = daysOfWeek[today.getDay()];

document.getElementById("currentDay").textContent = `Today is ${currentDay}`;

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById(
    "currentTime"
  ).textContent = `Current time is ${currentTime}`;
}

updateTime();
setInterval(updateTime, 1000);

const githubButton = document.getElementById("githubButton");

const githubRepo = "https://github.com/anshu-21/HNGxInternship";

githubButton.addEventListener("click", () => {
  window.location.href = githubRepo;
});
