# Define versión de Python
ARG PYTHON_VERSION=3.10.15
FROM python:${PYTHON_VERSION}-slim

# Instala certificados y librerías SSL necesarias para MongoDB Atlas
RUN apt-get update && apt-get install -y \
    ca-certificates \
    openssl \
    libssl-dev \
    libnss3 \
    dnsutils \
    && rm -rf /var/lib/apt/lists/*

# Evita crear .pyc y fuerza logs inmediatos
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Carpeta de trabajo
WORKDIR /app

# Copia dependencias primero (mejor cache)
COPY requirements.txt .

# Instala dependencias Python
RUN pip install --no-cache-dir -r requirements.txt

# Usuario no root
ARG UID=10001
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    appuser

# Copia el resto del proyecto
COPY . .

# Cambia a usuario seguro
USER appuser

# Puerto interno
EXPOSE 7979

# Arranque
CMD ["sh", "-c", "uvicorn index:app --host 0.0.0.0 --port ${PORT:-7979}"]
