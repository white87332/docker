from ubuntu

ENV PHP_VERSON 7.2

RUN apt-get update && apt-get upgrade -y \
    && apt-get install -y \
    python-software-properties \
    software-properties-common \
    && LC_ALL=C.UTF-8 apt-add-repository ppa:ondrej/php \
    && apt-get update && apt-get upgrade -y \
    && apt-get install -y \
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
    php$PHP_VERSON-cli \
    php$PHP_VERSON-zip \
    php$PHP_VERSON-curl \
    php$PHP_VERSON-redis \
    && LC_ALL=C.UTF-8 add-apt-repository ppa:nginx/stable \
	&& apt-get update && apt-get upgrade -y \
	&& apt-get install -y \
	nginx \
	nginx-extras

ENTRYPOINT ["./run.sh"]