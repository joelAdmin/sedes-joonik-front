# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

# Frontend de la aplicación Sedes

Este repositorio contiene el frontend de la aplicación Sedes, desarrollado con React, TypeScript y Vite. Este frontend consume los servicios de la API creada en Laravel.

## Requisitos

- Node.js (versión 18.x o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. **Clonar el repositorio**

   Si aún no has clonado el repositorio, puedes hacerlo ejecutando el siguiente comando en tu terminal:

   ```bash
   git clone https://github.com/joelAdmin/sedes-joonik.git

2. **Estructura**
  ```bash
    src/
    ├── components/
    │   ├── LocationCard.tsx
    │   └── LocationList.tsx
    ├── services/
    │   └── api.ts
    ├── App.tsx
    └── main.tsx
    └──.env

3. **Navegar al directorio del frontend**
  ```bash
  cd frontend

4. **Instalar dependencias**
  ```bash
  npm install

5. **Iniciar el servidor de desarrollo y produccion**
  ```bash
      npm run dev
      npm run build```

## other

```bash
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
