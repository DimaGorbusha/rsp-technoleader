from flask import Flask, render_template
import requests
from Logger import Logger


class Interface():
    def __init__(self, url: str, url_callback: str, service_name: str) -> None:
        self.url = url
        self.url_callback = url_callback
        self.logger = Logger(service_name)


    def activate_web_server(self):
        self.app = Flask(__name__)
        @self.app.route('/{}'.format(self.url), methods=['GET'])
        def sns_input():
            self.logger.log_service("бэброчка")
            return render_template("<h1></h1>")
            

        @self.app.route('/{}'.format(self.url_callback), methods=['GET'])
        def callback_input():
            return "Please"


        self.app.run(host='127.0.0.1', port=5000, debug=True)

        

    def send_data(self, json_data: dict) -> None:
        pass


    def send_callback(self, json_data: dict) -> None:
        pass
