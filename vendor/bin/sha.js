#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

export PATH=$DIR:$PATH

$DIR/../../node_modules/sha.js/bin.js $@