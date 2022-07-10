/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "plugin:prettier/recommended",
        "plugin:vue/essential",
        "@vue/prettier",
        "eslint:recommended",
        "plugin:vue/recommended",
        "@vue/eslint-config-typescript/recommended",
        "@vue/eslint-config-prettier",
    ],
    env: {
        "vue/setup-compiler-macros": true,
        node: true,
    },
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
        sourceType: "module",
    },
    rules: {
        // "vue/js-uses-vars": "error",

        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],

        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],

        // refactor maximum line length
        "max-len": ["warn", { code: 120, ignoreUrls: true }],

        // empty line around comment
        "lines-around-comment": [
            "error",
            {
                beforeBlockComment: true,
                afterBlockComment: false,
                beforeLineComment: true,
                afterLineComment: false,
                allowBlockStart: true,
                allowBlockEnd: true,
                allowObjectStart: true,
                allowObjectEnd: true,
                allowArrayStart: true,
                allowArrayEnd: true,
            },
        ],
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "prettier/prettier": [
            "warn",
            {
                singleQuote: true,
                semi: false,
                trailingComma: "none",
            },
        ],

        // disable rules from base configurations
        "for-direction": "off",
        "init-declarations": "off",
        "no-console": "off",
        "no-inline-comments": "off",
    },
    overrides: [
        {
            files: ["cypress/integration/**.spec.{js,ts,jsx,tsx}"],
            extends: ["plugin:cypress/recommended"],
        },
        {
            files: ["bin/*.js", "lib/*.js"],
            excludedFiles: "*.test.js",
            rules: {
                quotes: ["warn", "single"],
            },
        },
    ],
}
