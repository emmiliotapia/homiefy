# Arquitectura Homiefy (alto nivel)
- Entrada: Telegram → fotos
- Persistencia temporal: Drive (imágenes), raw OCR (txt)
- Procesamiento: n8n (Vision OCR → Parser LLM → Normalizador → Sheets)
- Base lógica: Google Sheets (tablas descritas en 02-esquema-datos)
- Salida: Telegram (estado/alertas), exports CSV