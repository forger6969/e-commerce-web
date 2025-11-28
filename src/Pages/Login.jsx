import React, { useState } from "react";
import axios from "axios";
import Phone from "../assets/dl.beatsnoop 1.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // API endpoint — o'zingni login APIni qo'yasan
  const API_URL = "https://steam-users-backend-for-command-1.onrender.com/login/apple";

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email || !password) {
      return setError("Please fill all fields");
    }

    setLoading(true);
    try {
      const response = await axios.post(API_URL, {
        email,
        password,
      });

      setSuccess("Login successful!");
      console.log("USER LOGGED IN:", response.data);

      // Agar token qaytsa — localStorage ga saqlab qo'yamiz
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="flex mt-10 items-center">

        {/* LEFT IMAGE */}
        <div className="bg-[#CBE4E8] h-[781px] flex items-center w-[905px]">
          <img src={Phone} alt="Phone" />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full h-screen flex items-center justify-center bg-white">
          <div className="w-[350px] flex flex-col gap-4">

            <h1 className="text-3xl font-semibold">Log in to your account</h1>
            <p className="text-gray-500 text-sm">Enter your details below</p>

            {/* ERROR */}
            {error && (
              <p className="bg-red-100 text-red-600 p-2 rounded text-sm">
                {error}
              </p>
            )}

            {/* SUCCESS */}
            {success && (
              <p className="bg-green-100 text-green-600 p-2 rounded text-sm">
                {success}
              </p>
            )}

            <form className="flex flex-col gap-4 mt-2" onSubmit={handleLogin}>

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email"
                className="border-b border-gray-300 py-2 outline-none focus:border-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* PASSWORD */}
              <input
                type="password"
                placeholder="Password"
                className="border-b border-gray-300 py-2 outline-none focus:border-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* LOGIN BUTTON */}
              <button
                disabled={loading}
                className="w-full py-3 bg-red-500 text-white rounded-md mt-2 disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Log In"}
              </button>

              {/* GOOGLE BUTTON */}
              <button
                type="button"
                className="w-full py-3 border-2 border-gray-300 rounded-md flex items-center justify-center gap-3"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  className="w-5 h-5"
                />
                <span>Log in with Google</span>
              </button>

            </form>

            <p className="text-center text-gray-500 text-sm mt-2">
              Don't have an account?
              <Link to={"/register"} className="text-black font-medium underline ml-1">
                Create account
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
