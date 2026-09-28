const commitTypes = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'config',
        'delete',
        'docs',
        'feat',
        'fix',
        'init',
        'perf',
        'assets',
        'refactor',
        'revert',
        'security',
        'style',
        'test',
      ],
    ],
  },
};

export default commitTypes;
