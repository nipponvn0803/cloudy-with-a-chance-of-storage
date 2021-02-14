# Cloud server selection

## Deployment online and locally
### Live deployment
A live demo of this app can be found [here](https://thawing-everglades-66898.herokuapp.com/). It might take some times for the server to wake up.
### Deploy locally
To run this project locally, first, clone the project:

```shell
git clone https://github.com/nipponvn0803/cloudy-with-a-chance-of-storage.git
```

Then install packages for both server and client:

```shell
cd cloudy-with-a-chance-of-storage/
npm install
cd client/
npm install
```

Finally, go back to the root folder start the project:

```shell
cd ..
npm start
```

The client will be displayed at port 3000 while the server will be listening at port 3001.

## Files structure and implementation
For the server implementation, I used express and node-fetch to fetch data.
After fetching, the data is also transformed here before the client side receive it.
You can find the server side in the file `server.js`

For the client frontend, I used mostly React and Material-UI to display data retrieved.
These files can be found in the `client` folder.

Across the project, I used ESLint as well as prettier to enforce code style and detect errors.

## Testing
The project uses Jest and react-testing-library. I make mostly unit tests to test functions.
You can find the test file `App.test.js` inside the `client/src/test` folder

To perform the tests, run command `jest` inside the `client` folder.

## Related hobby project
Previously, I have worked on a similar application where user can create, read, update and delete entries from an existing database.
The application has the same structure as this project.

[Here](https://github.com/nipponvn0803/punintentionally) is the link to the project for you to check out if you are interested.
