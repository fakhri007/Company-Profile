# deploy.sh
npm install
sudo npm run build
sudo npm run start -- -p 80
