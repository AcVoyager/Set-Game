#! /bin/bash
# 03/16/2021 By Chang Xu
# create a new React component

srcFile=$PWD/src/Template.js
srcDir=$PWD/src

desFileName=$1.js
desFile=$srcDir/components/$desFileName

# cp $srcDir/Template.js $desFile
sed 's/Template/'$1'/g' $srcFile > $desFile
echo $desFileName created