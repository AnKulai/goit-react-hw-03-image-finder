import styled from 'styled-components';

export const CustomBtnWrapper = styled.div`
  grid-column-end: 4 span;
  display: flex;
  align-items: center;
  justify-content: center;

  & > button {
    font-size: 18px;
    height: 50px;
    padding: 0 60px;
    color: black;
    background: transparent;
    transition: all 0.3s;

    &:hover {
      color: white;
      background-color: black;
    }
  }
`;
