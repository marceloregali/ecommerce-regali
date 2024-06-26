import { Grid, Typography } from "@mui/material";
import { styles } from "./estilos";

let styles = {
  cajaUno: {
    backgroundColor: { xs: "blue", sm: "steelblue", md: "peru" },
    color: "white",
    padding: { xs: "20px", sm: "30px", md: "40px" },
  },
  cajaDos: {
    backgroundColor: "red",
  },
  cajaTres: {
    backgroundColor: "green",
  },
};

const ProbandoResponsive = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={styles.cajaUno}>
            Caja 1
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant={styles.cajaDos}>Caja 2</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant={styles.cajaTres}>Caja 3</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProbandoResponsive;
