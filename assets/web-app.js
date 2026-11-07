---
---
(() => {
  const app = document.getElementById("app");
  if (!app) return;

  const heading = document.createElement("h1");
  heading.textContent = "Hello zuzu";

  const sensors = document.createElement("section");
  sensors.id = "sensors";
  sensors.setAttribute("aria-label", "Mesures du capteur HTU21D");

  const readings = [
    { key: "Temperature", label: "Température", unit: "°C" },
    { key: "Humidity", label: "Humidité", unit: "%" },
    { key: "DewPoint", label: "Point de rosée", unit: "°C" },
  ];

  for (const reading of readings) {
    const card = document.createElement("article");
    card.className = "reading";
    const label = document.createElement("h2");
    label.textContent = reading.label;
    const value = document.createElement("p");
    value.id = `sensor-${reading.key}`;
    value.className = "reading-value";
    value.textContent = "—";
    const unit = document.createElement("span");
    unit.textContent = reading.unit;
    unit.className = "reading-unit";
    card.append(label, value, unit);
    sensors.append(card);
  }

  const status = document.createElement("p");
  status.id = "sensor-status";
  status.setAttribute("role", "status");
  status.textContent = "Chargement des mesures…";
  app.replaceChildren(heading, sensors, status);

  async function updateReadings() {
    try {
      const response = await fetch("/cm?cmnd=Status%2010", { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      const sensor = payload?.StatusSNS?.HTU21;
      if (!sensor || !readings.every(({ key }) => Number.isFinite(Number(sensor[key])))) {
        throw new Error("Réponse HTU21D invalide");
      }

      for (const { key } of readings) {
        document.getElementById(`sensor-${key}`).textContent = Number(sensor[key]).toFixed(1);
      }
      status.textContent = `Mis à jour à ${new Date().toLocaleTimeString()}`;
    } catch (error) {
      status.textContent = `Lecture du HTU21D impossible : ${error.message}`;
    } finally {
      window.setTimeout(updateReadings, 2000);
    }
  }

  updateReadings();

  const pageVersion = document.createElement("time");
  pageVersion.id = "page-version";
  pageVersion.setAttribute("aria-label", "Date et heure de génération de cette version");
  pageVersion.dateTime = "{{ site.time | date_to_xmlschema }}";
  pageVersion.textContent = "{{ site.time | date: '%d/%m/%y-%H.%M.%S' }}";
  document.body.append(pageVersion);
})();
