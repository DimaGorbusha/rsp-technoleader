from flask import Flask
import requests
from Logger import Logger


class Interface():
    def __init__(self, url: str, url_callback: str, service_name: str) -> None:
        self.url = url
        self.url_callback = url_callback
        self.logger = Logger(service_name)


    def activate_web_server(self):
        pass


    def send_data(self, json_data: dict) -> None:
        pass


    def send_callback(self, json_data: dict) -> None:
        pass
