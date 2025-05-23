import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxControlStatements from "eslint-plugin-jsx-control-statements";
import checkFile from "eslint-plugin-check-file";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["example/ccl/vendor", "example/ccl/v2/index.js", "example/ccl/v3/index.js"],
}, ...compat.extends(
    "airbnb",
    "prettier",
    "plugin:jest/all",
    "plugin:jsx-control-statements/recommended",
    "plugin:prettier/recommended",
), {
    plugins: {
        react,
        "react-hooks": fixupPluginRules(reactHooks),
        "jsx-control-statements": jsxControlStatements,
        "check-file": checkFile,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
            fetch: false,
        },

        // parser: babelParser,
        ecmaVersion: 8,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                experimentalObjectRestSpread: true,
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "17",
        },

        jest: {
            version: 27,
        },

        "import/resolver": {
            "babel-module": {},
        },
    },

    rules: {
        "check-file/filename-blocklist": ["error", {
            "**/*.styles.js": "*.style.js",
            "**/*.styles.test.js": "*.style.test.js",
        }],

        "arrow-body-style": ["error", "as-needed"],

        "import/no-extraneous-dependencies": ["error", {
            packageDir: "./example",
        }],

        "import/prefer-default-export": "off",
        "jest/lowercase-name": 0,
        "jest/no-hooks": "off",
        "jest/no-large-snapshots": "off",
        "jest/prefer-expect-assertions": "off",
        "jest/prefer-inline-snapshots": "off",

        "no-console": ["error", {
            allow: ["warn", "error"],
        }],

        "no-nested-ternary": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-closing-tag-location": 0,

        "react/jsx-filename-extension": [1, {
            extensions: [".js", ".jsx"],
        }],

        "react/jsx-fragments": ["off"],

        "react/jsx-no-undef": [2, {
            allowGlobals: true,
        }],

        "react/jsx-props-no-spreading": "off",
        "react/sort-comp": "off",
        "jest/prefer-to-be": "off",
        "jest/prefer-lowercase-title": "off",
        "jest/max-expects": "off",
        "jest/prefer-snapshot-hint": "off",
        "jest/prefer-hooks-in-order": "off",
        "jest/require-hook": "off",
        "jest/no-conditional-in-test": "off",

        "react/function-component-definition": ["error", {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
        }],

        "no-restricted-exports": "off",
    },
}];