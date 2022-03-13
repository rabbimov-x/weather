import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import App from './App';
import { ourSaga } from './redux/saga/saga';
import { rootReduser } from './redux/redusers/rootReaduser';
import "./index.css"

const sagaMiddleware = createSagaMiddleware()
  
const store = createStore(rootReduser, compose( applyMiddleware(sagaMiddleware)   ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ))

sagaMiddleware.run(ourSaga)

ReactDOM.render(
  
   <React.StrictMode>
     <Provider store={store} >
        <App />
    </Provider>
   </React.StrictMode>
  ,
  document.getElementById('root')
);

