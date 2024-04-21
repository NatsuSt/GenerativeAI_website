FROM node:18-alpine
LABEL maintainer='generativeai.com'

COPY ./project /project
WORKDIR /project
EXPOSE 9000

USER root

RUN npm install -g @angular/cli && \
    adduser \
        --disabled-password \
        --no-create-home \
        angular-user
