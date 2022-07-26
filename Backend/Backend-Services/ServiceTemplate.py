from Interface import Interface
from Logger import Logger
import os

class ServiceTemplate():
    def __init__(self):
        pass
    
    interface = Interface("hello","hello_callback", os.path.basename(__file__))
    interface.activate_web_server()
