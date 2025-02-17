from pydantic import BaseModel, GetJsonSchemaHandler, HttpUrl
from pydantic.json_schema import JsonSchemaValue
from pydantic_core import core_schema
from bson import ObjectId
from datetime import datetime
from typing import Optional, List, Union, Annotated

class PyObjectId(str):
    @classmethod
    def __get_pydantic_core_schema__(cls, _source_type, _handler):
        return core_schema.chain_schema([
            core_schema.str_schema(),
            core_schema.no_info_after_validator_function(
                cls.validate,
                core_schema.str_schema()
            )
        ])

    @classmethod
    def validate(cls, v):
        if isinstance(v, ObjectId):
            return str(v)
        if ObjectId.is_valid(v):
            return str(ObjectId(v))
        raise ValueError("Invalid ObjectId")

    @classmethod
    def __get_pydantic_json_schema__(
        cls, core_schema: core_schema.CoreSchema, handler: GetJsonSchemaHandler
    ) -> JsonSchemaValue:
        return handler(core_schema) | {"type": "string"}

ObjectIdAnnotation = Annotated[str, PyObjectId]

class ImageData(BaseModel):
    caption: Optional[str]
    url: Union[HttpUrl, str]
    
class ProjectPostBase(BaseModel):
    title: str
    subtitle: str 
    technology: list
    content: str
    url: dict
    featured_image: Optional[ImageData] = None
    gallery: Optional[List[ImageData]] = None
    created_at: Optional[datetime] = datetime.now()
    updated_at: Optional[datetime] = datetime.now()

class ProjectPostCreate(ProjectPostBase):
    pass

class ProjectPost(ProjectPostBase):
    id: ObjectIdAnnotation
    
    class Config:
        json_encoders = {ObjectId: str}
        json_schema_extra = {
            "example": {
                "title": "prueba de proyecto",
                "subtitle": "este es el subtitulo del proyecto",
                "technology": [{"icono": "icono", "texto": "texto"}],
                "content": "## Hola mundo\n![Imagen de ejemplo](/uploads/image.jpg)",
                "url": {"link": "url", "github": "url"},
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