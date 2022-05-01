import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

const Contact = () => {
 const [email,setEmail]=useState('')
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
        onChange={e=>setEmail(e.target.value)}
        variant="standard"
        onKeyDown={(e) => {
          if (e.code === "Enter" && email ) {
            alert(`${email} has been subscribed`)
            e.preventDefault()
          }
        }}
      />
    </Box>
  );
};

export default Contact;
