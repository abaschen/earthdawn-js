module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        'plugin:vue/essential',
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-import",
        "eslint-plugin-jsdoc",
        "eslint-plugin-prefer-arrow",
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "root": true,
    "rules": {
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "member-delimiter-style": [
                        true,
                        {
                            "singleline": "comma",
                            "multiline": {
                                "delimiter": "none",
                                "requireLast": false
                            }
                        }
                    ]
                }
            }
        ]
    }
};
