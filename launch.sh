git submodule init
echo 'Pulling server ...'
git submodule update --recursive --remote
echo 'Installing frontend ...'
yarn install
echo 'Launching frontend ...'
ng serve &
cd _server/backend
echo 'Installing backend ...'
yarn install
echo 'Launching backend ...'
npm run dev:watch &
echo 'Ne pas oublier : Créer une base de données nommée : angulaaaaaargh et y executer le script init.mongo.js qui se trouve dans _server/backend/scripts'
xdg-open http://localhost:4200/
