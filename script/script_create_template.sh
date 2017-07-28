#!/bin/bash
path='/home/ubuntu/Desktop/testConf/';
fileNmae=$1;
content=$2;
newFile=$path$fileNmae;
if [ ! -f $newFile ]; then
    echo "File not found!"
    echo $content > $newFile;
else
	echo "file already exist";
fi
 
exit 0