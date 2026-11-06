# z-poc-tasmota-web
Petit test de faire un serveur web sur un Tasmota avec le storage sur github

## Page `/web`

Le fichier `autoexec.be` ajoute une route au serveur HTTP intégré de Tasmota. Elle affiche « Hello zuzu » en grand, centré dans la page.

### Prérequis

- Un appareil ESP32 : Berry n’est pas pris en charge sur Tasmota ESP8266.
- Un firmware Tasmota incluant Berry et l’extension `webserver`.
- Le système de fichiers Tasmota activé, avec assez d’espace pour `autoexec.be`.

### Installation

1. Dans l’interface Web Tasmota, ouvrez la gestion du système de fichiers et téléversez `autoexec.be` à la racine.
2. Redémarrez Tasmota pour que le fichier soit chargé automatiquement.
3. Ouvrez `http://<ip_tasmota>/web` dans un navigateur.

Cette version suppose que le script est présent dans le système de fichiers local de Tasmota. Elle ne télécharge pas le fichier depuis GitHub.

### Validation

Testé sur un ESP32-C3 sous Tasmota `16.0.0.2` : après téléversement d’`autoexec.be` et redémarrage, `http://<ip_tasmota>/web` répond avec HTTP 200 et affiche « Hello zuzu ». Vérifié dans Chromium avec Playwright sur écran de bureau et mobile ; le texte est centré et la page mobile ne déborde pas horizontalement.
