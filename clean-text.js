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
files.push('./components/sections/Act3Design.tsx');
files.push('./components/sections/Act5Impact.tsx');
files.push('./components/sections/Act4Engineering.tsx');
files.push('./components/sections/BusinessIntentSection.tsx');
files.push('./components/sections/RiskReductionSection.tsx');
files.push('./components/sections/ProcessSection.tsx');
files.push('./components/sections/TestimonialsSection.tsx');
files.push('./components/sections/EngagementStandardSection.tsx');
files.push('./components/sections/Act6Future.tsx');
files.push('./components/sections/TechStackSection.tsx');
files.push('./components/ui/Footer.tsx');
files.push('./components/ui/Chatbot.tsx');

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/text-white\/80/g, 'text-fg-muted');
    content = content.replace(/text-white\/50/g, 'text-fg-muted');
    content = content.replace(/text-white\/40/g, 'text-fg-muted');
    content = content.replace(/text-white\/30/g, 'text-fg-muted opacity-60');
    content = content.replace(/text-white/g, 'text-black');
    content = content.replace(/bg-white\/5/g, 'bg-black/5');
    content = content.replace(/bg-white\/10/g, 'bg-black/10');
    content = content.replace(/border-white\/10/g, 'border-black/10');
    content = content.replace(/border-white\/20/g, 'border-black/20');
    fs.writeFileSync(file, content);
  }
});
console.log('Done');
