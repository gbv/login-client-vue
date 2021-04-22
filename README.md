# login-client-vue
[![Test and build](https://github.com/gbv/login-client-vue/actions/workflows/test-and-build.yml/badge.svg)](https://github.com/gbv/login-client-vue/actions/workflows/test-and-build.yml)
[![GitHub package version](https://img.shields.io/github/package-json/v/gbv/login-client-vue.svg?label=version)](https://github.com/gbv/login-client-vue)
[![NPM package name](https://img.shields.io/badge/npm-@stefandesu/vite--test--library-blue.svg)](https://www.npmjs.com/package/gbv-login-client-vue)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme)

> Vue 3 wrapper for [login-client](https://github.com/gbv/login-client).

**Note: Still in development!**

## Table of Contents <!-- omit in toc -->
- [Development](#development)
- [Using the library](#using-the-library)
  - [Node](#node)
  - [Browser](#browser)
- [Publish](#publish)
- [License](#license)

## Development
```bash
git clone https://github.com/gbv/login-client-vue.git
cd login-client-vue
npm install
npm run dev # for Vite dev server
npm run build # for Vite build
```

## Using the library

### Node

1\. Add the library to your Vue project:
```bash
npm install gbv-login-client-vue
```

TODO

### Browser
The library can be used in the browser, for example via jsDelivr.

[![](https://data.jsdelivr.com/v1/package/npm/gbv-login-client-vue/badge?style=rounded)](https://www.jsdelivr.com/package/npm/gbv-login-client-vue)

Fully working HTML example: TODO

## Publish
Please work on the `dev` branch during development (or better yet, develop in a feature branch and merge into `dev` when ready).

When a new release is ready (i.e. the features are finished, merged into `dev`, and all tests succeed), run the included release script (replace "patch" with "minor" or "major" if necessary):

```bash
npm run release:patch
```

This will:
- Check that we are on `dev`
- Run tests and build to make sure everything works
- Make sure `dev` is up-to-date
- Run `npm version patch` (or "minor"/"major")
- Push changes to `dev`
- Switch to `main`
- Merge changes from `dev`
- Push `main` with tags
- Switch back to `dev`

After running this, GitHub Actions will **automatically publish the new version to npm**. It will also create a new GitHub Release draft. Please **edit and publish the release draft manually**.

## License
MIT Copyright (c) 2021 Stefan です
