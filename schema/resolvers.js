//se conecta y devuelve datos

//add data emulated
const links =  [
  { 
    id: 1,
    url: 'www.google.com',
    description: 'bla bla'
  },
  { 
    id: 2,
    url: 'https://github.com',
    description: 'Welcome to Github!'
  },
]

const resolvers = {
  Query: {
    allLinks: () => links
  }
};

module.exports =  resolvers;