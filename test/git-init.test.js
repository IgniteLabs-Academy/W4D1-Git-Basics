test('Git init', () => {
  const fs = require('fs'); const exists = fs.existsSync('.git'); expect(exists).toBe(true);
});
