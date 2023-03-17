import { Grid, Paper, Typography } from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";

import { MessageProps } from "./interfaces";

function Message(props: MessageProps): JSX.Element {
  const { message, loading } = props;

  return (
    <Paper>
      <Grid
        container
        width="100%"
        height="100px"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {loading ? (
            <Typography>Carregando..</Typography>
          ) : (
            <>
              <ReportIcon fontSize="large" color="warning" />
              <Typography>{message}</Typography>
            </>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export { Message };
