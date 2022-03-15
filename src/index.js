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
  
const store = createStore(rootReduser,  applyMiddleware(sagaMiddleware))

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

