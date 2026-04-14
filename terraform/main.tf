terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1" # Default region, can be changed
}

# The S3 bucket to host the static website
resource "aws_s3_bucket" "website_bucket" {
  bucket = "devops-training-site-${random_id.bucket_suffix.hex}"
}

# A random suffix to ensure the bucket name is globally unique
resource "random_id" "bucket_suffix" {
  byte_length = 4
}

# Configure the bucket for static website hosting
resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html" # Assuming an SPA like React that handles routing
  }
}

# Disable block public access so the bucket policy can grant public read
resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket = aws_s3_bucket.website_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# Apply a bucket policy to allow public read access for the website
resource "aws_s3_bucket_policy" "public_read_access" {
  bucket = aws_s3_bucket.website_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.website_bucket.arn}/*"
      },
    ]
  })

  # Ensure the public access block is disabled before applying the policy
  depends_on = [aws_s3_bucket_public_access_block.public_access]
}

# Output the website endpoint URL so it can be easily copied
output "website_endpoint" {
  value       = aws_s3_bucket_website_configuration.website.website_endpoint
  description = "The URL of the static website"
}

output "bucket_name" {
  value       = aws_s3_bucket.website_bucket.bucket
  description = "The globally unique name of the S3 bucket"
}
