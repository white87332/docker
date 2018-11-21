FROM node:11.2.0

WORKDIR /workspace/node

RUN npm i pm2 -g && pm2 install pm2-logrotate && pm2 set pm2-logrotate:dateFormat YYYY-MM-DD

COPY ./dockerentry.sh /dockerentry.sh

RUN chmod +x /dockerentry.sh

ENTRYPOINT ["/dockerentry.sh"]
