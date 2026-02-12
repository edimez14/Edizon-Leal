# api/index.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
import os
from dotenv import load_dotenv

# Importa tus módulos
from apps.database.connection import init_db
from apps.routes.projects_router import router as projects_router
from apps.routes.image_router import router as image_router

# Cargar variables de entorno
load_dotenv()

app = FastAPI()

@app.get("/ping")
def ping():
    return {"status": "ok"}

@app.get("/")
def root():
    return {"status": "backend activo y funcional"}

# ==============================
# CONFIGURACIÓN CORS
# ==============================

ORIGINS_DEPLOY = os.getenv("ORIGINS_DEPLOY")

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

# Solo agregar si existe
if ORIGINS_DEPLOY:
    origins.append(ORIGINS_DEPLOY)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==============================
# EVENTO DE INICIO
# ==============================

@app.on_event("startup")
async def startup_db_client():
    await init_db()

# ==============================
# RUTAS
# ==============================

app.include_router(projects_router, prefix="/api", tags=["posts"])
app.include_router(image_router, prefix="/api/images", tags=["images"])

# ==============================
# HANDLER SERVERLESS (CLAVE)
# ==============================

handler = Mangum(app)
