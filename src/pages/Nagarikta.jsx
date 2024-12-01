import React, { useState } from 'react';

const Nagarikta  = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", { email, password });
    } else {
      console.log("Signing up with:", { username, email, password });
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required={!isLogin}
            />
          </div>
        )}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <p className="text-center mt-4">
        {isLogin ? (
          <span>
            Don't have an account?{" "}
            <button className="text-blue-500" onClick={() => setIsLogin(false)}>
              Sign Up
            </button>
          </span>
        ) : (
          <span>
            Already have an account?{" "}
            <button className="text-blue-500" onClick={() => setIsLogin(true)}>
              Login
            </button>
          </span>
        )}
      </p>
    </div>
  );
};

export default AuthForm;
