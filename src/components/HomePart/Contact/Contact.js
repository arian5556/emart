import { Box, TextField } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Box sx={{ py: 15, my: 15 }} className="bg  text-center">
      <h1 className="fs-1 mb-5">
        Subscribe to our <br /> newsletter for latest news
      </h1>
      <TextField
        sx={{ width: "50%", m: 1 }}
        id="standard-basic"
        label="Email"
        name="email"
        type="email"
        variant="standard"
      />
    </Box>
  );
};

export default Contact;
