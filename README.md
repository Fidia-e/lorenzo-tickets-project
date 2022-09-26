# Installation git cz

doc: https://www.npmjs.com/package/git-cz

Après avoir cloner le repo:

`npm install`
`npm install -g commitizen git-cz`

# Prettier et ESLint configuration

Installer les 3 extensions:
- Prettier - Code formatter
- Pretter - ESLint
- ESLint

Initialiser Eslint en cli `npx eslint --init`

Questions:
- How would you like to use ESLint? : To check syntax, find problems, and enforce code style
- What type of modules does your project use? : JavaScript modules (import/export)
- Which framework does your project use? : React
- Does your project use TypeScript? yes
- Where does your code run? : Browser
- Use a popular style guide? : Airbnb
- What format do you want your config file to be in? JS

Installer prettier et les plugins eslint pour prettier
```bash
yarn add prettier eslint-config-prettier prettier-eslint --dev
npm i prettier eslint-config-prettier prettier-eslint --save-dev
```

Créer un fichier .prettierrc à la racine du projet

Rajouter `'prettier'` dans le fichier .eslintrc.js dans les tableaux `'extends'` et `'plugins'` (à la fin du tableau)

Exemple de fichier .prettierrc
```json
    {
        "singleQuote": true,
        "tabWidth": 2,
        "semi": true,
        "printWidth": 120,
        "arrowParens": "avoid",
        "traillingComma": "es5",
        "useTabs": false,
        "bracketSpacing": true,
    }
```

Ajouter ces lignes dans le fichier settings.json de vsc:

```json
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
```
