import styled from "styled-components";

export const Container = styled.header `
background: var(--dark-gray);
height: 142px;
`

export const Content = styled.div `
max-width: 1119.8px;
margin: 0 auto;
padding: 2rem 1rem 10rem ;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
p{
    display:block;
    margin-top:1rem;
    font-size: 2rem;
    line-height: 3rem; 
    @media (max-width: 768px) {
        font-size: 1.5rem;
      }
}

button{

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 20px;
gap: 10px;
width: 122px;
height: 50px;
background: var(--light-blue);
border:none;
border-radius: 6px;
transition: filter 0.2;
@media (max-width: 768px) {
    font-size: 1rem;
    width: 100px;
  }
&:hover{
    filter: brightness(0.9)
}
}
`
