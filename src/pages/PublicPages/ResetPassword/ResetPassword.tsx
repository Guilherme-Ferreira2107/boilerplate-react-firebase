import { useState } from "react";
import { Grid, TextField, Typography, Button, Paper } from "@mui/material";

import { SCForm } from "./styles";
import { Loading } from "../../../components";
import { useResetPassword } from "../../../core/hooks";

function ResetPassword(): JSX.Element {
  const [inputEmail, setInputEmail] = useState("");
  const { resetPassword, isLoading } = useResetPassword();

  function submit() {
    if (inputEmail !== "") resetPassword(inputEmail);
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      height="100%"
    >
      <Paper elevation={2}>
        <Grid container padding={3} justifyContent="center">
          <Typography variant="h4">Recuperar Senha</Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <SCForm>
              <TextField
                fullWidth
                size="small"
                margin="normal"
                label="Informe seu email"
                variant="outlined"
                onChange={(val) => setInputEmail(val.target.value)}
              />
              <Button variant="outlined" onClick={submit}>
                {isLoading ? <Loading /> : "RESETAR SENHA"}
              </Button>
            </SCForm>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export { ResetPassword };
