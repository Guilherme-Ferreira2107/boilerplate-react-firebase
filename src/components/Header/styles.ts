import { Grid } from "@mui/material";
import styled from "styled-components";

export const SCGrid = styled(Grid)`
  -webkit-box-shadow: 0px 8px 15px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 8px 15px -15px rgba(0, 0, 0, 0.2);
`;

export const SCNav = styled.nav`
  ul {
    display: flex;
  }

  li {
    list-style: none;
    padding: 0 0.5rem;

    .btn-header {
      cursor: pointer;
      background: none;
      border: none;
    }
  }
`;
