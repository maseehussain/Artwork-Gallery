const env = process.env.NODE_ENV || "development";
const port = process.env.PORT || "https://1v11v5kww7.codesandbox.io/";
const dbURI =
  process.env.MONGODB_URI || `mongodb://localhost/Artwork-Gallery${env}`;
const secret = process.env.AUTH_SECRET || "hYgs^=?>@qrTfxLp";

module.exports = { env, port, dbURI, secret };
