# Certificate setup instructions
# https://certbot.eff.org/lets-encrypt/debianjessie-nginx
sudo apt-get remove certbot
wget https://dl.eff.org/certbot-auto
sudo mv certbot-auto /usr/local/bin/certbot-auto
sudo chown root /usr/local/bin/certbot-auto
sudo chmod 0755 /usr/local/bin/certbot-auto
sudo /usr/local/bin/certbot-auto --nginx
echo "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' && /usr/local/bin/certbot-auto renew -q" | sudo tee -a /etc/crontab > /dev/null

# Open 443 port
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
