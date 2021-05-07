

# React Frontend Installation

This is the installation guide for the backend of InstaneousGramme.

## Getting started

1. Clone this repository outlined in projects ReadMe
   - [Overview Readme]()

   ```bash
   git clone https://github.com/TolulopeVerissimo/InstantaneousGramme
   ```

2. Install dependencies

      ```bash
      cd react-app
      npm install
      ```

3. No environment variables are needed to run this application in development, but be sure to set the REACT_APP_BASE_URL environment variable in heroku!

4. To Run the React-app locally and in Development
   - Make sure you are in the react-app rood

   ```bash
   npm start
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

**Optional (if deployed to Heroku)**

5. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.
   -This app will be automatically built when you deploy to heroku, please see the `heroku-postbuild` script in your `express.js` applications `package.json` to see how this works.
