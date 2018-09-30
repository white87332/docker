from ubuntu

ENV PHP_VERSON 7.2

RUN apt-get update && apt-get upgrade -y \
    && apt-get install -y \
    python-software-properties \
    software-properties-common \
    && LC_ALL=C.UTF-8 apt-add-repository ppa:ondrej/php \
    && apt-get update && apt-get upgrade -y \
    && apt-get install -y \
    rsync \
    vim \
    wget \
    php$PHP_VERSON \
    php$PHP_VERSON-fpm \
    php$PHP_VERSON-common \
    php$PHP_VERSON-mbstring \
    php$PHP_VERSON-xmlrpc \
    php$PHP_VERSON-gd \
    php$PHP_VERSON-xml \
    php$PHP_VERSON-mysql \
    php$PHP_VERSON-pgsql \
    php$PHP_VERSON-cli \
    php$PHP_VERSON-zip \
    php$PHP_VERSON-curl \
    php$PHP_VERSON-redis \
    && LC_ALL=C.UTF-8 add-apt-repository ppa:nginx/stable \
	&& apt-get update && apt-get upgrade -y \
	&& apt-get install -y \
	nginx \
	nginx-extras

RUN wget -c http://wordpress.org/latest.tar.gz \
    && tar zxvf latest.tar.gz \
    && rsync -av wordpress /var/www/html/ \
    && rm latest.tar.gz \
    && chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/

COPY ./site.nginx.conf /etc/nginx/sites-enabled/site.nginx.conf 
COPY ./site.nginx.conf /etc/nginx/sites-available/site.nginx.conf 
COPY ./php.ini /etc/php/7.2/fpm/php.ini
COPY ./run.sh /home/run.sh

CMD ["./home/run.sh"]