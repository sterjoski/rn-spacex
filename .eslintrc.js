const pathGroups = ['components', 'config', 'library', 'res', 'screens']

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['import', 'unused-imports'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        es2020: true,
        node: true,
    },
    rules: {
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                pathGroups: pathGroups.map((path) => ({
                    pattern: `${path}/**`,
                    group: 'external',
                    position: 'after',
                })),
                pathGroupsExcludedImportTypes: ['builtin'],
            },
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports-ts': 'error',
        'unused-imports/no-unused-vars-ts': [
            'warn',
            { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],
        'react/prop-types': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        eqeqeq: 'error',
        'no-param-reassign': 'error',
        'no-unused-expressions': 'error',
        'prefer-const': 'error',
        'prefer-template': 'error',
        'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    },
}
