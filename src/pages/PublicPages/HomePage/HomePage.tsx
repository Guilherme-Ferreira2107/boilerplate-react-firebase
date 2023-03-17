import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

import banner from "../../../assets/banner-5243332.jpg";

function HomePage(): JSX.Element {
  let navigate = useNavigate();

  return (
    <Grid container alignItems="center">
      <Grid item xs={12} md={6}>
        <Grid mb={4}>
          <Typography
            variant="h3"
            fontSize="5rem"
            style={{ lineHeight: "80px" }}
          >
            <strong>Este é o boileplate, faça bom uso!</strong>
          </Typography>
        </Grid>
        <Grid mb={6}>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vulputate ante et turpis tristique, ut volutpat augue congue.
          </Typography>
        </Grid>
        <Button
          size="large"
          variant="contained"
          onClick={() => navigate("/login")}
        >
          Comece a usar{" "}
          <Grid ml={2} mt={0.75}>
            <EastIcon />
          </Grid>
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <img style={{ width: "100%" }} src={banner} alt="" />
      </Grid>
    </Grid>
  );
}

export { HomePage };
