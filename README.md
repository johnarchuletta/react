This project uses [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), [Pug](https://pugjs.org/api/getting-started.html), [React](https://reactjs.org/), and [Sequelize](http://docs.sequelizejs.com/).

# Getting Started

In order for the server to start without any errors, do these two steps first:

1. Create a database that has a table named `users`, which has the columns `firstName`, `lastName`, `createdAt`, and `updatedAt` in it.

    It is recommended to put at least one entry into this table for testing purposes.

    This table exists only as an example and you are free to remove it at any time. Remember to remove the `user` route and controller if and when you do.

2. Create `/database/database.config.js`, which should look like this:

    ```
    module.exports = {
        database: 'database',
        username: 'user',
        password: 'password',
        options: {
            dialect: 'mysql',
            host: 'localhost'
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