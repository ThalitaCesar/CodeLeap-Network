import React from 'react';
import logo from '../../assets/logo.svg'
import {Container, Content} from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <p>
                    <img src={logo}/>
                    CodeLeap Network
                </p>
                <button>
                    <strong>
                        Logout
                    </strong>
                </button>
            </Content>
        </Container>

    );
}

export default Header;