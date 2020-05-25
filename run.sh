#!/bin/bash
rm -rf data/
mkdir data
rm -rf data/dist
cp -r dist/. data/dist
cp -r public/. data/public
cp -r README.md data
cp -r plugin.json data