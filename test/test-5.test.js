test('package.json contains vite', () => {
  const fs = require('fs');
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const hasVite = (pkg.dependencies && pkg.dependencies.vite) || (pkg.devDependencies && pkg.devDependencies.vite);
  expect(!!hasVite).toBe(true);
});
