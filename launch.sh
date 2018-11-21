trap ctrl_c INT

function ctrl_c() {
  echo 'Killing node server ...'
  sleep 1
  kill -9 $!
}

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
status_code=1
while [[ "$status_code" -ne 200 ]];
do
  status_code=$(curl --write-out %{http_code} --silent --output /dev/null localhost:4443/documentation)

  if [[ "$status_code" -eq 200 ]] ; then
    echo 'Ne pas oublier : Créer une base de données nommée : angulaaaaaargh et y executer le script init.mongo.js qui se trouve dans _server/backend/scripts'
    sleep 10
    xdg-open http://localhost:4200/
  fi
done





