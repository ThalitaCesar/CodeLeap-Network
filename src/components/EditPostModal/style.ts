import styled from 'styled-components';

export const Container = styled.form `
  background: var(--grey);

  h2 {
    margin-bottom: 2rem;
    margin-top: 3rem;
    font-size: 1.5rem;
    color: var(--background);
  }

  input {
    padding: 0 1.5rem;
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    font-weight: 400;
    background: var(--light-gray);
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
    padding: 1.5rem;
    width: 100%;
    height: 8rem;
    font-size: 1rem;
    font-weight: 400;
    background: var(--light-gray);
    border: none;
    border-radius: 0.25rem;

    &::placeholder {
      color: var(--text-body);
    }
  }

  button[type='submit'] {
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    background: var(--background);
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    max-width: 800px;
  }
`;
