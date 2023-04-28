import styled from "styled-components";

export const Container = styled.main`
margin: 0 auto;
margin-top:4rem;
border-spacing: 0 0.5 rem;
border-collapse:collapse;
display:flex;
flex-direction:column;
width: 100%;
background: var(--light-gray);
color: var(--text);
font-weight: 400;
text-align:left;
line-height:1.5rem;
border-radius: 0.5rem;
margin-bottom: 16px;
}
`

export const Title = styled.div`
background: var(--dark-gray);
padding: 2rem 2rem;
border-top-left-radius: 0.5rem;
border-top-right-radius: 0.5rem;
font-weight: 700;
font-size: 22px;
display:flex;
justify-content:space-between;
`

export const Content = styled.div`
padding: 2rem 2rem;
`

export const Icons = styled.div`
display:flex;
cursor:pointer;
`