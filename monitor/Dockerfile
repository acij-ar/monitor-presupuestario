FROM ubuntu:focal
ARG DEBIAN_FRONTEND=noninteractive
WORKDIR /monitor-presupuestario
COPY . .

RUN apt-get update && apt-get install -y mysql-server
RUN apt-get install -y wget


EXPOSE 8080

COPY startup.sh /
RUN chmod 777 /startup.sh
CMD ["bash","/startup.sh"]

