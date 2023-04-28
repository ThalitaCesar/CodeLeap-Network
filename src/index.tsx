import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createApi} from './services/api';

createApi();

ReactDOM.render(
    <StrictMode>
    <App/>
</StrictMode>, document.getElementById('root'),);
