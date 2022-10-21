import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const vpc = new awsx.ec2.Vpc("scratch", {
    cidrBlock: "172.20.0.0/22",
})
