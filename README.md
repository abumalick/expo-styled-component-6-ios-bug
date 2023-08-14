# React native & styled-components reproduction bug

## Summary

This repository is a reproduction of a bug that occurs when using border-color property with styled-components@6 with React Native on iOS.

When using the border-color using inline styles, it does not override the border-color property defined in the styled-component. See the code in [App.js](./App.js)

## How to run the reproduction

```bash
npm install
npm run ios
# or
npm run android
```
