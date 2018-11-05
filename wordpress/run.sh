#!/bin/bash
wget -c http://wordpress.org/latest.tar.gz
tar zxvf latest.tar.gz
rsync -av wordpress /var/www/html/
rm latest.tar.gz
chown -R www-data:www-data /var/www/html
chmod -R 755 /var/www/html/

service php7.2-fpm start
service nginx stop
nginx -g "daemon off;"
