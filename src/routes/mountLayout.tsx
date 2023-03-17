import { Grid } from "@mui/material";

import { Header } from "../components";

function MountLayout(children: JSX.Element) {
  return (
    <Grid container direction="column">
      <Header />
      <Grid className="container">
        <Grid className="container-layout">{children}</Grid>
      </Grid>
    </Grid>
  );
}

export { MountLayout };
