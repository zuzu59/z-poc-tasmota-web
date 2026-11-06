---
---
(() => {
  const app = document.getElementById("app");
  if (!app) return;

  const heading = document.createElement("h1");
  heading.textContent = "Hello zuzu";
  app.replaceChildren(heading);

  const pageVersion = document.createElement("time");
  pageVersion.id = "page-version";
  pageVersion.setAttribute("aria-label", "Date et heure de génération de cette version");
  pageVersion.dateTime = "{{ site.time | date_to_xmlschema }}";
  pageVersion.textContent = "{{ site.time | date: '%d/%m/%y.%H%M%S' }}";
  document.body.append(pageVersion);
})();
