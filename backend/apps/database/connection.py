import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

DB_URL = os.getenv("MONGODB_URL")
DB_NAME: str = "project_db"

client = AsyncIOMotorClient(DB_URL)
db = client[DB_NAME]

async def init_db():
    await client.server_info()
    print("Connected to databese!")