#!/bin/bash
service php7.2-fpm start
service nginx stop
nginx -g "daemon off;"
