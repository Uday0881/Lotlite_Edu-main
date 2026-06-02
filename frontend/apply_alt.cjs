const fs = require('fs');
let c = fs.readFileSync('src/components/home/FounderMessage.jsx', 'utf8');
c = c.replace('U. K. Alok — Founder & Managing Partner', 'Founder and CEO of Lotlite speaking about the future of PropTech education');
fs.writeFileSync('src/components/home/FounderMessage.jsx', c);