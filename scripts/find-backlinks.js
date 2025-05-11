const fs = require('fs');
const path = require('path');

const target = process.argv[2];

if (!target) {
  console.error('Usage: node find-backlinks.js <target-path-or-name>');
  process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');

function searchFiles(dir) {
  const results = [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results.push(...searchFiles(filePath));
    } else if (/\.(js|jsx|ts|tsx|md|mdx|html)$/.test(file)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split(/\r?\n/);
      lines.forEach((line, index) => {
        if (line.includes(target)) {
          results.push({
            file: path.relative(rootDir, filePath),
            line: index + 1,
            text: line.trim()
          });
        }
      });
    }
  });

  return results;
}

const backlinks = searchFiles(rootDir);

if (backlinks.length === 0) {
  console.log(`No backlinks found for "${target}".`);
} else {
  console.log(`Backlinks found for "${target}":`);
  backlinks.forEach(({ file, line, text }) => {
    console.log(`${file}:${line} - ${text}`);
  });
}
