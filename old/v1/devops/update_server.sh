#!/bin/bash

git pull
npm i
npm run dist
pm2 restart server
