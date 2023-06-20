from http.server import BaseHTTPRequestHandler, HTTPServer
import time

hostName = "localhost"
serverport = 8071

class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type","text/html")
        self.end_headers()
        #self.wfile.write(bytes("<html><head><title>https://pythonbasics.org</title></head>", "utf-8"))
        #self.wfile.write(bytes("<p>Request: %s</p>" % self.path, "utf-8"))
        #self.wfile.write(bytes("<body>", "utf-8"))
        #self.wfile.write(bytes("<p>This is an example web server made with python.</p>", "utf-8"))
        #self.wfile.write(bytes("</body></html>", "utf-8"))
        path = self.path
        if path == "/":
            with open("./index.html", "rb") as content:
                self.wfile.write(content.read())




if __name__ == "__main__":
    webServer = HTTPServer((hostName,serverport),MyServer)
    print("Sever started http://%s:%s" %(hostName, serverport))


    try:
        webServer.serve_forever()
    except KeyboardInterrupt | Exception as e:
        print(e)
        pass
    
    webServer.server_close()
    print("Server stopped.")


    """
    SIMPLE HTTP SERVER IN PYTHON
    https://www.youtube.com/watch?v=DeFST8tvtuI

    RENDER A HTML PAGE IN WEBSERVER USING PYTHON
    https://www.youtube.com/watch?v=QcKIcjl_S60

    https://stackoverflow.com/questions/59071797/how-can-i-make-a-python-server-open-an-html-file-as-deafult-instead-of-directory

    SOME CRAZY STUFF ABOUT WEB DEV WITH PY
    https://github.com/tdamdouni/Pythonista/tree/master/_WebArticles

    SIMILAR PROBLEM
    https://forum.freecodecamp.org/t/python-httpserver-get-index-html-problem/520762/3
    """