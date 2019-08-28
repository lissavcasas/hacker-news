const {makeExecutableSchema} = require('graphql-tools');
const LinkDef = require('./entities/Link'); //import entity Link
const resolvers = require('./resolvers'); //import resolvers

//Create query. Define Type - String.  Es el conjunto de endpoints a exponer
const rootQuery = `
type Query {
  allLinks: [Link!]
}
`;

// Generate the schema object from your types definition
module.exports = makeExecutableSchema({
  typeDefs: [rootQuery, LinkDef], //define types, add entitities
  resolvers
});