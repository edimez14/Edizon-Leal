from fastapi import APIRouter, UploadFile, File, HTTPException
import os
from pathlib import Path

router = APIRouter()

UPLOAD_DIR = "uploads"
Path(UPLOAD_DIR).mkdir(exist_ok=True)

@router.post("/upload-image")
async def upload_image(file: UploadFile = File(...), caption: str = None):
    try:
        # Guardar el archivo
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as buffer:
            content = await file.read()
            buffer.write(content)
        
        return {
            "url": f"/{UPLOAD_DIR}/{file.filename}",
            "caption": caption,
            "filename": file.filename
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))