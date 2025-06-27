test('App.jsx imports Header and Footer', () => {
  const fs = require('fs');
  const content = fs.readFileSync('src/App.jsx', 'utf8');
  expect(content).toMatch(/import\s+Header\s+from\s+['\"]\.\/components\/Header['\"]/);
  expect(content).toMatch(/import\s+Footer\s+from\s+['\"]\.\/components\/Footer['\"]/);
});
