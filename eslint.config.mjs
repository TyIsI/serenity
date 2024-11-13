import tsx from '@tyisi/config-eslint/tsx'
import jest from 'eslint-plugin-jest'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'

tsx[0].files.push('src/**/**.ts')
tsx[0].files.push('.storybook/**/**.ts')
tsx[0].rules['import/order'] = [
    'error',
    {
        'alphabetize': {
            caseInsensitive: true,
            order: 'asc'
        },

        'groups': ['builtin', 'type', 'external', 'internal', 'parent', 'sibling', 'object'],
        'newlines-between': 'always',

        'pathGroups': [
            {
                group: 'builtin',
                pattern: 'react',
                position: 'before'
            },
            {
                group: 'internal',
                pattern: '@/app/**',
                position: 'before'
            },
            {
                group: 'internal',
                pattern: '@/components/**',
                position: 'before'
            },
            {
                group: 'internal',
                pattern: '@/images/**',
                position: 'before'
            },
            {
                group: 'internal',
                pattern: '@/lib/**',
                position: 'before'
            },
            {
                group: 'internal',
                pattern: '@/pages/**',
                position: 'before'
            },
            {
                group: 'internal',
                pattern: '@/providers/**',
                position: 'before'
            },
            {
                group: 'internal',
                pattern: '@/shared/**',
                position: 'before'
            },
            {
                group: 'internal',
                pattern: '@/services/**',
                position: 'before'
            },
            {
                group: 'internal',
                pattern: '@/types/**',
                position: 'before'
            },
            {
                group: 'object',
                pattern: '**/**.(class|types)',
                position: 'after'
            },
            {
                group: 'internal',
                pattern: '**/**.s?css',
                position: 'before'
            },
            {
                group: 'parent',
                pattern: '../**/**.s?css',
                position: 'after'
            },
            {
                group: 'sibling',
                pattern: './**/**.s?css',
                position: 'after'
            },
            {
                group: 'parent',
                pattern: '../**/**.(class|types)',
                position: 'after'
            },
            {
                group: 'sibling',
                pattern: './**/**.(class|types)',
                position: 'after'
            }
        ],

        'pathGroupsExcludedImportTypes': ['react']
    }
]

tsx[0].rules['@typescript-eslint/no-unused-vars'] = [
    'error',
    {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_'
    }
]

tsx[0].rules['@typescript-eslint/no-magic-numbers'] = 'off'
tsx[0].rules['@typescript-eslint/class-methods-use-this'] = 'off'

tsx[0].rules['@typescript-eslint/naming-convention'] = [
    'error',
    {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble'
    },
    {
        selector: 'import',
        format: ['camelCase', 'PascalCase']
    },
    {
        selector: 'variableLike',
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
    },
    {
        selector: 'variable',
        modifiers: ['const'],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
    },
    {
        selector: 'variable',
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
    },
    {
        selector: 'typeLike',
        format: ['PascalCase']
    },
    {
        selector: 'variable',
        format: ['strictCamelCase'],
        leadingUnderscore: 'allowSingleOrDouble',
        modifiers: ['destructured']
    },
    {
        selector: 'objectLiteralProperty',
        format: null,
        modifiers: ['requiresQuotes']
    },
    {
        selector: 'objectLiteralProperty',
        format: ['snake_case', 'camelCase', 'PascalCase', 'UPPER_CASE']
    },
    {
        selector: 'typeProperty',
        format: ['snake_case', 'camelCase', 'PascalCase', 'UPPER_CASE']
    }
]

export default [
    ...tsx,
    ...storybook.configs['flat/recommended'],
    {
        files: ['test/**', 'src/**/**.test.ts', 'src/**/**.test.tsx'],
        ...jest.configs['flat/recommended'],
        rules: {
            ...jest.configs['flat/recommended'].rules,
            'jest/prefer-expect-assertions': 'off'
        },
        languageOptions: {
            globals: {
                ...globals.jest
            }
        }
    },
    {
        languageOptions: {
            globals: {
                ...globals.builtin,
                ...globals.browser,
                ...globals.node
            }
        }
    },
    {
        rules: {
            'no-undef': 'off',
            'import/no-nodejs-modules': 'off'
        }
    }
]
