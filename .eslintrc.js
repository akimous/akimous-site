module.exports = {
    plugins: [
        'svelte3',
    ],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2019
    },
    overrides: [
        {
            files: ['**/*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    rules: {
        indent: [
            'warn',
            4,
            {
                SwitchCase: 1
            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        quotes: [
            'warn',
            'single'
        ],
        semi: [
            'warn',
            'never'
        ],
        'no-console': 'off',
        'no-implied-eval': 'warn',
        'no-invalid-this': 'error',
        'no-loop-func': 'warn',
        'no-cond-assign': 'off',
    },
    globals: {
        process: false,
        page: true,
        browser: true,
        context: true,
    },
}
