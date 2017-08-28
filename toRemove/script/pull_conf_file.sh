#!/bin/bash
path=$1;
(cd $path;git pull ssh_conf master);

exit 0
