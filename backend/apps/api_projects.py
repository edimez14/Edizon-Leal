from fastapi import FastAPI
from dotenv import load_dotenv
from apps.database.connection import init_db
from apps.routes.projects_router import router as projects_router
from apps.routes.image_router import router as image_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

load_dotenv()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_db_client():
    await init_db()
    
app.include_router(projects_router, prefix="/api", tags=["posts"])
app.include_router(image_router, prefix="/api/images", tags=["images"])