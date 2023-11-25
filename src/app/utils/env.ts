export const apiBaseUrl =
  (import.meta.env.VITE_AUTH_API_BASE_URL as string) ?? '';

export const s3BucketName = (import.meta.env.VITE_S3_BUCKET as string) ?? '';

export const s3AwsRegion = (import.meta.env.VITE_AWS_S3_REGION as string) ?? '';

export const s3AwsAccessKey =
  (import.meta.env.VITE_AWS_ACCESS_KEY_ID as string) ?? '';

export const s3AwsSecretAccessKeyId =
  (import.meta.env.VITE_AWS_SECRET_ACCESS_KEY as string) ?? '';
