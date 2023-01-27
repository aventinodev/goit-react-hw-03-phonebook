import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 16px;
  max-width: 100%;

  @media screen and (min-width: 480px) {
    max-width: 480px;
    padding: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 2em;
  font-weiht: bold;
  margin-bottom: 24px;
  text-align: center;
`;
export const Button = styled.button`
  width: 300px;
  padding: 4px 8px;
  margin-top: 8px;
  border: none;
  border-radius: 8px;
  color: #212121;
  background-color: grey;
  font-size: 1em;
  :hover,
  :focus {
    background-color: #0984b9;
    color: white;
    transition: all 0.2s;
  }
`;
