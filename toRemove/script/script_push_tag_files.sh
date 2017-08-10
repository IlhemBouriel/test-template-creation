#!/bin/bash
path='/home/ubuntu/Desktop/tagFilesGitLab/';
d=$(date +%H:%M-%d-%b);
message="tagFiles were updated at ${d}";
echo $path;
echo $d;
echo $message;
(cd $path;git add --all ;git commit -m "${message}";git push origin master )
exit 0
