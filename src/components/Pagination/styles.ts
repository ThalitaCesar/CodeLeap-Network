import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom:40px;
`;

export const Button = styled.button`
  margin: 0 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ disabled }: { disabled: boolean }) =>
    disabled ? "#1E90FF" : "#E1E1E6"};

  &:hover {
    text-decoration: ${({ disabled }: { disabled: boolean }) =>
      disabled ? "none" : "underline"};
  }
`;