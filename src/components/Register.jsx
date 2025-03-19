import React, { useState } from "react";
import AuthLayout from "../components/ReusableComp/AuthLayout";
import InputField from "../components/ReusableComp/InputField";
import Button from "../components/ReusableComp/Button.jsx";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Registering with:", { username, email, password });
    // Integrate API call for registration here
  };

  return (
    <AuthLayout heading="Create Your Account">
      <form className="space-y-4">
        <InputField
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
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
        <Button label="Register" onClick={handleRegister} />
      </form>
      <p className="text-sm text-center">
        Already have an account?{" "}
        <a href="/login" className="text-blue-400 hover:underline">
          Login
        </a>
      </p>
    </AuthLayout>
  );
};

export default Register;
