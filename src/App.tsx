import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import {GlobalStyle} from './styles/global';
import {AppContextProvider} from './context';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App() {

    return (
        <AppContextProvider>
            <Header/>
            <Dashboard/>
            <GlobalStyle/>
        </AppContextProvider>
    );
}

export default App;