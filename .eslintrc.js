module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "es6": true,
        "browser": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "function-paren-newline": ["error", "consistent"],
    },
    "globals": {
        "document": true,
        "localStorage": true,
        "window": true
    }
};