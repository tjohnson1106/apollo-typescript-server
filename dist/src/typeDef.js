"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
  type User {
    id: ID!
    email: String!
    type: String!
    ccLast4: String
  }

  type Query {
    me: User
  }

  type Mutation {
    register(email: String!, password: String!): Boolean!
    login(email: String!, password: String!): User
    createSubscription(source: String!, ccLast4: String!): User
    changeCreditCard(source: String!, ccLast4: String!): User
    cancelSubscription: User
  }
`;
//# sourceMappingURL=typeDef.js.map