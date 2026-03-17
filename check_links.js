
const fs = require('fs');
const path = require('path');

const serviceDataPath = './src/data/serviceData.js';
const routerPath = './src/router/index.jsx';

const serviceDataContent = fs.readFileSync(serviceDataPath, 'utf8');
const routerContent = fs.readFileSync(routerPath, 'utf8');

// Simple regex to extract links from serviceData.js
const linkRegex = /link:\s*["']([^"']+)["']/g;
const links = [];
let match;
while ((match = linkRegex.exec(serviceDataContent)) !== null) {
  links.push(match[1]);
}

// Simple check for existence in routerContent
const missingLinks = links.filter(link => {
  const parts = link.split('/');
  const lastPart = parts[parts.length - 1];
  
  if (!lastPart) return false;
  
  const pathRegex = new RegExp(`path:\\s*["']${lastPart}["']`, 'i');
  const fullPathRegex = new RegExp(`path:\\s*["']${link}["']`, 'i');
  
  return !pathRegex.test(routerContent) && !fullPathRegex.test(routerContent);
});

console.log('Total links found:', links.length);
console.log('Missing links:', JSON.stringify(missingLinks, null, 2));
