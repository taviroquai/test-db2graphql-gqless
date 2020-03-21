const knex = require('knex');
const db2g = require('db2graphql');
const { ApolloServer, gql } = require('apollo-server');
 
const start = async (cb) => {
 
  /**************************************/
  const api = new db2g('demo', knex(require('./connection.json')));
  await api.connect(); // Connects to database and extracts database schema
 
  // Example of adding extra field
  api.addField('Users.fullname', 'String', (parent, args, context) => {
    return String(args.foo + parent.username);
  }, { foo: 'String' });
 
  // Example of overiding existing schema
  api.addField('Users.password', 'String', () => '');
 
  // Get generated schema and resolvers
  const schema = api.getSchema();
  const resolvers = api.getResolvers();
  /**************************************/
 
  // Create Apollo Server and start
  if (!schema) throw new Error('Error: empty schema');
  console.log(schema);
  const server = new ApolloServer({
    typeDefs: gql`${schema}`,
    resolvers,
  });
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}
 
start();