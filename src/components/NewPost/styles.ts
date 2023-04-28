import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  display: flex;
  align-items: center; 
  justify-content: center;
  flex-direction: column;
  border-radius: 16px;
  background: var(--dark-gray);
  
  
  h2 {
    margin-bottom: 2rem;
    margin-top: 3rem;
    font-size: 1.5rem;
    color: var(--text-title);
  }

  input, textarea {
    padding: 0 1.5rem;
    width: 95%;
    height: 4rem;
    font-size: 1rem;
    font-weight: 400;
    background: var(--background);
    border: none;
    border-radius: 0.25rem;
    &::placeholder {
      color: var(--text-body);
    }
    
    & + textarea {
      margin-top: 1rem;
    }
  }

  textarea {
    padding:  1.5rem;
    width: 95%;
    height: 8rem;
    font-size: 1rem;
    font-weight: 400;
    background: var(--background);
    border: none;
    border-radius: 0.25rem;
    &::placeholder {
      color: var(--text-body);
    }
  }

  button[type="submit"] {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    padding: 0 1.5rem;
    width: 95%;
    height: 4rem;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    background: var(--light-blue);
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
