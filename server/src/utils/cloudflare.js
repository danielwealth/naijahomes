// src/utils/cloudflare.js
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { AppError } = require("../middleware/errorHandler");
const logger = require("./logger");

// ✅ Configure Cloudflare R2 client
const r2 = new S3Client({
  region: "auto", // R2 doesn’t use regions, "auto" works
  endpoint: process.env.R2_ENDPOINT, // e.g. https://<account_id>.r2.cloudflarestorage.com
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

// ✅ Upload file
exports.uploadFile = async (bucket, key, buffer, contentType) => {
  try {
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: buffer,
      ContentType: contentType,
    });
    await r2.send(command);
    logger.info(`File uploaded to R2: ${key}`);
    return { success: true, key };
  } catch (err) {
    logger.error("Cloudflare R2 upload failed", err);
    throw new AppError("Cloudflare R2 upload failed", 500);
  }
};

// ✅ Get file (returns stream)
exports.getFile = async (bucket, key) => {
  try {
    const command = new GetObjectCommand({ Bucket: bucket, Key: key });
    const response = await r2.send(command);
    logger.info(`File retrieved from R2: ${key}`);
    return response.Body; // stream
  } catch (err) {
    logger.error("Cloudflare R2 get file failed", err);
    throw new AppError("Cloudflare R2 get file failed", 404);
  }
};

// ✅ Delete file
exports.deleteFile = async (bucket, key) => {
  try {
    const command = new DeleteObjectCommand({ Bucket: bucket, Key: key });
    await r2.send(command);
    logger.info(`File deleted from R2: ${key}`);
    return { success: true, key };
  } catch (err) {
    logger.error("Cloudflare R2 delete failed", err);
    throw new AppError("Cloudflare R2 delete failed", 500);
  }
};

// ✅ Generate signed URL (optional, for secure access)
exports.getSignedUrlForFile = async (bucket, key, expiresIn = 3600) => {
  try {
    const command = new GetObjectCommand({ Bucket: bucket, Key: key });
    const url = await getSignedUrl(r2, command, { expiresIn });
    logger.info(`Signed URL generated for R2 file: ${key}`);
    return url;
  } catch (err) {
    logger.error("Cloudflare R2 signed URL generation failed", err);
    throw new AppError("Cloudflare R2 signed URL generation failed", 500);
  }
};
