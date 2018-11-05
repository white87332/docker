from ubuntu:latest

ENV PHP_VERSON 7.2

RUN apt-get update && apt-get upgrade -y \
    && apt-get install -y \
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

COPY ./nginx/logrotate/nginx /etc/logrotate.d/nginx

COPY ./nginx/config/default /etc/nginx/sites-available/default

COPY ./nginx/config/site.nginx.conf /etc/nginx/sites-available/site.nginx.conf
RUN ln -s /etc/nginx/sites-available/site.nginx.conf /etc/nginx/sites-enabled/site.nginx.conf

COPY ./php.ini /etc/php/7.2/fpm/php.ini

COPY ./run.sh /home/run.sh

ENTRYPOINT ["./home/run.sh"]
