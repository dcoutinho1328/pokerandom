FROM ubuntu:22.04

RUN apt update \
    && apt-get update \
    && apt -y install curl \
    && curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt -y install nodejs \
    sudo \
    nano \
    iputils-ping \
    net-tools \
    git \
    unzip \
    python3 \
    python3-pip \
    python-is-python3

ARG USER=admin
ARG UID=1000
ARG GID=$UID
ARG PW=admin

RUN groupadd --gid $GID $USER \
    && useradd --uid $UID --gid $GID -m $USER && echo "${USER}:${PW}" | chpasswd

RUN echo $USER ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USER \
    && chmod 0440 /etc/sudoers.d/$USER

USER ${USER}

SHELL ["/bin/bash", "-i", "-c"]
