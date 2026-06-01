const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      filelist.push(dirFile);
    }
  });
  return filelist;
}

const files = walkSync('src');
let hasError = false;

files.forEach(file => {
  if (!file.endsWith('.js') && !file.endsWith('.jsx')) return;
  const content = fs.readFileSync(file, 'utf-8');
  const importRegex = /import\s+.*?\s+from\s+['"](.*?)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    let importPath = match[1];
    if (importPath.startsWith('.')) {
      const resolvedPath = path.resolve(path.dirname(file), importPath);
      const dir = path.dirname(resolvedPath);
      const basename = path.basename(resolvedPath);
      try {
        const filesInDir = fs.readdirSync(dir);
        if (!filesInDir.includes(basename)) {
          if (!basename.includes('.')) {
              if (!filesInDir.includes(basename + '.js') && !filesInDir.includes(basename + '.jsx')) {
                  console.error('Case mismatch or missing: ' + importPath + ' in ' + file);
                  hasError = true;
              }
          } else {
              console.error('Case mismatch or missing: ' + importPath + ' in ' + file);
              hasError = true;
          }
        }
      } catch (e) {
        console.error('Directory not found for: ' + importPath + ' in ' + file);
        hasError = true;
      }
    }
  }
});
if (!hasError) console.log('All local imports match exact case.');