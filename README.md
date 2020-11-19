# Gnome-Town
Aplication created with React about information of a Gnome town

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Project Clarifications

### General information

The project only has a single view with a table and some inputs as a search engine.
It has been used React 17, Redux 4, Hooks and Functionals components.

### Table

The table loads all data and just show the first 50 values to improve performance when we are searching. When we scroll to the end, automatically the table loads 50 more values.
Also, you can see the friends just clicking on one of them (the name will appear in name searcher).

### Filter / Searcher

Filters are applied to ALL DATA.
The Searcher is divided in some inputs which filter the values in table. We have filter to name, age, height, weight and hair color. Filters with number have a maximum value and minimun value, both are inclusive (<= or >=).

### Test

This project have not tests.

## DATA

I case the server that provides the data crashes, these can be rescued in the root of the project as the data.txt file
