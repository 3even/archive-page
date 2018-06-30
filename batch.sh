#!/bin/bash
input=$1
while IFS= read -r var
do
  node archive.js --url=$var --headless=true
done < "$input"
