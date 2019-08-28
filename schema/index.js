const {makeExecutableSchema} = require('graphql-tools');

//Create query. Define Type - String.  Es el conjunto de endpoints a exponer
const rootQuery = `
type Query {
  allWords: [String]
}
`;

// Generate the schema object from your types definition
module.exports = makeExecutableSchema({
  typeDefs: [rootQuery] //define types
});