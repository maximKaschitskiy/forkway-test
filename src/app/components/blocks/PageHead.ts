import styled from "@emotion/styled";
import { PageHeadProps } from "../../types";

const PageHead = styled.div<PageHeadProps>`
  margin-top: 8px;
  margin-bottom: 8px;
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: flex-start;
  border: 3px solid black 0.5;
  outline: ${(props) => (props.isDragOver ? "3px solid #a8c1d7" : "none")};
  opacity: ${(props) => (props.isDragged ? "0.5" : "1")};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px;
  background: #ffffff;
  cursor: ${(props) => props.draggable ? props.cursor : 'auto'};
`;
export default PageHead;
