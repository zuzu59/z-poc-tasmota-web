(() => {
  const app = document.getElementById("app");
  if (!app) return;

  const heading = document.createElement("h1");
  heading.textContent = "Hello zuzu";
  app.replaceChildren(heading);

  const clock = document.createElement("time");
  clock.id = "clock";
  clock.setAttribute("aria-label", "Date et heure locales du navigateur");
  document.body.append(clock);

  const pad = (value) => String(value).padStart(2, "0");
  const updateClock = () => {
    const now = new Date();
    const year = String(now.getFullYear()).slice(-2);
    clock.dateTime = now.toISOString();
    clock.textContent =
      `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${year}.` +
      `${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
  };

  updateClock();
  window.setInterval(updateClock, 1000);
})();
