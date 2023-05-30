import styled from "@emotion/styled";

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 50%;
  height: max-content;
  box-sizing: border-box;
  position: relative;
  @media only screen and (max-width: 640px) {
    width: 100%;
  }
  @media only screen and (min-width: 641px) and (max-width: 1920px) {
    width: calc(25% + 480px);
  }
`;

export default SearchBarWrapper;
