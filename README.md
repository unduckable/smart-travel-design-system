## Smart Travel Design System

## Description

The Smart Travel Design System is a library of components and tools used to build the Smart Travel app.

## Links

- [Figma](https://www.figma.com/file/jomEkNrS6K3kNBhUuk7FbZ/STDS---UI-Kit?type=design&node-id=157-1874&mode=design&t=IGDVkEtUUbIoordx-0)
- [Preview](https://smart-travel-ds-preview.netlify.app/)

## Installation

Execute this command to install required dependencies

```bash
npm install
```

## Run locally

Local development supports 2 modes to visualize the design system: Playground mode & Storybook mode

### Playground

To run the Playground mode execute in the terminal:

```bash
npm run dev
```

### Storybook

To run the Storybook mode execute in the terminal:

```bash
npm run dev:storybook
```

## Build

The design system supports 2 build commands; one build command for the core codebase & one build command for the Storybook documentation

### Core

```bash
npm run build
```

### Storybook

```bash
npm run build:storybook
```

## Usage

To integrate you can:

1. Include this codebase directly in your ReactJS application

2. Build the core codebase with `npm run build` and publish the package to npm. After that you can install the package as a dependency and import components as needed:

```jsx
import { Button } from "@your-npm-package-name";
```
