import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App.jsx'
import registerServiceWorker from './registerServiceWorker'

import algoliasearch from 'algoliasearch'
import algoliasearchHelper  from 'algoliasearch-helper'

window.client = algoliasearch('EMYYQC5UHI', '52d6901ea23b4d1a9b985d28e770fa6b');
window.helper = algoliasearchHelper(window.client, 'solutions_hiring_assignment');

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
