import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LinearProgress, Paper, Typography } from "@mui/material";
const ChangePass = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const calculatePasswordStrength = (password) => {
    const length = password.length;
    let complexity = 0;
    let strength = 0;

    // Check for various character types
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);

    // Increase complexity score for each character type present
    if (hasLowerCase) complexity++;
    if (hasUpperCase) complexity++;
    if (hasNumber) complexity++;
    if (hasSpecialChar) complexity++;

    // Increase strength for longer passwords
    strength += length * 4;
    strength += complexity * 10;

    // Deduct strength for repeated patterns
    if (/(\w)\1{2,}/.test(password)) {
      strength -= length * 2;
    }

    // Deduct strength for common passwords
    const commonPasswords = [
      "password",
      "123456",
      "qwerty",
      // Add more common passwords here
    ];
    if (commonPasswords.includes(password.toLowerCase())) {
      strength = 0;
    }

    // Cap the strength at 100
    strength = Math.max(0, Math.min(100, strength));
    return strength;
  };
  const updateProgressBar = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };
  const strength = calculatePasswordStrength(password);

  return (
    <Box sx={{ border: "1px solid", p: 5, display: "flex" }}>
      <FormControl
        fullWidth
        sx={{ m: 1, maxWidth: "500px" }}
        variant='outlined'
      >
        <OutlinedInput
          onChange={updateProgressBar}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Paper sx={{ p: 5, bgcolor: "white" }}>
        <Typography>
          {" "}
          {strength < 30 ? "Weak" : strength < 70 ? "Medium" : "Strong"}{" "}
          Password
        </Typography>
        <LinearProgress variant='determinate' value={strength} sx={{ mt: 2 }} />
        <Typography sx={{ mt: 1 }}>
          Use upper and Lower case letters{" "}
        </Typography>
        <Typography>and add number</Typography>
      </Paper>
    </Box>
  );
};

export default ChangePass;
