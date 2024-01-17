# deploy.sh
cd /path/to/your/nextjs/app
git pull origin main
npm install
npm run build
npm run start
