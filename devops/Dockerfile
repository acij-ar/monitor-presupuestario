FROM python:3.8

WORKDIR /devops
RUN apt-get update && apt-get -y install cron

COPY . .

RUN pip3 install pandas mysqlclient requests

COPY monitor-cron /etc/cron.d/monitor-cron

RUN chmod 0644 /etc/cron.d/monitor-cron

RUN crontab /etc/cron.d/monitor-cron

RUN touch /var/log/data_update.log

RUN touch /var/log/infla_update.log

CMD ["/bin/bash", "-c", "printenv > /etc/environment && cron -f"]
