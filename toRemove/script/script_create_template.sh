#!/bin/bash
path='/home/ubuntu/Desktop/confTestgitLab/';
fileNmae=$1;
content=$2;
d=$(date +%H:%M-%d-%b);
message="New Conf Test  ${1} added at ${d}";
newFile=$path$fileNmae;
(cd $path;git pull origin master);

if [ ! -f $newFile ]; then
    echo "File not found!";
    echo $content > $newFile;
else
	echo "file already exist";
fi
 pwd

(cd $path;git add --all ;git commit -m "${message}";git push origin master)
exit 0
