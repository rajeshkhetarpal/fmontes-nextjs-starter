module.exports = {
    useTabs: false,
    printWidth: 100,
    tabWidth: 4,
    singleQuote: true,
    trailingComma: 'none',
    jsxBracketSameLine: false,
    arrowParens: 'always',
    overrides: [
        {
            files: '*.scss',
            options: {
                singleQuote: false
            }
        }
    ]
};
