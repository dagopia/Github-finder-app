import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    // Perform login logic here, such as making an API request
    console.log("Credentials:", credentials);
  };

  return (
    <div>
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        value={credentials.password}
        onChange={handleChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
