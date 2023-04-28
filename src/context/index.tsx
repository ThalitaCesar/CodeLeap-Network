import {ReactNode} from 'react';
import {ApiProvider} from './ApiContext';

interface AppContextProviderProps {
    children : ReactNode;
}

export function AppContextProvider({children} : AppContextProviderProps) {
    return <ApiProvider>{children}</ApiProvider>;
}