import app from "../express/app";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "../../../schemas";
import resolvers from "../../../resolvers";
import { mongooseConnection } from "../connections";

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      req,
      db : mongooseConnection,
      token: req.headers.authorization ? req.headers.authorization : null,
    };
  },
  introspection: true,
  playground: true,
  formatError: (error) => {
    return {
      message: error.message,
      path:  error.path ,
      locations : error.locations,
    };
  },
});

const path = process.env.GRAPHQL_SERVER_PATH

server.applyMiddleware({ app , path});

 

export default app

