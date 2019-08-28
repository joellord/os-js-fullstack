FROM mysql:5.7

ENV MYSQL_USER "user"
ENV MYSQL_PASSWORD "pass"
ENV MYSQL_DATABASE "visits"
ENV MYSQL_ROOT_PASSWORD "yes"

COPY ./schemas/init.sql /docker-entrypoint-initdb.d/init.sql