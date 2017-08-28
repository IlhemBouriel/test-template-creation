#!/bin/bash
path=$1;
(cd $path;git pull ssh_tag master);

exit 0
