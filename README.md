![react-boilerplate](README.png)

This project uses [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), [Pug](https://pugjs.org/api/getting-started.html), [React](https://reactjs.org/), and [Sequelize](http://docs.sequelizejs.com/).

# Getting Started

In order for the server to start without any errors, do these two steps first:

1. Create a MySQL database that has a table named `users`, which has the columns `firstName`, `lastName`, `createdAt`, and `updatedAt` in it.

    Open a MySQL console:

    ```
    /usr/local/mysql/mysql -uroot -p
    ```

    Create a database and add a `users` table with a single entry in it:

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

You should now be able to start the server:

    npm start

Check if everything is working by visiting `localhost:8080/`.

To see if your database connection is working, visit `localhost:8080/users`.

# Next Steps



For more information about valid `options`, read the [documentation](http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor).


`npm` scripts:
* `npm serve`
    * Starts an Express server that uses `reload` to update pages after saved changes.
* `npm build`
    * 
* `npm sass`