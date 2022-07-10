#!/bin/bash
AWS_PROFILE=polish

# ls ./site/*
aws s3 cp ./site/ s3://920911808053-polishtest  --recursive