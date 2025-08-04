from fastapi import FastAPI
app = FastAPI()
@app.get("/eventos")
def leer_eventos():
    return [{"id": 1, "titulo": "Concierto"}]
