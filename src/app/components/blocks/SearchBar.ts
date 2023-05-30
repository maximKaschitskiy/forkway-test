import styled from "@emotion/styled";

const SearchBar = styled.input`
  display: flex;
  flex-direction: row;
  background: white;
  width: 100%;
  height: 38px;
  outline: none;
  border: none;
  padding: 0;
  padding-left: 5%;
  border-radius: 7.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #060606;
  text-align: left;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px;
  &::placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    color: #858585;
    text-align: left;
  }
`;

export default SearchBar;
