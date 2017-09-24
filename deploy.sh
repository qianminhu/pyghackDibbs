#!/bin/bash

SOURCE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
STATIC_NODE_DIR=${SOURCE_DIR}/django/static/node/build
NODE_SOURCE_DIR=${SOURCE_DIR}/dibbs
NODE_BUILD_DIR=${SOURCE_DIR}/dibbs/build

NGINX_CONFIG_SRC=${SOURCE_DIR}/nginx/default
NGINX_CONFIG=/etc/nginx/sites-enabled/default





echo "Sources are located at ${SOURCE_DIR}"

echo "Building static site..."
cd ${NODE_SOURCE_DIR}
yarn build

if [[ -d ${STATIC_NODE_DIR} ]]; then
	echo Removing old static node sourcs:  ${STATIC_NODE_DIR} ...
	rm -rf ${STATIC_NODE_DIR}
fi

echo Copying ${STATIC_NODE_DIR} to ${NODE_BUILD_DIR}...
cp -r ${NODE_BUILD_DIR}/ ${STATIC_NODE_DIR}


echo Copying nginx config...
cp ${NGINX_CONFIG_SRC} ${NGINX_CONFIG}

echo restarting nginx...
service nginx restart

