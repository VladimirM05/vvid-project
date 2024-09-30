from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from peewee import SqliteDatabase, Model, CharField, IntegerField


# Настройка базы данных SQLite
DATABASE_URL = "Users.db"
db = SqliteDatabase(DATABASE_URL)

# Модель данных пользователя
class UserModel(Model):
    wallet_address = CharField(primary_key=True)
    nickname = CharField()
    balance = IntegerField(default=0)

    class Meta:
        database = db
        table_name = 'users'

# Модель для update_user
class UpdateUser(BaseModel):
    nickname: str = None
    balance: int = None



# Создание таблиц в базе данных
db.connect()
db.create_tables([UserModel])

app = FastAPI()

# Настройка CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Убедитесь, что это ваш фронтенд
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic модель для получения данных пользователя
class New_user(BaseModel):
    wallet_address: str
    nickname: str

    
@app.post('/api/post_user')
async def post_user(user: New_user):
    # Проверяем, существует ли пользователь
    try:
        db_user = UserModel.get(UserModel.nickname == user.nickname)
        return {"message": f"User {user.nickname} already exists, redirecting to main page"}
    
    except UserModel.DoesNotExist:
        # Если пользователь не существует, создаем нового
        new_user = UserModel.create(wallet_address=user.wallet_address, nickname=user.nickname)
        return {"message": f"User {user.nickname} with wallet {user.wallet_address} added"}


@app.put('/api/update_user/{wallet_address}')
async def update_user(wallet_address: str, updated_user: UpdateUser):
    try:
        # Ищем пользователя по wallet_address
        user = UserModel.get(UserModel.wallet_address == wallet_address)
        # Обновляем его данные
        user.nickname = updated_user.nickname
        user.balance = updated_user.balance
        user.save()
        return {"message": f"User {wallet_address} updated successfully"}
    except UserModel.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
