#!/bin/bash
d=$(date +%H:%M-%d-%b);
message="Last TAG Files push ${d}";
echo $path;
echo $d;
echo $message;
(cd /home/ubuntu/Desktop/tagFilesGitLab/;git add --all ;git commit -m "${message}";git push origin master )
exit 0
