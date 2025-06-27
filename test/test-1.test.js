test('Components folder contains Header.jsx and Footer.jsx', () => {
  const fs = require('fs');
  const path = require('path');
  const componentsPath = path.join('src', 'components');
  const files = fs.readdirSync(componentsPath);
  expect(files).toContain('Header.jsx');
  expect(files).toContain('Footer.jsx');
});
