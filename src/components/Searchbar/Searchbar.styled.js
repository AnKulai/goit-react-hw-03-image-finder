import styled from 'styled-components';

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const CustomHeader = styled.div`
  width: 100%;
  background-color: ${randomColor()};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;

  & > form {
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
    gap: 15px;
  }

  & input,
  & button {
    height: 100%;
    padding: 0 30px;
  }

  & button {
    color: black;
    font-size: 16px;
    border: 1px solid white;
    background: transparent;
    transition: all 0.3s;

    &:hover {
      color: white;
      background-color: black;
    }
  }
`;
