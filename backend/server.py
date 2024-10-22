from fastapi import FastAPI, HTTPException, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from peewee import SqliteDatabase, Model, CharField, IntegerField, TextField
import base64
import shutil

def convert_image_to_base64(file):
    return base64.b64encode(file.file.read()).decode('utf-8')

# Настройка базы данных SQLite
DATABASE_URL = "Users.db"
db = SqliteDatabase(DATABASE_URL)

# Модель данных пользователя
class UserModel(Model):
    wallet_address = CharField(primary_key=True)
    nickname = CharField()
    balance = IntegerField(default=0)
    image_base64 = TextField(null=True)

    class Meta:
        database = db
        table_name = 'users'

# Модель для update_user
class UpdateUser(BaseModel):
    nickname: str = None
    balance: int = None

# Pydantic модель для получения данных пользователяя
class New_user(BaseModel):
    wallet_address: str
    nickname: str


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

    
@app.post('/api/new_user')
async def post_user(user: New_user):
    # Проверяем, существует ли пользователь
    try:
        db_user = UserModel.get(UserModel.nickname == user.nickname)
        return {"message": f"Пользователь {user.nickname} уже существует"}
    
    except UserModel.DoesNotExist:
        # Если пользователь не существует, создаем нового
        new_user = UserModel.create(wallet_address=user.wallet_address, nickname=user.nickname)
        return {"message": f"Пользователь {user.nickname} с адрессом кошелька : {user.wallet_address} добавлен"}


@app.post("/api/new_avatar/{wallet_address}")
async def upload_file(wallet_address: str, file: UploadFile = File(...)):
    try:
        # Ищем пользователя по wallet_address
        user = UserModel.get(UserModel.wallet_address == wallet_address)
        
        # Преобразуем изображение в строку Base64
        image_base64 = convert_image_to_base64(file)
        
        # Сохраняем изображение в базе данных
        user.image_base64 = image_base64
        user.save()
        
        return {"message": f"Изображение успешно загружено для пользователя {wallet_address}"}
    except UserModel.DoesNotExist:
        raise HTTPException(status_code=404, detail="Пользователь не найден")

@app.put("/api/update_avatar/{wallet_address}")
async def update_avatar(wallet_address: str, file: UploadFile = File(...)):
    try:
        # Ищем пользователя по wallet_address
        user = UserModel.get(UserModel.wallet_address == wallet_address)
        
        # Преобразуем изображение в строку Base64
        image_base64 = convert_image_to_base64(file)
        
        # Обновляем аватар (Base64) в базе данных
        user.image_base64 = image_base64
        user.save()
        
        return {"message": f"Аватар пользователя {wallet_address} успешно обновлен"}
    except UserModel.DoesNotExist:
        raise HTTPException(status_code=404, detail="Пользователь не найден")


@app.put('/api/update_user/{wallet_address}')
async def update_user(wallet_address: str, updated_user: UpdateUser):
    try:
        # Ищем пользователя по wallet_address
        user = UserModel.get(UserModel.wallet_address == wallet_address)
        # Обновляем его данные
        if updated_user.nickname is not None:
            user.nickname = updated_user.nickname
        if updated_user.balance is not None:
            user.balance = updated_user.balance


        user.save()
        return {"message": f"Пользователь {wallet_address} успешно обновлен"}
    except UserModel.DoesNotExist:
        raise HTTPException(status_code=404, detail="Пользователь не найден")


@app.get('/api/get_user/{wallet_address}')
async def get_user(wallet_address: str):
    try:
        # Ищем пользователя по wallet_address
        user = UserModel.get(UserModel.wallet_address == wallet_address)
        
        # Возвращаем данные пользователя, включая изображение, если оно есть
        return {
            "wallet_address": user.wallet_address if user.wallet_address else None,
            "nickname": user.nickname if user.nickname else None,
            "balance": user.balance if user.balance else None,
            "image_base64": user.image_base64 if user.image_base64 else None
        }
    except UserModel.DoesNotExist:
        raise HTTPException(status_code=404, detail="Пользователь не найден")

@app.get('/api/get_user_rank/{wallet_address}')
async def get_user_rank(wallet_address: str):
    try:
        # Получаем пользователя по его wallet_address
        user = UserModel.get(UserModel.wallet_address == wallet_address)

        # Получаем всех пользователей, отсортированных по балансу
        all_users = (UserModel
                     .select()
                     .order_by(UserModel.balance.desc()))

        # Находим позицию пользователя
        rank = None
        for index, top_user in enumerate(all_users):
            if top_user.wallet_address == wallet_address:
                rank = index + 1
                break

        # Если позиция найдена, возвращаем её
        if rank:
            # Если у пользователя есть nickname, показываем его, иначе используем wallet_address
            user_identifier = user.nickname if user.nickname else user.wallet_address
            return {user_identifier: rank}
        else:
            raise HTTPException(status_code=404, detail="Пользователь не найден в топе")

    except UserModel.DoesNotExist:
        raise HTTPException(status_code=404, detail="Пользователь не найден")

@app.get('/api/top_players')
async def get_top_players():
    try:
        # Получаем 10 пользователей с наибольшим балансом
        top_users = (UserModel
                     .select()
                     .order_by(UserModel.balance.desc())
                     .limit(10))

        # Формируем ответ в нужном формате
        result = []
        for user in top_users:
            result.append({
                "name": user.nickname or user.wallet_address,
                "balance": user.balance,
                "image": user.avatar
            })

        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail="Ошибка получения топ игроков")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
