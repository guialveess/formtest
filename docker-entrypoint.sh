echo "Aguardando banco de dados..."
sleep 10

echo "Executando migrações..."
npx prisma migrate deploy

echo "Executando seed..."
npx prisma db seed || true

echo "Iniciando aplicação..."
npm run dev
