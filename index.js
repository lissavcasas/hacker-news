const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

//Create server
const app = new express();
const PORT = 4200;

//Publicar endpoint para el server graphql
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema: ''
  })
);

//Access to graphiqlexpress
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
);


//Listener port
app.listen(PORT, () => {
  console.log('OK');
});