# Vue 3, TypeScript & Tailwind CSS Starter

> A simple, Vue 3 starter with TypeScript support

[Demo/Installation](https://vue3-typescript-tailwind-starter.vercel.app/)

## Features

- Vue 3
- TypeScript
- Tailwind CSS
- Simple store with global state
- Vue Router
- ESLint

## Project setup and usage

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Run unit test:

```
npm test
```

Build for produciton:

```
npm run build
```

Run ESLint:

```
npm run lint
```

Lint and fix:

```
npm run lint:fix
```

## Contributing

### Structure

-App.vue
-routes.ts
-views
|-Home.vue
|-Personal.vue
|-Summary.vue
|-AgeError.vue
|-NotFound.vue
-components
|-Premium.vue

### Workflow

- App.vue
  This is top-level vue component which has `<router-view />`. `<router-view />` indicates the the routes that contains in routes.ts.

- Home.vue

This first page of a welcome screen

User can click on the Start button and the wizard would start

- Personal.vue

This component has some inputs and Premium.vue component.

If a user type his credentials, this data will go to the Premium.vue component as a props.

- Premium.vue

It get data form Personal.vue component and calculate the premium.

If user clicks `back` button it goes to Home.vue component.

If user clicks `next` button first it compares the age with 100, and if it is over 100 it goes to AgeError.vue or not it goes to Summary.vue. All the data saves in globalState.

- Summary.vue

It shows those data from globalState.

- AgeError.vue

It shows error message when age is over 100.

- NotFound.vue

It shows error message when page not found.
