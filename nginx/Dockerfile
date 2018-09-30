from ubuntu

RUN apt-get update && apt-get upgrade -y \
	&& apt-get install -y \
    python-software-properties \
    software-properties-common \
    && LC_ALL=C.UTF-8 add-apt-repository ppa:nginx/stable \
	&& apt-get update && apt-get upgrade -y \
	&& apt-get install -y \
	nginx \
	nginx-extras

ENTRYPOINT ["./run.sh"]