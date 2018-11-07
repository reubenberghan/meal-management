# Getting started

Create a new repo in GitHub.

Clone the repo into your workspace folder.

```
git clone <remote repo url>
```

`cd` into the newly created project directory and run `create-react-app .` which will bootstrap a React app into the newly cloned project directory.

Add the `"description"`, `"repository"`, `"author"` and `"license"` properties to the `packages.json`

Add `.editorconfig`, `.eslintrc.json` and  `.yarnclean` to the root directory

Add `setupTests.js` to `src` directory

Add dev dependencies:

```
yarn add -D prettier-standard lint-staged enzyme enzyme-adapter-react-16 enzyme-to-json jest-enzyme jest-styled-components react-test-renderer redux-mock-store
```

Add `husky` (requires the `--force` flag in `yarn add -D` so the hooks install properly with yarn)

```
yarn add -D husky --force
```

Add app dependencies and utilities:

```
yarn add ramda ramda-adjunct styled-components react-router redux react-redux redux-observable rxjs rxjs-compat redux-devtools-extension reselect
```

Update the `package.json` as follows:

```
"lint-staged": {
  "linters": {
    "src/**/*.js": [
      "prettier-standard",
      "git add"
    ]
  }
},
"jest": {
  "collectCoverageFrom": [
    "!<rootDir>/node_modules/",
    "!src/constants.js",
    "!src/index.js",
    "!src/setupTests.js",
    "!src/serviceWorker.js",
    "!src/state/constants.js",
    "src/**/*.{js,jsx}"
  ],
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ]
},
"scripts": {
  "build": "react-scripts build",
  "coverage": "react-scripts test --env=jsdom --coverage",
  "eject": "react-scripts eject",
  "format": "prettier-standard 'src/**/*.js'",
  "precommit": "lint-staged",
  "start": "react-scripts start",
  "test": "react-scripts test --env=jsdom"
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```