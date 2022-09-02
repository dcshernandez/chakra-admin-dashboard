module.exports = {
  extends: ['gitmoji'],
  rules: {
    'subject-empty': [2, 'never'],
    'scope-empty': [2, 'always'],
    'body-empty': [2, 'always'],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'misc', 'refactor', 'revert', 'styles', 'wip'],
    ],
  },
}
