test('File added', () => {
  const fs = require('fs'); const content = fs.readFileSync('log.txt', 'utf8'); expect(content.length).toBeGreaterThan(0);
});
