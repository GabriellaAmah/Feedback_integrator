import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import rootResolver from './resolvers';
import schema from './schemas';

const app = express();

app.use('/graphql', graphqlHTTP({
    schema : schema,
    rootValue : rootResolver,
    graphiql : true
}))

export default app
