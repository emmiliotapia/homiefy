# Homiefy
Bot doméstico (Telegram + n8n) para inventario, recetas y alertas. **MVP:** foto de ticket → inventario + caducidades.


## Demo
_(pendiente)_


## Arquitectura rápida
Telegram → n8n → Google Drive (fotos) → OCR (Vision) → Parser (LLM) → Google Sheets (DB lógica) → Telegram (respuestas/alertas).


## Requisitos
- n8n (self-hosted o cloud)
- Bot de Telegram (token)
- Google Sheets + Drive (credenciales)
- OpenAI o proveedor LLM compatible (opcional visión como fallback)


## Instalación (resumen)
1. Crea el spreadsheet con las hojas del esquema (ver `docs/02-esquema-datos.md`).
2. Configura variables de entorno (`.env` y/o `infra/n8n.env`).
3. Importa workflows desde `n8n/workflows/*.json` en n8n.
4. Prueba `/ticket` con 1–2 fotos.


## Uso (comandos)
`/ticket`, `/stock [texto]`, `/caducidades [días]`, `/addReceta`, `/finReceta`, `/usarReceta`, `/prelista`, `/pendientes`, `/gasto [mes]`.


## Documentación
- `docs/01-arquitectura.md`
- `docs/02-esquema-datos.md`
- `docs/03-ux-telegram.md`


## Licencia
MIT.