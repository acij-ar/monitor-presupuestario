#!/bin/bash

git pull
rm -rf /var/www/html
cp -R html/ /var/www/html
systemctl restart nginx

# TODO: update backend