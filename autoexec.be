# Route personnalisée /web : une page affichant « Hello zuzu ».
# Ce fichier est chargé automatiquement au démarrage par Tasmota.

class HelloZuzuWeb
  def web_add_handler()
    import webserver

    webserver.on("/web", def()
      webserver.content_open(200, "text/html; charset=utf-8")
      webserver.content_send("<!doctype html>" +
        "<html lang=\"en\"><head>" +
        "<meta charset=\"utf-8\">" +
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">" +
        "<title>Hello zuzu</title>" +
        "<style>" +
        "html,body{margin:0;min-height:100%;}" +
        "body{min-height:100vh;display:flex;align-items:center;" +
        "justify-content:center;font-family:system-ui,sans-serif;}" +
        "main{font-size:clamp(3rem,12vw,8rem);font-weight:700;" +
        "text-align:center;padding:1rem;}" +
        "</style></head><body><main>Hello zuzu</main></body></html>")
      webserver.content_close()
    end)
  end
end

tasmota.add_driver(HelloZuzuWeb())
