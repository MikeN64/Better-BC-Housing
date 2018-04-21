import React from 'react';
import {render} from 'react-dom'
import {HashRouter} from 'react-router-dom'

import App from 'containers/App.js';

import registerServiceWorker from './registerServiceWorker';

render((
    <HashRouter>
      <App/>
    </HashRouter>
), document.getElementById('root'));

// the service worker allows the app to load faster by cacheing assets locally
// and serving it the next visit. service worker disabled for github pages.
// registerServiceWorker();