import styled from '@emotion/styled'
import { PagesWrapper } from "../../types";

const PagesWrapper = styled.div<PagesWrapper>`
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
    overflow: hidden;
    overflow-y: scroll;
    border-radius: 10px;
    padding-left: 5.5%;
    padding-right: 5.5%;
    outline: ${(props) => props.isDragOver ? '3px solid #a8c1d7' : 'none'};
    & > ul {
        padding-left: 0;
    }
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #d1d1d1;
      border-radius: 10px;
    }
`

export default PagesWrapper;