#!/bin/bash
fileNmae=$1;
content=$2;
path=$3;
d=$(date +%H:%M-%d-%b);
message="New TestPlan  ${1} added ${d}";
newFile=$path$fileNmae;
(cd $path;git pull ssh_plan master);

if [ ! -f $newFile ]; then
    echo "File not found!";
    echo $content > $newFile;
else
	echo "file already exist";
fi
 pwd

(cd $path;git add --all ;git commit -m "${message}";git push ssh_plan master)
exit 0
