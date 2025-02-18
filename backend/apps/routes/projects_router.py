from fastapi import APIRouter, HTTPException, Depends
from apps.models.projects import *
from apps.database.connection import db
from bson import ObjectId
import markdown2
import os
from dotenv import load_dotenv

load_dotenv()
PERMITIDO = os.getenv("PERMITIDO", "False").lower() == "true"

router = APIRouter()

def check_permission():
    if not PERMITIDO:
        raise HTTPException(status_code=403, detail="Access denied")
    return True

# path protegidas
@router.post("/add-project", response_model=ProjectPost, dependencies=[Depends(check_permission)])
async def create_project(project: ProjectPostCreate):
    project_data = project.model_dump()
    project_data["created_at"] = project_data["updated_at"] = datetime.now()
    
    new_project = await db.posts.insert_one(project_data)
    created_project = await db.posts.find_one({"_id": new_project.inserted_id})
    created_project["id"] = str(created_project["_id"])
    return ProjectPost(**created_project)  

@router.put("/update/{project_id}", response_model=ProjectPost, dependencies=[Depends(check_permission)])
async def update_project(project_id: str, project: ProjectPostCreate):
    project_data = project.dict(exclude_unset=True)
    project_data["updated_at"] = datetime.now()

    if len(project_data) >= 1:
        update_result = await db.posts.update_one(
            {"_id": ObjectId(project_id)}, {"$set": project_data}
        )
        if update_result.modified_count == 1:
            updated_project = await db.posts.find_one({"_id": ObjectId(project_id)})
            if updated_project:
                updated_project["id"] = str(updated_project.pop("_id"))
                return updated_project

    existing_project = await db.posts.find_one({"_id": ObjectId(project_id)})
    if existing_project:
        existing_project["id"] = str(existing_project.pop("_id"))
        return existing_project

    raise HTTPException(status_code=404, detail="Project not found")

@router.delete("/delete/{project_id}", dependencies=[Depends(check_permission)])
async def delete_project(project_id: str):
    delete_result = await db.posts.delete_one({"_id": ObjectId(project_id)})
    
    if delete_result.deleted_count == 1:
        return {"message": "project deleted successfully"}
    
    raise HTTPException(status_code=404, detail="Project not found")

# path no protegidas
@router.get("/views/{project_id}", response_model=ProjectPost)
async def read_project(project_id: str):
    project = await db.posts.find_one({"_id": ObjectId(project_id)})
    if project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    
    project["id"] = str(project["_id"])  # Convertir a string
    return ProjectPost(**project)

@router.get("/views/{project_id}/html")
async def get_project_html(project_id: str):
    project = await db.posts.find_one({"_id": ObjectId(project_id)})
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    html_content = markdown2.markdown(
        project["content"],
        extras=["fenced-code-blocks", "tables", "image-style"]
    )
    return {"html_content": html_content}

@router.get("/views", response_model=list[ProjectPost])
async def get_all_project(limit: int = 10):
    projects = await db.posts.find().to_list(limit)
    
    for project in projects:
        project["id"] = str(project["_id"])  # Convertir a string
        del project["_id"]

    return [ProjectPost(**project) for project in projects]
