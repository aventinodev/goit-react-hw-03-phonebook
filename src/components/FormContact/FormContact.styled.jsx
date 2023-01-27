import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  padding: 16px;
  max-width: 100%;
  border: 1px solid #d1c2c2;
  border-radius: 4px;
  box-shadow: 2px 4px 10px #8f8f8f;
  @media screen and (min-width: 480px) {
    padding: 32px;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
export const Input = styled.input`
  padding: 8px 8px;
  margin-top: 8px;
  border: 1px solid #bba4a4;
`;

export const Button = styled.button`
  padding: 8px 32px;
  margin: 8px auto 0;

  border: none;
  border-radius: 4px;
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
