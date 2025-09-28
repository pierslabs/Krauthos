Desarrollo

docker-compose up --build

Esto levantará Postgres + tu app con hot reload (nodemon/ts-node) gracias al override.

Producción / staging

docker-compose -f docker-compose.yml up --build -d

