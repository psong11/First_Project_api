![](https://github.com/hsadev/backend-template/workflows/Linter/badge.svg)

# DEV Backend Starter

This is a repository with starter code for new project backends at DEV.

**NOTE: When starting a project, update the title and provide a description here for the project. You should also put any engineering-specific information here that you think might be important for future engineers to know (quirks of an API, for example).**

To start a new project built off of this repository, click the green "Use this Template" button.

### Running the project

Make sure necessary environment variables have been set. Check `src/config/index.js` for supported environment variables. Any that are added to the project should also be added to a pinned message in the project's Slack channel.

```bash
npm install
npm run start
```

## Contributing to this project

Please use the workflow and git conventions outlined [here](https://docs.google.com/document/d/1MJUp3kGXOG2ck8phtELk1Ph2AcBFZDMpM9j8dJTCeIw/edit?usp=sharing) when making contributions to this project. The guidelines are designed to increase the long term efficacy of the our engineering efforts, meaning the effort that goes into following these standards today will help save the engineers of tomorrow a considerable amount of time.

## Set up a development environment

- To make development easier, we will use ElephantSQL's free plan to host a different database in the cloud for each engineer. It is always on and never fails so your computer stays free.

  - Sign up for a free personal (don't use DEV's) account [here](https://customer.elephantsql.com/login). There is a log in with Github option.
  - Once you have signed in, click the **Create New Instance** button on the top right.
  - Add a name, probably something like `APP_NAME-db` and keep it on the free `Tiny Turtle` plan. You shouldn't need to add any payment information! Press **Select Region**.
  - Select the `US-East-1` as the region and press **Review**. and then **Create Instance**.
  - This should take you back to your list of your created instances (databases). Click on the one you just made.
  - Under the Details section you should see **Server**, **User & Default database**, and **Password**. These are the credentials you need to connect to the database.

* Connect to the database

  - First, run `cp sample.env .env` in your terminal to create the .env file.
  - Add all the credentials from ElephantSQL to the corresponding fields in the .env file. It should probably end up looking something like this:
    <br />
    <br />

  ```
  DB_HOST=salt.db.elephantsql.com
  DB_DATABASE=abcdefgh
  DB_USER=abcdefgh
  DB_PASSWORD=abcdefghabcdefghabcdefghabcdefgh
  DB_PORT=5432
  NODE_ENV=development
  ```

## Project Layout

### Project Structure

The repo was built by the general frontend web file structure conventions we use at DEV. It has react-router, apollo-client, and ThemeProvider from styled-components set up in src/App.js. It also has a full devloper environment with prettier, eslint, and travis set up.

This repository was designed first and foremost to scale to large projects. It should be easy to extend the base file structure and setup here to much larger projects.

```
project-repo-name
└───.github
|
└───node_modules
│
└───src
│   │   cleanup.js
|   |   index.js
│   │
│   └───config
|   |   └───index.js
│   |
│   └───db
│   |   └───migrations
│   |   └───helpers.js
│   │
│   └───graphql
│   |   └───index.js
│   |   └───router.js
│   |   └───typeDefs.js
│   |   └───types
│   |       └───Mutation
│   |       └───Query
│   |
│   └───lib
│   |   └───knex
│   |   └───logger
│   |   └───passwords
│   |   └───sentry
│   |   └───tokens
│   |   └───utils
│   |   └───viewEngine
│   |
│   └───models
│       └───BaseModel.js
|
└───test
|
|   .env
|   .eslintrc.json
|   .gitignore
|   .prettierrc
|   knexfile.js
|   nodemon.json
|   package-lock.json
|   package.json
|   README.md
```

### Important Directories and Files

- **.github**

  - Used to store our PR and Issue templates, if you needed to create new templates or update the existing ones, they would go here.

- **src**

  - The main directory. Used to store all application code.

- **src/index.js**

  - This is where the server itself is set up using Express. Cron jobs can be added here.

- **config/index.js**

  - Used to store constants that are important to the functionality of the app (like API urls, API keys, database credentials, etc.)

- **.env**

  - Here is where all the sensitive environment variables that are referenced by the config live. An updated version of this file should be kept pinned in the project's Slack channel.

- **migrations**

  - This is where all migrations are kept. Make sure to only add migrations with the command `npx knex migrate:make <name>`

- **graphql/typeDefs.js**

  - Here is the GraphQL TypeDefs.

- **graphql/types**

  - Under the Mutation and Query folders are all the resolvers. What is here corresponds directly to what is in the TypeDefs.

- **graphql/router.js**

  - Here is where the GraphQL router is set up. It handles all the network requests. If you need to apply any middleware, like GraphQL Shield, it should be done here. It is also here that you can intercept the HTTP headers of any request and set the context that is passed to resolvers.

- **lib**

  - This directory contains library code that is used across the app. The only things that are really important to understand are the password and token helpers.

- **models**

  - This is where all the Objection models are kept. Make sure to keep this in sync with any changes to the migrations.
