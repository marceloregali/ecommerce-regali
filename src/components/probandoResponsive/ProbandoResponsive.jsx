import { Grid, Typography } from "@mui/material";

const ProbandoResponsive = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h2" style={{ backgroundColor: "blue" }}>
            Caja 1
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography style={{ backgroundColor: "red" }}>Caja 2</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography style={{ backgroundColor: "green" }}>Caja 3</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProbandoResponsive;
