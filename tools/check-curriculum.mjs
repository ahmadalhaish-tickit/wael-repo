// Validates docs/CURRICULUM.md against docs/GLOSSARY.md.
//
// Mentor tooling. The student never runs this. It guards the two things that break
// silently and expensively:
//   1. A malformed or duplicated branch name — he pushes to the wrong branch and the
//      pull request becomes unreviewable.
//   2. A technical term used in a task with no glossary entry — he is stuck with no
//      way out and no obvious place to look.
//
// Run after any edit to either document: node --run check

import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const BRANCH_PATTERN = /^(week0[1-8]|stretch)\/[a-z0-9]+(-[a-z0-9]+)*$/

const REQUIRED_LABELS = ['Branch', 'Goal', 'Done when', 'Learn']

// A fixed list, deliberately, rather than every capitalised word. An open-ended scan
// produces noise, and a check that gets ignored is worse than no check at all.
const WATCHED_TERMS = [
  'localStorage', 'DOM', 'API', 'fetch', 'async', 'JSON', 'endpoint',
  'migration', 'schema', 'interface', 'promise', 'environment variable',
]

export function checkCurriculum (curriculumText, glossaryText) {
  const errors = []

  const glossaryTerms = new Set(
    [...glossaryText.matchAll(/^### (.+)$/gm)].map(m => m[1].trim().toLowerCase())
  )

  const blocks = curriculumText.split(/^### Task /m).slice(1)
  const branches = []

  for (const block of blocks) {
    const taskNumber = (block.match(/^([\d.A-Z]+)/) || [null, '?'])[1]

    for (const label of REQUIRED_LABELS) {
      if (!block.includes(`**${label}:**`)) {
        errors.push(`Task ${taskNumber}: missing **${label}:**`)
      }
    }

    const branchMatch = block.match(/\*\*Branch:\*\*\s*`([^`]+)`/)
    if (block.includes('**Branch:**') && !branchMatch) {
      errors.push(`Task ${taskNumber}: **Branch:** has no name in backticks`)
    } else if (branchMatch) {
      const branch = branchMatch[1]
      if (!BRANCH_PATTERN.test(branch)) {
        errors.push(
          `Task ${taskNumber}: branch name "${branch}" is malformed — ` +
          'expected weekNN/kebab-case-name or stretch/kebab-case-name'
        )
      }
      branches.push(branch)
    }
  }

  const seen = new Set()
  for (const branch of branches) {
    if (seen.has(branch)) errors.push(`duplicate branch name: ${branch}`)
    seen.add(branch)
  }

  // Ignore code spans: `JSON.stringify` is an API name, not a concept needing a
  // glossary entry, and flagging it would train the mentor to ignore this check.
  const prose = curriculumText.replace(/`[^`]*`/g, '')
  for (const term of WATCHED_TERMS) {
    const used = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(prose)
    if (used && !glossaryTerms.has(term.toLowerCase())) {
      errors.push(`"${term}" is used in the curriculum but has no glossary entry`)
    }
  }

  return { errors, taskCount: blocks.length, branchCount: new Set(branches).size }
}

const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]

if (isDirectRun) {
  const docs = join(dirname(fileURLToPath(import.meta.url)), '..', 'docs')
  const [curriculum, glossary] = await Promise.all([
    readFile(join(docs, 'CURRICULUM.md'), 'utf8'),
    readFile(join(docs, 'GLOSSARY.md'), 'utf8'),
  ])

  const { errors, taskCount, branchCount } = checkCurriculum(curriculum, glossary)

  if (errors.length) {
    for (const error of errors) console.error(`✗ ${error}`)
    console.error(`\n${errors.length} problem(s) found.`)
  } else {
    console.log(`✓ curriculum valid — ${taskCount} tasks, ${branchCount} branches`)
  }

  process.exit(errors.length ? 1 : 0)
}
