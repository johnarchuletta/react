![react-boilerplate](README.png)

This project uses [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), [Pug](https://pugjs.org/api/getting-started.html), [React](https://reactjs.org/), and [Sequelize](http://docs.sequelizejs.com/).

# Getting Started
 
Before starting the web server, you must set up the database first with the following steps:

1. Create a MySQL database that has a table named `users`, which has the columns `firstName`, `lastName`, `createdAt`, and `updatedAt` in it.

    * Open a MySQL console:

        ```
        /usr/local/mysql/mysql -uroot -p
        ```

    * Create a database and add a `users` table with a single entry in it:

        ```sql
        CREATE DATABASE dbName;

        CREATE TABLE dbName.users (
            id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
            firstName VARCHAR(50) NOT NULL,
            lastName VARCHAR(50) NOT NULL,
            createdAt VARCHAR(50),
            updatedAt VARCHAR(50),
            CONSTRAINT pk_example PRIMARY KEY (id)
        );

        INSERT INTO dbName.users VALUES(
            0,
            'John',
            'Doe',
            '',
            ''
        );
        ```

2. Create `/database/database.config.js`, which should look like this:

    ```javascript
    module.exports = {
        database: 'dbName',
        username: 'user',
        password: 'password',
        options: {
            dialect: 'mysql',
            host: 'localhost',
            port: 3306
        }
    };
    ```

You should now be able to serve your app:

```
npm run serve
```

Check if the server is running correctly by visiting  [http://localhost:8080/]().

To check if your database connection is working correctly, visit [http://localhost:8080/users]().

# Next Steps

## Watching SASS files for changes

Run the following NPM script in your project directory.

```
npm run sass
```

You can download and install SASS [here](https://sass-lang.com/).

## Running Webpack to bundle your app

```
npm run build
```