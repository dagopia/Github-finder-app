import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const SearchAccount = () => {
  return (
    <Box
      component='form'
      sx={{
        width: "80%",
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        sx={{
          ml: 30,
          my: 4,
          bgcolor: "white",
          borderRadius: "5px",
        }}
        id='search'
        label='Search'
        variant='outlined'
        fullWidth
      />
      <Button variant='contained' sx={{ bgcolor: "#394867" }} size='large'>
        Go
      </Button>
    </Box>
  );
};
export default SearchAccount;
