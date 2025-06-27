test('vite.config.js is present', () => {
  const fs = require('fs');
  const exists = fs.existsSync('vite.config.js');
  expect(exists).toBe(true);
});
