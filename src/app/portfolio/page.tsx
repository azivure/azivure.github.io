import { Unstable_Grid2 as Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

type Image = {
  description: string,
  filename: string
};

const images = [
  {
    description: "This is a test",
    filename: "lil_me.png"
  }
] as Image[];

export default function Portfolio() {
  return (
    <Stack alignItems="center">
    <Grid
      container
      direction="row"
      spacing={2}
    >
      <Grid xs={12}>
        <Typography
          align="center"
          variant="h1"
          sx={{
            fontWeight: "700"
          }}
        >
          Projects
        </Typography>
      </Grid>

      <Grid xs={5}>
        <Box
          component="img"
          src="/lil_me.png"
          sx={{
            maxWidth: "250px",
            maxHeight: "250px"
          }}
        />
      </Grid>
      <Grid xs={7}>
        <Typography>
          This is a description
        </Typography>
      </Grid>
    </Grid>
    </Stack>
  )
}