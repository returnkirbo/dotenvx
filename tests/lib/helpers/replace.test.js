const t = require('tap')

const replace = require('../../../src/lib/helpers/replace')

t.test('#replace', ct => {
  const src = 'HELLO=World'

  const newSrc = replace(src, 'HELLO', 'Universe')
  ct.same(newSrc, 'HELLO="Universe"')

  ct.end()
})

t.test('#replace with single quotes', ct => {
  const src = 'HELLO=\'World\''

  const newSrc = replace(src, 'HELLO', 'Universe')
  ct.same(newSrc, 'HELLO="Universe"')

  ct.end()
})

t.test('#replace with double quotes', ct => {
  const src = 'HELLO="World"'

  const newSrc = replace(src, 'HELLO', 'Universe')
  ct.same(newSrc, 'HELLO="Universe"')

  ct.end()
})

t.test('#replace appends when key does not yet exist', ct => {
  const src = 'HELLO=World'

  const newSrc = replace(src, 'API_KEY', '1234')
  ct.same(newSrc, 'HELLO=World\nAPI_KEY="1234"')

  ct.end()
})

t.test('#replace appends smartly if ending newline already', ct => {
  const src = 'HELLO=World\n'

  const newSrc = replace(src, 'API_KEY', '1234')
  ct.same(newSrc, 'HELLO=World\nAPI_KEY="1234"\n')

  ct.end()
})