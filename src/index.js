import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import Routing from './components/Routing';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';

import './assets/boxicons-2.1.1/css/boxicons.min.css'
import './assets/css/index.css'
import './assets/css/theme.css'
import './assets/css/grid.css'
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
  rootReducer
)

document.title = 'Qoal | Dive into Qoalsome experience'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
     <BrowserRouter>
      <Routing />
     </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
