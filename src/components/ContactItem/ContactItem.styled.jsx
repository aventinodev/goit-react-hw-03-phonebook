import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 4vw;
  margin: 0 auto;
  :not(:last-child) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 480px) {
    font-size: 1em;
  }
`;

export const Button = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 2px;
  color: #212121;
  background-color: #c2ccd1;
  font-size: 1em;
  box-shadow: 1px 1px 5px #6c5656;

  :hover,
  :focus {
    background-color: #0984b9;
    color: white;
    transition: all 0.2s;
  }
`;
