#!/bin/bash
AWS_PROFILE=polish

AWS_STACK_NAME_BASE='polish'
ROOTDOMAINNAME='tomekwaller.com'
DOMAINNAME='polish.tomekwaller.com'
HOSTEDZONEID='Z0466805M9YXQ5NUCVE5'
ACMCERTIFICATEARN="arn:aws:acm:us-east-1:920911808053:certificate/cf9ad9f9-246e-44bf-80b9-f04bcc3e7def"

# aws cloudformation validate-template --template-body file://./.aws/template.yml
# aws cloudformation delete-stack --stack-name $AWS_STACK_NAME_BASE
# aws cloudformation wait stack-delete-complete --stack-name $AWS_STACK_NAME_BASE

aws cloudformation update-stack --stack-name $AWS_STACK_NAME_BASE \
    --template-body file://./.aws/template.yml \
    --parameters ParameterKey=DomainName,ParameterValue=$DOMAINNAME \
    --capabilities CAPABILITY_NAMED_IAM
aws cloudformation wait stack-update-complete --stack-name $AWS_STACK_NAME_BASE-tack-name