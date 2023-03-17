import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerUpload = styled.section`
  cursor: pointer;
  width: 100%;
  text-align: center;
  border: 1px dashed black;
  background: rgba(0, 0, 0, 0.1);

  & > div {
    padding: 1rem 2rem;
  }
`;

export const SCLink = styled(Link)`
  text-decoration: underline;

  &:hover {
    color: blue;
  }
`;
