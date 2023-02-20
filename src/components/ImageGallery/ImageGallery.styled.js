import styled from 'styled-components';

export const CustomGallery = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  & > li {
    grid-column-end: 1 span;
    height: 267px;

    & > li > img {
      width: 100px;
    }
  }
`;
