#!/usr/bin/env node

/**
 * Auto-generates jsx.d.ts from Stencil's component types.
 * Run this after building @components/core to update the JSX type declarations.
 */

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const COMPONENTS_DTS_PATH = join(
  __dirname,
  '../../../components/core/dist/types/components.d.ts'
);
const OUTPUT_PATH = join(__dirname, '../src/jsx.d.ts');

function extractComponentNames(content) {
  // Find the LocalJSX.IntrinsicElements interface and extract component names
  const intrinsicElementsMatch = content.match(
    /declare namespace LocalJSX \{[\s\S]*?interface IntrinsicElements \{([\s\S]*?)\n    \}/
  );

  if (!intrinsicElementsMatch) {
    throw new Error('Could not find LocalJSX.IntrinsicElements in components.d.ts');
  }

  const intrinsicElementsContent = intrinsicElementsMatch[1];

  // Extract component names (they're in quotes like "ui-chip": UiChip)
  const componentRegex = /"([a-z-]+)":/g;
  const components = [];
  let match;

  while ((match = componentRegex.exec(intrinsicElementsContent)) !== null) {
    components.push(match[1]);
  }

  return components;
}

function generateJsxDts(components) {
  const componentEntries = components
    .map((name) => `      '${name}': WithChildren<StencilJSX.IntrinsicElements['${name}']>;`)
    .join('\n');

  return `/**
 * JSX type declarations for Stencil web components.
 * This file augments jsx-dom's JSX namespace with our component types,
 * enabling full auto-completion when writing JSX in stories.
 *
 * AUTO-GENERATED - DO NOT EDIT MANUALLY
 * Run \`pnpm generate:jsx-types\` to regenerate.
 */

import type { JSX as StencilJSX } from '@components/core';
import type { ReactNode } from 'jsx-dom';

// Helper type that adds children support to web component types (for slot content)
type WithChildren<T> = T & { children?: ReactNode };

// Augment jsx-dom's JSX namespace with Stencil component types
declare module 'jsx-dom' {
  namespace JSX {
    interface IntrinsicElements {
${componentEntries}
    }
  }
}

export {};
`;
}

function main() {
  console.log('Reading Stencil component types...');

  let content;
  try {
    content = readFileSync(COMPONENTS_DTS_PATH, 'utf-8');
  } catch (error) {
    console.error(`Error: Could not read ${COMPONENTS_DTS_PATH}`);
    console.error('Make sure @components/core is built first: pnpm --filter @components/core build');
    process.exit(1);
  }

  const components = extractComponentNames(content);
  console.log(`Found ${components.length} components: ${components.join(', ')}`);

  const jsxDts = generateJsxDts(components);

  writeFileSync(OUTPUT_PATH, jsxDts);
  console.log(`Generated ${OUTPUT_PATH}`);
}

main();
