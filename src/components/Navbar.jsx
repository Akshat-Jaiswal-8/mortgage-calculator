// here appbar is used for the navbar.
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5">Bank of React</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
