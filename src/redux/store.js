import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'

import reducers from './reducers'

const logger = createLogger()
const enchancers = applyMiddleware(promiseMiddleware, logger)

const reduxStore = createStore(reducers, enchancers)

export default reduxStore