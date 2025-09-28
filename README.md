# Krauthos

Una aplicación NestJS con PostgreSQL construida con TypeScript.

## 📋 Requisitos previos

- [Node.js](https://nodejs.org/) (v20 o superior)
- [pnpm](https://pnpm.io/) como gestor de paquetes
- [Docker](https://www.docker.com/) y Docker Compose
- [PostgreSQL](https://www.postgresql.org/) (opcional, se puede usar con Docker)

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone git@github.com:pierslabs/Krauthos.git
cd Krauthos
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Configurar variables de entorno

```bash
cp .env.example .env
```

Edita el archivo `.env` con tus configuraciones:

```env
PORT=3000
NODE_ENV=development
PLATFORM=es

# Database configuration
DB_HOST=localhost
DB_PORT=5432
DB_USER=krauthos_user
DB_PASSWORD=krauthos_password
DB_NAME=krauthos_db

# PostgreSQL Docker service variables
POSTGRES_USER=krauthos_user
POSTGRES_PASSWORD=krauthos_password
POSTGRES_DB=krauthos_db
```

## 🐳 Ejecutar con Docker (Recomendado)

### Desarrollo

```bash
docker-compose up --build
```

Esto levantará:

- PostgreSQL en el puerto 5432
- La aplicación en el puerto 3000 con hot reload (gracias al docker-compose.override.yml)

### Producción / Staging

```bash
docker-compose -f docker-compose.yml up --build -d
```

## 🛠️ Desarrollo local (sin Docker)

### 1. Asegúrate de tener PostgreSQL ejecutándose

```bash
# macOS con Homebrew
brew services start postgresql

# O usa Docker solo para la base de datos
docker run --name krauthos-postgres -e POSTGRES_USER=krauthos_user -e POSTGRES_PASSWORD=krauthos_password -e POSTGRES_DB=krauthos_db -p 5432:5432 -d postgres:15-alpine
```

### 2. Ejecutar la aplicación

```bash
# Desarrollo con hot reload
pnpm run start:dev

# Desarrollo con debug
pnpm run start:debug

# Producción
pnpm run build
pnpm run start:prod
```

## 📜 Scripts disponibles

```bash
# Construcción
pnpm run build          # Compilar el proyecto

# Desarrollo
pnpm run start          # Iniciar la aplicación
pnpm run start:dev      # Iniciar con hot reload
pnpm run start:debug    # Iniciar con debugger
pnpm run start:prod     # Iniciar en modo producción

# Calidad de código
pnpm run lint           # Ejecutar ESLint
pnpm run format         # Formatear código con Prettier

# Testing
pnpm run test           # Ejecutar tests unitarios
pnpm run test:watch     # Ejecutar tests en modo watch
pnpm run test:cov       # Ejecutar tests con coverage
pnpm run test:debug     # Ejecutar tests con debugger
pnpm run test:e2e       # Ejecutar tests end-to-end

# Commits
pnpm run commit         # Commit con Commitizen
```

## 🏗️ Arquitectura

La aplicación está construida con:

- **Framework**: [NestJS](https://nestjs.com/) - Framework Node.js escalable
- **Base de datos**: [PostgreSQL](https://www.postgresql.org/) con [TypeORM](https://typeorm.io/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Validación**: [class-validator](https://github.com/typestack/class-validator)
  y [class-transformer](https://github.com/typestack/class-transformer)
- **Configuración**: [@nestjs/config](https://docs.nestjs.com/techniques/configuration)

## 📁 Estructura del proyecto

```
src/
├── config/           # Módulos de configuración
│   ├── app.config.ts
│   ├── config.module.ts
│   ├── config.service.ts
│   └── postgres.config.ts
├── database/         # Configuración de base de datos
│   └── postgres.module.ts
├── app.module.ts     # Módulo principal de la aplicación
└── main.ts          # Punto de entrada de la aplicación
```

## 🌍 Variables de entorno

| Variable      | Descripción                    | Valor por defecto   |
|---------------|--------------------------------|---------------------|
| `PORT`        | Puerto de la aplicación        | `3000`              |
| `NODE_ENV`    | Entorno de ejecución           | `development`       |
| `PLATFORM`    | Plataforma de la aplicación    | `es`                |
| `DB_HOST`     | Host de la base de datos       | `localhost`         |
| `DB_PORT`     | Puerto de la base de datos     | `5432`              |
| `DB_USER`     | Usuario de la base de datos    | `krauthos_user`     |
| `DB_PASSWORD` | Contraseña de la base de datos | `krauthos_password` |
| `DB_NAME`     | Nombre de la base de datos     | `krauthos_db`       |

## 🐛 Debugging

### Con Docker

```bash
# Ver logs en tiempo real
docker-compose logs -f app

# Acceder al contenedor
docker-compose exec app sh
```

### Local

```bash
# Ejecutar con debugger
pnpm run start:debug

# Ejecutar tests con debugger
pnpm run test:debug
```

## 📝 Notas de desarrollo

- El archivo `docker-compose.override.yml` se aplica automáticamente en desarrollo para habilitar hot reload
- La aplicación se ejecuta en el puerto 3000 por defecto
- PostgreSQL se ejecuta en el puerto 5432
- Los datos de PostgreSQL se persisten en un volumen Docker named `postgres_data`

## 📄 Licencia

Este proyecto es privado y no tiene licencia pública.

