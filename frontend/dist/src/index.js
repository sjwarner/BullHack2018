import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { store } from './redux/Store';
import { Provider } from 'react-redux';
import Routes from './redux/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(Routes, null)), document.getElementById('quiz'));
//# sourceMappingURL=index.js.map