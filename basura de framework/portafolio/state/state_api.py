import reflex as rx
import httpx
# from portafolio.api.api import fetch_projects

class ProjectState(rx.State):
    projects: list[dict] = []

    async def get_projects(self):
        async with httpx.AsyncClient() as client:
            response = await client.get("http://localhost:8000/api/views")
            self.projects = response.json()