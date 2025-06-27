test('.gitignore is present', () => {
  const fs = require('fs');
  const exists = fs.existsSync('.gitignore');
  expect(exists).toBe(true);
});
