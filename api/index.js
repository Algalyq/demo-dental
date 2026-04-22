const fs = require("fs");
const path = require("path");

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".jsx": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

module.exports = async (req, res) => {
  let filePath = req.url === "/" ? "/index.html" : req.url;
  
  // Remove query params
  filePath = filePath.split("?")[0];
  
  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || "application/octet-stream";

  // Construct absolute path
  const absolutePath = path.join(process.cwd(), filePath);

  try {
    // Check if file exists
    if (fs.existsSync(absolutePath)) {
      const content = fs.readFileSync(absolutePath);
      res.setHeader("Content-Type", contentType);
      res.status(200).send(content);
    } else {
      // Fallback to index.html for SPA routing
      const indexPath = path.join(process.cwd(), "index.html");
      const indexContent = fs.readFileSync(indexPath, "utf-8");
      res.setHeader("Content-Type", "text/html");
      res.status(200).send(indexContent);
    }
  } catch (error) {
    console.error("Error serving file:", error);
    res.status(500).send("Internal Server Error");
  }
};
