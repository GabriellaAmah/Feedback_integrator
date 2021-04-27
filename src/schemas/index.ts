import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Query{
        index : String
    }
`)

export default schema