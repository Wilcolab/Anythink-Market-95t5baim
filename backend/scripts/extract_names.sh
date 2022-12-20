#!/bin/bash

INPUT=$1
OLDIFS=$IFS
IFS=','
[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }

while read id lastname firstname email price country
# if email containt @amazon.com then
do
    if [[ ${email,,} == *"@amazon.com"* ]]; then
	    echo "$firstname $lastname " >> results.txt
    fi

done < $INPUT
IFS=$OLDIFS
