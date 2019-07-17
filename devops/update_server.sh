#!/bin/bash

git pull

rm -rf /var/www/html
cp -R html/ /var/www/html
systemctl restart nginx

rm -rf ~/monitor
cp -R ~/monitor-presupuestario/monitor ~/monitor
cp ~/monitor/backend/config.example.py ~/monitor/backend/config.py
chown -R www-data:root ~/monitor
/root/miniconda3/bin/activate
pip install -r ~/monitor/requirements.txt
systemctl restart monitor
