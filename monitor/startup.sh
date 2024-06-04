
# Install nvm
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm




cd /home/monitor/repositories/acij/monitor-presupuestario
nvm install
nvm use
npm install


#Install pm2
npm install pm2 -g &&

sed -i "s/localhost/db/g" "./src/config/mysql.js"
npm run dist
pm2 start devops/ecosystem.config.js




tail -f /dev/null
