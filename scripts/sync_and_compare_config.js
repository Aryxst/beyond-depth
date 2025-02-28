import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

// Directory containing the default (auto-generated) configuration. To obtain this, delete the existing 'config' folder and launch the instance to regenerate it.
// Example:
const folder1 =
  "C:/Users/Aryxst/AppData/Roaming/PrismLauncher/instances/Beyond Depth DEV - No Config/minecraft/config";

// Directory containing modified configurations (to be included) and auto-generated configurations (to be excluded).
// Example:
const folder2 =
  "C:/Users/Aryxst/AppData/Roaming/PrismLauncher/instances/Beyond Depth DEV/minecraft/config";

// Directory to store differing files.
const outputFolder = "./config";

// Ensure the output directory exists.
fs.mkdirSync(outputFolder, { recursive: true });

/**
 * Computes the SHA-256 hash of a file's contents.
 * @param {string} filePath - The path to the file.
 * @returns {string} - The SHA-256 hash of the file.
 */
function computeFileHash(filePath) {
  const hash = crypto.createHash("sha256");
  const data = fs.readFileSync(filePath);
  hash.update(data);
  return hash.digest("hex");
}

/**
 * Recursively compares two directories and copies differing files to the output directory.
 * @param {string} dir1 - Path to the first directory.
 * @param {string} dir2 - Path to the second directory.
 * @param {string} outputDir - Path to the output directory.
 */
function compareAndCopy(dir1, dir2, outputDir) {
  const entries2 = fs.readdirSync(dir2, { withFileTypes: true });

  for (const entry of entries2) {
    const path2 = path.join(dir2, entry.name);
    const path1 = path.join(dir1, entry.name);
    const outputPath = path.join(outputDir, entry.name);

    if (entry.isDirectory()) {
      // Recursively compare subdirectories.
      compareAndCopy(path1, path2, outputPath);
    } else if (entry.isFile()) {
      let shouldCopy = false;

      if (fs.existsSync(path1)) {
        // Both files exist; compare their contents.
        const hash1 = computeFileHash(path1);
        const hash2 = computeFileHash(path2);
        if (hash1 !== hash2) {
          shouldCopy = true;
        }
      } else {
        // File exists only in dir2.
        shouldCopy = true;
      }

      if (shouldCopy) {
        // Ensure the output directory exists.
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        // Copy the file.
        fs.copyFileSync(path2, outputPath);
        console.log(`Copied: ${outputPath}`);
      }
    }
  }
}

// Execute the comparison.
compareAndCopy(folder1, folder2, outputFolder);
console.log("Comparison complete. Unique or differing files are in:", outputFolder);
