(() => {
  const app = document.getElementById("app");
  if (!app) return;

  const heading = document.createElement("h1");
  heading.textContent = "Hello zuzu";
  app.replaceChildren(heading);
})();
