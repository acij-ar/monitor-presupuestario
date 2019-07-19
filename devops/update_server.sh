#!/bin/bash

git pull
npm i
npm run dist
pm2 restart server

sudo cp nginx.conf /etc/nginx/sites-enabled/monitor
systemctl restart nginx