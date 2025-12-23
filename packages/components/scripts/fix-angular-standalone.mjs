import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const generatedFile = resolve(__dirname, '../../app/src/generated/components.ts');

if (!existsSync(generatedFile)) {
  console.log('Generated Angular components file not found, skipping standalone fix');
  process.exit(0);
}

let content = readFileSync(generatedFile, 'utf-8');

// Add standalone: true to all @Component decorators that don't have it
content = content.replace(
  /@Component\(\{\s*\n\s*selector:/g,
  '@Component({\n  standalone: true,\n  selector:'
);

writeFileSync(generatedFile, content);
console.log('Added standalone: true to generated Angular components');
