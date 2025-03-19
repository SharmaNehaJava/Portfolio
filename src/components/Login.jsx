import React, { useState } from "react";
import AuthLayout from "../components/ReusableComp/AuthLayout";
import InputField from "../components/ReusableComp/InputField";
import Button from "../components/ReusableComp/Button.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", { email, password });
    // Integrate API call for login here
  };

  return (
    <AuthLayout heading="Welcome Back!">
      <form className="space-y-4">
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <Button label="Login" onClick={handleLogin} />
      </form>
      <p className="text-sm text-center">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-400 hover:underline">
          Register
        </a>
      </p>
    </AuthLayout>
  );
};

export default Login;
