#!/bin/bash
d=$(date +%H:%M-%d-%b);
message="Last TAG Files push ${d}";
path=$1;
(cd $path;git add --all ;git commit -m "${message}";git push ssh_tag master )
exit 0
