const fs = require('fs');
const path = require('path');

function getFiles(dir, files_) {
  files_ = files_ || [];
  let files = fs.readdirSync(dir);
  for (let i in files) {
    let name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      if (name.endsWith('.jsx')) {
        files_.push(name);
      }
    }
  }
  return files_;
}

const dashboardFiles = getFiles(path.join(__dirname, 'src/dashboard'));
// exclude src/dashboard/index.jsx as it is already correct
const filesToUpdate = dashboardFiles.filter(f => !f.endsWith('dashboard/index.jsx') && !f.endsWith('dashboard\\index.jsx'));

function updateTheme(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Colors mapping
  content = content.replace(/text-white\/[0-9]+/g, 'text-slate-500');
  content = content.replace(/border-white\/[0-9]+/g, 'border-slate-200');
  content = content.replace(/bg-white\/\[[0-9.]+\]/g, 'bg-slate-50 hover:bg-slate-100');
  content = content.replace(/bg-white\/[0-9]+/g, 'bg-slate-50');
  
  content = content.replace(/text-white(?![\w\-\/])/g, 'text-slate-900');
  
  // Amber -> Blue
  content = content.replace(/amber-500\/[0-9]+/g, 'blue-100');
  content = content.replace(/amber-400\/[0-9]+/g, 'blue-100');
  content = content.replace(/text-amber-500/g, 'text-blue-600');
  content = content.replace(/text-amber-400/g, 'text-blue-600');
  content = content.replace(/bg-amber-500/g, 'bg-blue-600');
  content = content.replace(/border-amber-500/g, 'border-blue-200');
  content = content.replace(/from-amber-500/g, 'from-blue-600');
  content = content.replace(/to-amber-600/g, 'to-blue-700');
  content = content.replace(/hover:from-amber-400/g, 'hover:from-blue-500');
  content = content.replace(/hover:to-amber-500/g, 'hover:to-blue-600');
  content = content.replace(/shadow-amber-500/g, 'shadow-blue-500');
  content = content.replace(/hover:text-amber-400/g, 'hover:text-blue-600');
  content = content.replace(/hover:border-amber-500\/30/g, 'hover:border-blue-300');
  
  // Specific dark bg
  content = content.replace(/bg-\[\#[0-9a-fA-F]{6}\]/g, 'bg-white');
  content = content.replace(/bg-black(?![\w\-\/])/g, 'bg-white');
  content = content.replace(/bg-black\/[0-9]+/g, 'bg-white');
  content = content.replace(/text-black/g, 'text-white'); // For buttons that were amber
  content = content.replace(/text-slate-900/g, 'text-slate-900'); // Clean up any duplicate

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated theme in', filePath);
}

filesToUpdate.forEach(updateTheme);
