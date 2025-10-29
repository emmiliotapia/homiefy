# 🏠 Homiefy — Asistente doméstico inteligente con n8n + Telegram

**Homiefy** es un bot doméstico modular que automatiza las tareas del hogar:  
📸 toma fotos de tickets, 🧾 registra inventario, 🍳 descuenta ingredientes al cocinar y ⏰ te avisa antes de que algo caduque.

Construido con **n8n**, **Google Sheets**, **Telegram Bot API** y **OpenAI**,  
Homiefy convierte la organización del hogar en un sistema de datos, tareas y alertas.

---

## 🚀 Demo rápida
> *Próximamente*: video del flujo `/ticket → inventario`.

**Flujo MVP:**  


Telegram 📱 → n8n 🤖 → Google Drive ☁️ → OCR 🧠 → Google Sheets 📊 → Alertas 🔔


---

## 🧩 Qué hace Homiefy

| Módulo | Función |
|--------|----------|
| **Tickets** | Convierte una foto de ticket en registros de productos. |
| **Inventario** | Controla existencias, costos y caducidades. |
| **Recetas** | Permite crear recetas y descuenta automáticamente ingredientes. |
| **Alertas** | Notifica productos próximos a vencer o con stock bajo. |
| **Reportes** | Calcula gasto por tienda y genera pre-listas de compra. |

---

## ⚙️ Stack tecnológico

- **n8n** — motor principal de automatización.
- **Google Sheets + Drive** — base de datos lógica y almacenamiento.
- **Telegram Bot API** — interfaz conversacional para usuarios.
- **OpenAI / Vision OCR** — parser inteligente de tickets.
- **GitHub Actions** — validaciones y CI.

---

## 📦 Instalación rápida (local o cloud)

1. Clona el repositorio:
   ```bash
   git clone ssh://git@ssh.github.com:443/emmiliotapia/homiefy.git
   cd homiefy


Crea las credenciales .env:

TELEGRAM_BOT_TOKEN=
GOOGLE_SHEETS_SPREADSHEET_ID=
GOOGLE_DRIVE_FOLDER_ID=


Importa los workflows n8n/workflows/*.json en tu instancia n8n.

Crea las hojas de Google con el esquema de sheets/schema.csv.

Prueba el comando /ticket enviando una foto de un ticket al bot.

📚 Documentación

docs/01-arquitectura.md

docs/02-esquema-datos.md

docs/03-ux-telegram.md

🤝 Contribución

Usa Conventional Commits (feat:, fix:, docs:).

Ramas de desarrollo: dev → PR → main.

PRs validados con GitHub Actions (.github/workflows/lint.yml).

📅 Roadmap

v0.1.0 — MVP: ticket → inventario → alertas

v0.2.0 — recetas y consumo

v0.3.0 — reportes y UX

v0.4.0 — dashboard visual y analítica

🧠 Autor

José Emilio Tapia
Creador de Homiefy & arquitecto del sistema
📍 Mexicali, México
💡 “Automatizar es liberar tiempo para vivir.”
