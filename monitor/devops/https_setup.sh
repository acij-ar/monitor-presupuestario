# Certificate setup instructions
# https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx
sudo snap install core; sudo snap refresh core
sudo apt-get remove certbot
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --nginx
