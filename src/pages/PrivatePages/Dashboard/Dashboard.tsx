import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

const DashboardPage = () => {
  const [isLodingData, setIsLodingData] = useState(true);

  useEffect(() => {
    setIsLodingData(false);
  }, []);

  return (
    <Grid container width="100%">
      {!isLodingData ? (
        <>
          <Grid container justifyContent="flex-end" marginBottom={2}>
            Bem vindo, Você está logado!
          </Grid>
        </>
      ) : (
        <div>Carregando...</div>
      )}
    </Grid>
  );
};

export { DashboardPage };
