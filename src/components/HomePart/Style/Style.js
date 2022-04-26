import { Container, Grid } from "@mui/material";
import React from "react";

const Style = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4}>
          <h1 className="my-5">
            Unique <br /> accessories <br /> for different <br /> styles
          </h1>
          <p>
            Enim lorem tibique duo te, eu magna consetetur eos, vidisse nonumes
            graecis ne vim. Ea cum iuvaret similique, te est animal corpora
            oportere. Ex sea etiam <br /> atomorum sententiae. Ut ius sanctus
            inimicus electram. Id quidam epicurei eos, ignota civibus qui.
          </p>
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Style;
