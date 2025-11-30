# About this project

This is a clone project of Naxa Pvt. Ltd. website service layout as assessment task built using React library for UI. Redux Toolkit is used for state management and Tanstack Query- prevously known as React Query for handling API . Maplibre is used for map visualisation.
**Click the link to see project live**
[Naxa Service Layout](https://naxa-services-layout-task.vercel.app/)

## Built with

Following libraries are used to build this project
* VITE
* React
* Redux Toolkit
* Tanstack Query(React Query)
* Axios
* Maplibre
* Tailwind CSS

## Project Setup 
  To setup project, followed following steps
### 1. React + Vite
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  * To create project, use command below
    ```
      npm create vite@latest
    ```

### 2. Other library installation 
* Redux Toolkit Installation
  -To work with [Redux Toolkit](https://redux-toolkit.js.org), [React Redux](https://react-redux.js.org) also needed because **RTK** is built on **React Redux**. 
  ```
  npm install react-redux @reduxjs/toolkit
  ```

* Tanstack Query and Axios
  -To install [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/installation), following command is used.
   ```
  npm install  @tanstack/react-query
   ```
   -To install [Axios](https://www.npmjs.com/package/axios), use command below
   ```
  npm install  axios
   ```
* Maplibre
  - To install [Maplibre](https://maplibre.org/maplibre-gl-js/docs/) in this project, command below is used.
    ```
    npm install maplibre-gl
    ```
* Tailwind CSS
  - To install [Tailwind CSS](https://tailwindcss.com/docs), used command below
  ```
    npm install tailwindcss @tailwindcss/vite
  ```

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




