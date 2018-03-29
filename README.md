This project uses [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), [Pug](https://pugjs.org/api/getting-started.html), [React](https://reactjs.org/), and [Sequelize](http://docs.sequelizejs.com/).

# Getting Started

Before you do anything, do these two steps:

1. Create a database that has a table named `users`, which has the columns `firstName`, `lastName`, `createdAt`, and `updatedAt` in it.

    It is recommended to put at least one entry into this table for testing purposes.

    This table exists only as an example and you are free to remove it at any time - just remember to remove the `user` route and controller if and when you do.

    You can check if your database is working correctly by going to `localhost:8080/users` after doing the next step.

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

For more information about valid `options`, read the [documentation](http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor).


`npm` scripts:
* `npm serve`
    * Starts an Express server that uses `reload` to update pages after saved changes.
* `npm build`
    * 
* `npm sass`