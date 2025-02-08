import httpx

async def fetch_projects():
    async with httpx.AsyncClient() as client:
        response = await client.get("http://localhost:8000/api/views")
        return response.json()