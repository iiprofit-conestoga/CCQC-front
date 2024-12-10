# CCQC Frontend Project
This is the frontend project for CCQC, built using React, Redux Toolkit, Vite, and styled with TailwindCSS. This guide will help you set up the environment, install dependencies, and run the project.

## Prerequisites
Ensure the following tools are installed on your system:

1. Node.js: Version 16 or later Download Node.js.
2. npm: Comes with Node.js (or optionally use yarn or pnpm).
3. Git: To clone the repository Download Git.

## Getting Started
## 1. Clone the Repository
Clone the project to your local machine using Git:

```
git clone https://github.com/your-username/ccqc-front.git
cd ccqc-front
```

## 2. Install Dependencies
Install all required dependencies using npm:

```
npm install
```

## 3. Run the Development Server
Start the development server using the following command:

```
npm run dev
```

This will start the project in development mode. You can access it at http://localhost:5173 (or a different port, as specified in the terminal).

## Available Scripts


Script	Description
| Script         | Description                                                        |
|----------------|--------------------------------------------------------------------|
| `npm run dev`  | Starts the development server at localhost:5173.                   |
| `npm run build`| Builds the project for production and outputs files to the dist/ folder. |
| `npm run preview` | Serves the production build locally.                            |
| `npm run lint` | Lints the project using ESLint.                                    |

## Linting
This project uses ESLint to ensure code quality and consistency. To lint your code, run

```
npm run lint
```

## Styling
This project uses TailwindCSS for styling. The configuration can be found in tailwind.config.js. To customize, modify this file or use the @apply directive in your CSS files.


## Using Redux Toolkit
State management is handled using Redux Toolkit. Redux slices are organized in the src/features/ directory. To add a new slice:

Create a new file in src/features/ (e.g., userSlice.js).
Use createSlice to define your slice.
Import and combine the slice reducer in the store (if not already).

## API Integration
This project uses Axios for API calls. Configure the base URL in an Axios instance (e.g., src/api/axios.js) for better management of API calls.

## React Router
Routing is handled using React Router DOM. Routes are typically defined in src/pages/ or a central routes.js file.

## Troubleshooting
If you encounter issues, consider these steps:

1. Dependencies Not Installed: Ensure node_modules is installed using npm install.
2. Port Conflicts: If port 5173 is busy, the terminal will show an alternative URL.
3. Clear Cache: Run rm -rf node_modules and npm install to clear the cache.