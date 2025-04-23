test('Gitignore present', () => {
  const fs = require('fs'); const exists = fs.existsSync('.gitignore'); expect(exists).toBe(true);
});
