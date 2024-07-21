#!/usr/bin/env node

import cliWelcome from 'cli-welcome'
import pkgJSON from './package.json' with { "type": "json" }


cliWelcome({
  title: pkgJSON.name,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
})

console.log(`
  Pascal Ziener - Software Engineer

  🐦 Twitter/X: https://x.com/PascalZiener
  📖 GitHub:    https://github.com/PascalZiener

`)
