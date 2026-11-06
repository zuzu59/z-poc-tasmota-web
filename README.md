# z-poc-tasmota-web

Prototype d’interface web légère pour Tasmota. La page `/web` utilise un petit shell Berry sur l’appareil et charge son JavaScript et son CSS depuis GitHub Pages.

## Architecture actuelle

- `autoexec.be` enregistre la route `http://<ip_tasmota>/web` et ne sert que la structure HTML minimale.
- `assets/web-app.js`, publié sur GitHub Pages, construit le contenu HTML de la page. Il affiche « Hello zuzu » et une horloge locale au format `dd/mm/yy.hhmmss`, actualisée chaque seconde.
- `assets/web-app.css`, également publié sur GitHub Pages, centre et met en forme le texte.
- La page reste sous l’origine HTTP du Tasmota ; le JavaScript/CSS distant ne remplace pas son origine. Les futurs appels à l’API Tasmota pourront donc être faits vers cette même origine, sans CORS. Aucun appel API n’est implémenté pour le moment.

Les ressources distantes sont des scripts classiques et une feuille de style, pas des modules JavaScript : cela permet leur chargement sans CORS et laisse le document sous l’origine du Tasmota.

## Prérequis

- Un appareil ESP32 (Berry n’est pas pris en charge sur Tasmota ESP8266).
- Un firmware Tasmota incluant Berry et l’extension `webserver`.
- Le système de fichiers Tasmota activé, avec assez d’espace pour `autoexec.be`.
- GitHub Pages activé pour ce dépôt à l’adresse `https://zuzu59.github.io/z-poc-tasmota-web/`.

## Installation

1. Publier le dépôt sur GitHub et attendre que GitHub Pages serve les fichiers sous `assets/`.
2. Dans l’interface Web Tasmota, ouvrir la gestion du système de fichiers et téléverser `autoexec.be` à la racine.
3. Redémarrer Tasmota pour charger le script.
4. Ouvrir `http://<ip_tasmota>/web` dans un navigateur.

Après la mise en place initiale, les changements de contenu, de JavaScript ou de CSS se font sur GitHub Pages sans retéléverser `autoexec.be` sur Tasmota, tant que les URL des ressources restent identiques.

## Validation

Le device de test est un ESP32-C3 sous Tasmota `16.0.0.2`. La version précédente de la page a été testée dans Chromium/Playwright sur ce device. La nouvelle architecture doit être vérifiée après publication des fichiers GitHub Pages et mise à jour de `autoexec.be` sur le device.
