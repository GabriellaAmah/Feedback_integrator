import express from 'express'
import cors from 'cors'
import {default as bodyParser} from 'body-parser'

const App = express()

App.use(cors);
App.use(bodyParser.urlencoded())

export default App