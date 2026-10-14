import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('\n========================================');
console.log('  Indian Heritage Platform Test Suite   ');
console.log('========================================\n');

// 1. Verify requirements.txt exists at root and in django_project
console.log('Test Suite 1: Project Structure & Desktop Readiness');
assert(fs.existsSync(path.join(rootDir, 'requirements.txt')), 'Root requirements.txt exists');
assert(fs.existsSync(path.join(rootDir, 'django_project', 'requirements.txt')), 'django_project/requirements.txt exists');
assert(fs.existsSync(path.join(rootDir, 'README.md')), 'Root README.md exists');
assert(fs.existsSync(path.join(rootDir, 'package.json')), 'package.json exists');

// 2. Verify Export & Zip Archive
console.log('\nTest Suite 2: Export to Desktop Packaging');
const zipPath = path.join(rootDir, 'public', 'download', 'indian_heritage_platform_full_project.zip');
assert(fs.existsSync(zipPath), 'Public download zip exists');
if (fs.existsSync(zipPath)) {
  const stats = fs.statSync(zipPath);
  assert(stats.size > 1000000, `Zip archive contains full codebase (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
}

// 3. Verify Heritage Data Integrity
console.log('\nTest Suite 3: Living Heritage Dataset Integrity');
const heritageDataFile = fs.readFileSync(path.join(rootDir, 'lib', 'heritage-data.ts'), 'utf-8');
assert(heritageDataFile.includes('INITIAL_HERITAGE_ENTRIES'), 'INITIAL_HERITAGE_ENTRIES exported');
assert(heritageDataFile.includes('KNOWLEDGE_KEEPERS'), 'KNOWLEDGE_KEEPERS exported');
assert(heritageDataFile.includes('ORAL_STORIES'), 'ORAL_STORIES exported');
assert(heritageDataFile.includes('LEARNING_MODULES'), 'LEARNING_MODULES exported');
assert(heritageDataFile.includes('QUIZ_QUESTIONS'), 'QUIZ_QUESTIONS exported');

// Verify key living traditions are present
assert(heritageDataFile.includes('Rogan Art') || heritageDataFile.includes('rogan'), 'Rogan Art living tradition documented');
assert(heritageDataFile.includes('Majuli') || heritageDataFile.includes('majuli'), 'Majuli Mask Making documented');
assert(heritageDataFile.includes('Pokkali') || heritageDataFile.includes('pokkali'), 'Pokkali Saline Rice Farming documented');
assert(heritageDataFile.includes('Toda') || heritageDataFile.includes('toda'), 'Toda Buffalo Pastoralism & Embroidery documented');
assert(heritageDataFile.includes('Kondapalli') || heritageDataFile.includes('kondapalli'), 'Kondapalli Wooden Toys documented');

// 4. Verify No SIH / Hackathon references
console.log('\nTest Suite 4: Terminology Compliance');
const hasSIHInCode = /sih[0-9]|smart\s*india\s*hackathon/i.test(heritageDataFile);
assert(!hasSIHInCode, 'No SIH or hackathon mentions in heritage datasets');

const heroContent = fs.readFileSync(path.join(rootDir, 'components', 'Hero.tsx'), 'utf-8');
assert(!/smart\s*india\s*hackathon|sih/i.test(heroContent), 'Hero component clean of SIH references');

const navContent = fs.readFileSync(path.join(rootDir, 'components', 'Navbar.tsx'), 'utf-8');
assert(!/smart\s*india\s*hackathon|sih/i.test(navContent), 'Navbar component clean of SIH references');

// 5. Verify Components & App Router
console.log('\nTest Suite 5: Frontend UI Architecture');
const requiredComponents = [
  'Navbar.tsx',
  'Hero.tsx',
  'FeaturedTraditions.tsx',
  'TraditionsAtRisk.tsx',
  'LivingHeritage.tsx',
  'HeritageMap.tsx',
  'KnowledgeKeepers.tsx',
  'StoriesSection.tsx',
  'LearningSection.tsx',
  'ContributeSection.tsx',
  'ExportDesktopModal.tsx',
  'Footer.tsx'
];

for (const comp of requiredComponents) {
  const compPath = path.join(rootDir, 'components', comp);
  assert(fs.existsSync(compPath), `Component ${comp} exists and is available`);
}

// 6. Verify Django Backend files
console.log('\nTest Suite 6: Django Backend Integrity');
assert(fs.existsSync(path.join(rootDir, 'django_project', 'manage.py')), 'Django manage.py exists');
assert(fs.existsSync(path.join(rootDir, 'django_project', 'heritage', 'models.py')), 'Django models.py exists');
assert(fs.existsSync(path.join(rootDir, 'django_project', 'heritage', 'views.py')), 'Django views.py exists');
assert(fs.existsSync(path.join(rootDir, 'django_project', 'heritage', 'tests.py')), 'Django tests.py test suite configured');

// Summary
console.log('\n========================================');
console.log(`Test Results: ${passedTests}/${totalTests} Passed (${failedTests} Failed)`);
console.log('========================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('All tests passed successfully! ✨\n');
  process.exit(0);
}
