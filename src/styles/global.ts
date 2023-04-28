import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle `
:root{
    --background:#202024;
    --blue: #0000CD;
    --light-blue:#1E90FF;
    --red:#F75A68;
    --dark-gray:#121214;
    --light-gray:#29292E;
    --text-title: #E1E1E6;
    --text-body:#C4C4CC;

}
 *{
    margin:0;
    padding:0;
    box-sizing:border-box;
 }
html{
    @media(max-width: 1000px){
        font-size: 93.75%
    }
    @media(max-width: 720px){
        font-size: 87.05%
    }
}
 body{
    background: var(--background);
 }
 body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: var(--text-body);
 }
 h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
    color: var(--text-title);
 }
 button{
    cursor:pointer;
 }
[disable]{
    visable:0.6;
    cursor: not-allowed;
}
`