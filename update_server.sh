#!/bin/bash

git pull

rm -rf /var/www/html
cp -R html/ /var/www/html
systemctl restart nginx

rm -rf ~/monitor
cp -R monitor ~/monitor
cp ~/monitor/backend/config.example.py ~/monitor/backend/config.py
chown -R www-data:root ~/monitor
# pip3 install -r ~/monitor/requirements.txt # TODO: validate if pip, pip3, conda or virtualenv
systemctl restart monitor
