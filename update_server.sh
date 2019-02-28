#!/bin/bash

git pull

rm -rf /var/www/html
cp -R html/ /var/www/html
systemctl restart nginx

rm -rf ~/monitor
cp -R monitor ~/monitor
systemctl restart monitor
