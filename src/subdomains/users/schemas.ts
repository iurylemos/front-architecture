const userSchema = `#graphql
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    age: Int!
    active: Boolean
  }

  input NewUserInput {
    firstName: String!
    lastName: String!
    email: String!
    age: Int!
  }

  input UpdateUserInput {
    id: ID!
    firstName: String
    lastName: String
    email: String
    age: Int
    active: Boolean
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(input: NewUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(id: ID!): User
  }
`;

export default userSchema;
