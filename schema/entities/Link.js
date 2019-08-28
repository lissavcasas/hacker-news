const LinkDef = `
# Esto representa un Link
type Link {
  # Este es el id de la entidad
  id: ID!
  url: String!
  description: String! @deprecated (reason: "ya no vamos a tener este campo")
}
`;

module.exports = LinkDef;

