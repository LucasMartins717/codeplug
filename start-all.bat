@echo off
echo Iniciando servidor...
start cmd /k "cd server && node --watch server.js"

echo Iniciando cliente...
start cmd /k "cd client && npm run dev"

echo Iniciando admin...
start cmd /k "cd admin && npm run dev"

echo Todos os serviços foram iniciados!
exit