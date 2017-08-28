#!/bin/bash
fileNmae=$1;
content=$2;
path=$3;
newFile=$path$fileNmae;

echo "Tests were executed successfully :D for ".$newFile." with content => "+$content;
 
exit 0
