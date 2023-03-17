import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Grid, Paper, Typography, Button } from "@mui/material";

import { SCForm } from "./styles";
import { Loading, SCTextField } from "../../../components";
import { ILogin } from "../../../core/interfaces";
import { useLogin } from "../../../core/hooks";

function LoginPage(): JSX.Element {
  const { authLogin, isLoading } = useLogin();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<ILogin> = (data) =>
    authLogin(data.email, data.password);

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
          <Typography variant="h4">Entrar</Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <SCForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <SCTextField
                name="email"
                label="Email"
                control={control}
                rules={{ required: true }}
                errorsType={errors?.email?.type}
              />

              <SCTextField
                name="password"
                label="Senha"
                type="password"
                control={control}
                rules={{ required: true }}
                errorsType={errors?.password?.type}
              />

              <Button variant="contained" type="submit">
                {isLoading ? <Loading /> : "Entrar"}
              </Button>

              <Grid container justifyContent="space-between" padding={1}>
                <Link to="/recuperar-senha">
                  <Typography>Esqueceu sua senha?</Typography>
                </Link>
                <Link to="/cadastro">
                  <Typography>Ainda não é membro?</Typography>
                </Link>
              </Grid>
            </SCForm>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export { LoginPage };
