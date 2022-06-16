# Macros Nutrition Calculator

![Calculator screen shot](public/img/calculator-screen-shot.png?raw=true "Calculator screen shot")

This is a nutrition calculator that takes `weight`, `height`, `age`, `gender` and `activity levels` / `weight loss goals` as parameters to find the users basal metabolic rate (BMR), total daily energy expenditure (TDEE) and how many calories the use should be consuming in the form of protein, carbohydrates and fat.

## How I created this project

- I used [Create React App](https://github.com/facebook/create-react-app) as a boilerplate
- [Rechats](https://recharts.org/en-US/) is a great way to incorporate a chart in this project to help the user visualize the data presented.
- I am using the React hook `useState` for state management.
- I ran into a dependency conflict using `Recharts` and `styled-components`, so styling is handled with css modules to prevent class name conflicts.
- The responsive column layout is handled using [Bootstrap](https://getbootstrap.com/)

## If I had had more time...

It would be great to set this up with with a user login and a database to store user information such as daily calorie intake, wight and recommended calorie intake. This data then could be tracked over time and presented in the form of a graph, so the user could chart their weight loss/gain goals.

## Available Scripts

`npm start` - This will run the app in development mode, navigate to [http://localhost:3000](http://localhost:3000) to view the project in the browser.

`npm run build` - Builds the app for production. Production ready files can be found in the `build` folder.
