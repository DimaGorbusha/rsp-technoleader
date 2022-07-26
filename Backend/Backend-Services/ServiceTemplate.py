from Interface import Interface
from Logger import Logger

class ServiceTemplate():
    def __init__(self):
        pass

    interface = Interface("hello","hello_callback")
    interface.activate_web_server()