import { Button, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { SCGrid, SCNav } from "./styles";
import { useAuthentication, useLogout } from "../../core/hooks";

const Header = () => {
  let navigate = useNavigate();
  const { isAuth, isLoading } = useAuthentication();
  const { logout } = useLogout();

  return (
    <SCGrid
      container
      justifyContent="space-between"
      alignItems="center"
      style={{ padding: "1rem" }}
    >
      {isLoading ? (
        <div>...loading</div>
      ) : (
        <>
          <Grid>
            <Link to={false ? "/dashboard" : "/"}>
              <Typography variant="h6" component="h2">
                Boilerplate
              </Typography>
            </Link>
          </Grid>

          {isAuth ? (
            <SCNav>
              <ul>
                <li>
                  <Link to={`/dashboard`}>
                    <Typography>Dashboard</Typography>
                  </Link>
                </li>
                <li>
                  <button className="btn-header" onClick={logout}>
                    <Typography>Sair</Typography>
                  </button>
                </li>
              </ul>
            </SCNav>
          ) : (
            <SCNav>
              <ul>
                <li>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => navigate("/login")}
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                      color: "rgba(0, 0, 0, 0.6)",
                      textTransform: "none",
                    }}
                  >
                    Entrar
                  </Button>
                </li>
                <li>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => navigate("/cadastro")}
                    style={{
                      textTransform: "none",
                    }}
                  >
                    Criar conta
                  </Button>
                </li>
              </ul>
            </SCNav>
          )}
        </>
      )}
    </SCGrid>
  );
};

export { Header };
