# setup_repo.ps1 — crea estructura básica del repo Homiefy
$folders = @(
  "docs/img",
  "n8n/workflows",
  "n8n/functions",
  "n8n/prompts",
  "sheets",
  "prompts",
  "infra",
  "scripts",
  ".github/ISSUE_TEMPLATE",
  ".github/workflows"
)

foreach ($f in $folders) {
  New-Item -ItemType Directory -Force -Path $f | Out-Null
}

# Archivos base
@"
# Homiefy
Bot doméstico (Telegram + n8n) para inventario, recetas y alertas.
"@ | Out-File "README.md" -Encoding utf8

"MIT License" | Out-File "LICENSE" -Encoding utf8
".env" | Out-File ".env.example" -Encoding utf8
"node_modules/" | Out-File ".gitignore" -Encoding utf8

# Ejemplo en docs
"## Arquitectura" | Out-File "docs/01-arquitectura.md" -Encoding utf8
"## Esquema de datos" | Out-File "docs/02-esquema-datos.md" -Encoding utf8
"## UX Telegram" | Out-File "docs/03-ux-telegram.md" -Encoding utf8
"## Roadmap" | Out-File "docs/06-roadmap.md" -Encoding utf8

"echo 'Hola Homiefy'" | Out-File "scripts/test.sh" -Encoding utf8

Write-Host "✅ Estructura creada."
