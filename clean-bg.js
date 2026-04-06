const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if(file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}
const files = walk('./app');
files.push('./components/sections/Act1Chaos.tsx');
files.push('./components/sections/Act3Design.tsx');
files.push('./components/sections/Act5Impact.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/const MainCanvas = dynamic[\s\S]*?\}\)/g, '');
  content = content.replace(/<MainCanvas[^>]*\/>/g, '');
  content = content.replace(/hero-bg/g, '');
  content = content.replace(/hero-overlay/g, '');
  content = content.replace(/nebula-bg/g, '');
  fs.writeFileSync(file, content);
});
console.log('Done');
