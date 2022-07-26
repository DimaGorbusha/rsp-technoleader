from pydantic import BaseModel

class UserModel(BaseModel):
    user_id: str
    password: str
    user_name: str
    user_surname: str
    user_patronymic: str

class AuthModel(BaseModel):
    login: str
    password: str

class UserRequests(BaseModel):
    login: str
    position: str
    qualification: str
    department: str
    status: str