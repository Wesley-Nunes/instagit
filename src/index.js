import React from 'react';
import ReactDOM from 'react-dom';
import {ApiProvider} from './services/stateManagement/apiState';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
      <ApiProvider>
        <App />
      </ApiProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
