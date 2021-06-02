import { gql } from 'apollo-server-express';
const typeDefs = gql `

    type Query {
        index: String
    }

`;
export default typeDefs;
