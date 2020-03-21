This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Test gqless with db2graphql

## Install
```bash
$ psql -h localhost -U postgres -c 'CREATE DATABASE db2graphql_gqless;' postgres
$ psql -h localhost -U postgres -f database.sql db2graphql_gqless
$ npm install
```

## Run
$ # Edit connection.json if necessary
$ node server.js > server.log &
$ npm run generate
$ npm run start