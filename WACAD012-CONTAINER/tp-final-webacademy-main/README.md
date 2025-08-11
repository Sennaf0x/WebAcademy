# Iniciando docker
 - Nas pastas backend e frontend instale o pacote do node
    npm install
 - Na pasta de backend configure o .env com dados de permissão do banco de dados
 - Crie arquivos .gitignore para as pastas frontend e backend:
    - node_modules
    - .env
    
 - Iniciar a migration do prisma
  - npx prisma migrate dev --name init

 - No terminal na pasta raiz inicia o docker compose
  - docker-compose up -d

**A porta do banco de dados está como 3307:3306, porque tinha um docker importante ligado na porta 3306 na minha maquina