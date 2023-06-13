from http.server import BaseHTTPRequestHandler, HTTPServer
import time

hostName = "localhost"
serverport = 8071

class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type","text/html")
        self.end_headers()
        self.wfile.write(bytes("<html><head><title>https://pythonbasics.org</title></head>", "utf-8"))
        self.wfile.write(bytes("<p>Request: %s</p>" % self.path, "utf-8"))
        self.wfile.write(bytes("<body>", "utf-8"))
        self.wfile.write(bytes("<p>This is an example web server.</p>", "utf-8"))
        self.wfile.write(bytes("</body></html>", "utf-8"))


if __name__ == "__main__":
    webServer = HTTPServer((hostName,serverport),MyServer)
    print("Sever started http://%s:%s" %(hostName, serverport))


    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass
    
    webServer.server_close()
    print("Server stopped.")


    """
    SIMPLE HTTP SERVER IN PYTHON
    https://www.youtube.com/watch?v=DeFST8tvtuI

    RENDER A HTML PAGE IN WEBSERVER USING PYTHON
    https://www.youtube.com/watch?v=QcKIcjl_S60

    https://stackoverflow.com/questions/59071797/how-can-i-make-a-python-server-open-an-html-file-as-deafult-instead-of-directory

    """