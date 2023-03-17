import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Grid, Typography, Button, Paper, MenuItem } from "@mui/material";

import { SCForm } from "./styles";
import { IFormData } from "../../../core/interfaces";
import { Loading, SCSelectField, SCTextField } from "../../../components";
import { useCreateRegister } from "../../../core/hooks";

function CadastroPage(): JSX.Element {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  const { registerUser, isLoading } = useCreateRegister();
  const [checkPassword, setCheckPassword] = useState(false);
  const inputPassword = watch("password");
  const inputConfirmPassword = watch("confirmPassword");

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    if (data?.password !== data?.confirmPassword) {
      checkFieldPassword();
      return;
    }

    registerUser(data?.email, data?.password, data?.firstName, data?.perfil);
  };

  function checkFieldPassword() {
    setCheckPassword(
      inputPassword &&
        inputPassword.length > 0 &&
        inputConfirmPassword &&
        inputConfirmPassword.length > 0 &&
        inputPassword !== inputConfirmPassword
    );
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      height="100%"
    >
      <Paper elevation={2} style={{ maxWidth: "600px" }}>
        <Grid container padding={3} justifyContent="center">
          <Typography variant="h4">Cadastrar</Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <SCForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <SCTextField
                    name="firstName"
                    label="Nome"
                    control={control}
                    rules={{ required: true }}
                    errorsType={errors?.firstName?.type}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SCTextField
                    name="email"
                    label="Email"
                    control={control}
                    rules={{ required: true }}
                    errorsType={errors?.email?.type}
                  />
                </Grid>
                <Grid item xs={6} marginTop={2}>
                  <SCSelectField
                    name="perfil"
                    label="Perfil"
                    control={control}
                    rules={{ required: true }}
                    errorsType={errors?.perfil?.type}
                  >
                    <MenuItem value="lvl-1">Admin</MenuItem>
                    <MenuItem value="lvl-2">Master</MenuItem>
                    <MenuItem value="lvl-3">Colaborador</MenuItem>
                  </SCSelectField>
                </Grid>
                <Grid item xs={6}>
                  <SCTextField
                    name="password"
                    label="Senha"
                    type="password"
                    control={control}
                    rules={{ required: true }}
                    errorsType={errors?.password?.type}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SCTextField
                    name="confirmPassword"
                    label="Confirmar Senha"
                    type="password"
                    control={control}
                    rules={{ required: true }}
                    errorsType={errors?.confirmPassword?.type}
                  />
                  {checkPassword && (
                    <p role="alert" className="message-error">
                      <Typography>
                        A confirmação de senha não confere
                      </Typography>
                    </p>
                  )}
                </Grid>
              </Grid>
              <Button type="submit" variant="contained">
                {isLoading ? <Loading /> : "CADASTRAR"}
              </Button>
            </SCForm>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export { CadastroPage };
