from flask import Flask
import requests


class Interface():
    def __init__(self, url: str, url_callback: str) -> None:
        self.url = url
        self.url_callback = url_callback


    def activate_web_server(self) -> None:
        self.app = Flask(__name__)
        @self.app.route('/{}'.format(self.url), methods=['GET'])
        def sns_input():
            pass

        @self.app.route('/{}'.format(self.url_callback), methods=['GET'])
        def callback_input():
            pass

        

    def send_data(self, json_data: dict) -> None:
        pass


    def send_callback(self, json_data: dict) -> None:
        pass