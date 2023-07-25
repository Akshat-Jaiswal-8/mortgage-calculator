import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./Components/Navbar";
import Result from "./components/Result.jsx";
import SliderSelect from "./components/SliderSelect.jsx";
import TenureSelect from "./components/TenureSelect.jsx";
import { useState } from "react";
function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        {/* sx is used for inline styling. */}
        <Grid container spacing={5} alignItems=" center ">
          {/* Grid container represents the parent grid and grid items represents the child grid. */}

          <Grid item xs={12} md={6}>
            {/* xs={12} means that grid will now take the entire screen on extra small screen and
            md ={6} means that it will take half of the width on medium and bigger screens*/}
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
