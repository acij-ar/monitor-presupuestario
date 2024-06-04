#!/bin/bash

sudo cp nginx.conf /etc/nginx/sites-enabled/monitor
systemctl restart nginx