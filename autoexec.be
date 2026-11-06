# Route /web : shell léger ; l'application est chargée depuis GitHub Pages.
# Ce fichier est chargé automatiquement au démarrage par Tasmota.

class HelloZuzuWeb
  def web_add_handler()
    import webserver

    webserver.on("/web", def()
      webserver.content_open(200, "text/html; charset=utf-8")
      webserver.content_send("<!doctype html>" +
        "<html lang=\"fr\"><head>" +
        "<meta charset=\"utf-8\">" +
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">" +
        "<title>Hello zuzu</title>" +
        "<link rel=\"stylesheet\" href=\"https://zuzu59.github.io/z-poc-tasmota-web/assets/web-app.css\">" +
        "<script defer src=\"https://zuzu59.github.io/z-poc-tasmota-web/assets/web-app.js\"></script>" +
        "</head><body><main id=\"app\"><noscript>JavaScript doit être activé.</noscript></main></body></html>")
      webserver.content_close()
    end)
  end
end

tasmota.add_driver(HelloZuzuWeb())
