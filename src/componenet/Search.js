import * as React from "react";
import { useState, useContext } from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import GithubContext from "../Context/github/GithubContext";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
const SearchAccount = () => {
  const [text, setText] = useState("");

  const { users, searchUser, clearUser } = useContext(GithubContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("plesae enter something");
    } else {
      searchUser(text);

      setText(text);
    }
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={0} sx={{ px: 5, py: 10 }}>
          <Grid item xs={6} md={8}>
            <FormControl
              variant='standard'
              fullWidth
              sx={{
                bgcolor: "white",
                borderRadius: "5px",
              }}
            >
              <BootstrapInput
                id='bootstrap-input'
                placeholder='Search'
                type='text'
                value={text}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2}>
            <Box sx={{ display: "flex" }}>
              <Button
                variant='contained'
                type='submit'
                sx={{ bgcolor: "#000000" }}
                size='large'
              >
                Go
              </Button>
              {users.length > 0 && (
                <Button
                  onClick={clearUser}
                  variant='contained'
                  sx={{ bgcolor: "#000000", mx: 2 }}
                  size='small'
                >
                  Clear
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
export default SearchAccount;
