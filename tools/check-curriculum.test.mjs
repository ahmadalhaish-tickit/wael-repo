import { test } from 'node:test'
import assert from 'node:assert/strict'
import { checkCurriculum } from './check-curriculum.mjs'

const validTask = (n, branch) => `### Task ${n}: Something\n\n` +
  `**Branch:** \`${branch}\`\n\n**Goal:** Do a thing.\n\n` +
  `**Done when:**\n- [ ] it works\n\n**Learn:** [MDN](https://developer.mozilla.org/)\n\n`

test('accepts a well-formed curriculum', () => {
  const result = checkCurriculum(validTask('1.1', 'week01/first'), '### html\nThe language of pages.\n')
  assert.deepEqual(result.errors, [])
  assert.equal(result.taskCount, 1)
  assert.equal(result.branchCount, 1)
})

test('rejects a duplicate branch name', () => {
  const text = validTask('1.1', 'week01/same') + validTask('1.2', 'week01/same')
  const { errors } = checkCurriculum(text, '')
  assert.equal(errors.length, 1)
  assert.match(errors[0], /duplicate branch/i)
  assert.match(errors[0], /week01\/same/)
})

test('rejects a malformed branch name', () => {
  const { errors } = checkCurriculum(validTask('1.1', 'Week1/Bad_Name'), '')
  assert.ok(errors.some(e => /branch name/i.test(e)))
})

test('rejects a task missing a required label', () => {
  const text = '### Task 1.1: Something\n\n**Branch:** `week01/x`\n\n**Goal:** Do a thing.\n'
  const { errors } = checkCurriculum(text, '')
  assert.ok(errors.some(e => /Done when/.test(e)))
  assert.ok(errors.some(e => /Learn/.test(e)))
})

test('names the task number in a missing-label error', () => {
  const text = '### Task 4.2: Something\n\n**Branch:** `week04/x`\n\n**Goal:** Do a thing.\n\n**Learn:** x\n'
  const { errors } = checkCurriculum(text, '')
  assert.ok(errors.some(e => /4\.2/.test(e) && /Done when/.test(e)))
})

test('reports a term used in the curriculum but missing from the glossary', () => {
  const text = validTask('1.1', 'week01/x').replace('Do a thing.', 'Use localStorage here.')
  const { errors } = checkCurriculum(text, '### html\nThe language of pages.\n')
  assert.ok(errors.some(e => /localstorage/i.test(e) && /glossary/i.test(e)))
})

test('is case-insensitive when matching glossary terms', () => {
  const text = validTask('1.1', 'week01/x').replace('Do a thing.', 'Use LocalStorage here.')
  const { errors } = checkCurriculum(text, '### localstorage\nBrowser storage.\n')
  assert.deepEqual(errors, [])
})

test('accepts a stretch branch name', () => {
  const { errors } = checkCurriculum(validTask('S.1', 'stretch/signup'), '')
  assert.deepEqual(errors, [])
})

test('counts tasks and branches across many milestones', () => {
  const text = validTask('1.1', 'week01/a') + validTask('2.1', 'week02/b') + validTask('S.1', 'stretch/c')
  const { taskCount, branchCount, errors } = checkCurriculum(text, '')
  assert.deepEqual(errors, [])
  assert.equal(taskCount, 3)
  assert.equal(branchCount, 3)
})

test('does not report a watchlist term that appears only inside a code span', () => {
  const text = validTask('1.1', 'week01/x').replace('Do a thing.', 'Run `JSON.stringify` on it.')
  const { errors } = checkCurriculum(text, '')
  assert.deepEqual(errors, [])
})
