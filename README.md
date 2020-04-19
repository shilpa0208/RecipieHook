# RecipieHook

This project is developed to showcase my cooking hobby. It displays some of my favorite recipes with a small description, image and cuisine. 

Coming up:
 - Ingredients used
 - Cooking procedure

 ## To Run Locally

 1. Clone this repo
 1. There are two different `package.json` files here; one at the root level that runs the backend and all of the build commands(to run as one app, build frontend components using `yarn build` and run backend using `yarn start` to fetch routes), and one inside `frontend/package.json` that is specifically for the frontend. To start both apps, you need to run `yarn && yarn start` in both the top-level amd inside of `frontend/`. 

 ## Technologies Used

 1. ReactJS on the frontend
 1. Tailwind css framework
 1. Koa on the backend

 ## Tailwind

 This project has tailwind pre-installed. It will automatically generate the tailwind file and apply the CSS when you run `yarn start`. Tailwind documentation can be found at [here](https://tailwindcss.com/docs/configuration/)

