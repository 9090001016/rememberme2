import React, { useState, useEffect } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const rememberMeData = localStorage.getItem('rememberMeData');
    if (rememberMeData) {
      const data = JSON.parse(rememberMeData);
      setUsername(data.username);
      setPassword(data.password);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // call your login API here
    if (rememberMe) {
      localStorage.setItem('rememberMeData', JSON.stringify({ username, password }));
    } else {
      localStorage.removeItem('rememberMeData');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <label htmlFor="rememberMe">
        <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
        Remember me
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
