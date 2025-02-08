from datetime import datetime
from pydantic import BaseModel, HttpUrl
from bson import ObjectId
from typing import Optional, List, Union
from fastapi import UploadFile, File
from pydantic import GetJsonSchemaHandler
from pydantic.json_schema import JsonSchemaValue
from pydantic_core import core_schema

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate
        
    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid Objectid")
        return ObjectId(v)
    
    @classmethod
    def __get_pydantic_json_schema__(
        cls, core_schema: core_schema.CoreSchema, handler: GetJsonSchemaHandler
    ) -> JsonSchemaValue:
        return handler(core_schema) | {"type": "string"}
        
class ImageData(BaseModel):
    caption: Optional[str]
    url: Union[HttpUrl, str]
    
class ProjectPostBase(BaseModel):
    title: str
    description: str
    technology: dict
    content: str
    url: dict
    featured_image: Optional[ImageData] = None
    gallery: Optional[List[ImageData]] = None
    created_at: Optional[datetime] = datetime.now()
    updated_at: Optional[datetime] = datetime.now()

class ProjectPostCreate(ProjectPostBase):
    pass

class ProjectPost(ProjectPostBase):
    id: PyObjectId
    
    class Config:
        json_encoders = {ObjectId: str}
        json_schema_extra = {
            "example": {
                "title": "prueba de proyecto",
                "description": "esta es la descripción del proyecto de prueba",
                "technology": {"icono": "texto"},
                "content": "## Hola mundo\n![Imagen de ejemplo](/uploads/image.jpg)",
                "url": {"icono": "url"},
                "featured_image": {
                    "caption": "Imagen principal del proyecto",
                    "url": "https://example.com/image.jpg"
                },
                "gallery": [
                    {"caption": "Captura 1", "url": "/uploads/screenshot1.jpg"},
                    {"caption": "Captura 2", "url": "/uploads/screenshot2.jpg"}
                ],
                "created_at": datetime.now(),
                "updated_at": datetime.now()
            }
        }

class ImageUpload(BaseModel):
    file: UploadFile
    caption: Optional[str] = None