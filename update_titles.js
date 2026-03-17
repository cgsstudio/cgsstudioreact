
const fs = require('fs');
const path = require('path');

const serviceDir = './src/page/service';
const files = fs.readdirSync(serviceDir);

files.forEach(file => {
    if (!file.endsWith('.jsx')) return;
    const filePath = path.join(serviceDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Pattern to match titles with "Service" or "Services" and "Company"
    // We look for title props in BreadCrumb or <title> tags
    
    // 1. BreadCrumb title/breadcrumbTitle
    // Find strings that have "Service" or "Services" AND "Company"
    const bcRegex = /(title|breadcrumbTitle)=["']([^"']*)["']/gi;
    content = content.replace(bcRegex, (match, p1, p2) => {
        if ((p2.toLowerCase().includes('service') || p2.toLowerCase().includes('services')) && p2.toLowerCase().includes('company')) {
            changed = true;
            // Case insensitive replace of Company with Agency
            const newVal = p2.replace(/\bCompany\b/gi, 'Agency');
            return `${p1}="${newVal}"`;
        }
        return match;
    });

    // 2. Helmet title
    const helmetRegex = /<title>([^<]*)<\/title>/gi;
    content = content.replace(helmetRegex, (match, p1) => {
        if ((p1.toLowerCase().includes('service') || p1.toLowerCase().includes('services')) && p1.toLowerCase().includes('company')) {
            changed = true;
            const newVal = p1.replace(/\bCompany\b/gi, 'Agency');
            return `<title>${newVal}</title>`;
        }
        return match;
    });

    if (changed) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated: ${file}`);
    }
});
