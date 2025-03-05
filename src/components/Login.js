import React, { useCallback, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Loader from './Loader';

export default function Login() {
  // isLogin tell if the page is the login page or the register page
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { login, register } = useAuth();
  const [authLoading, setAuthLoading] = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setUsernameError('');
    setPasswordError('');

    try {
      const success = isLogin 
        ? await login(username, password)
        : await register(username, password);
      
      if (!success) {
        setUsernameError(isLogin ? 'Invalid username or password' : 'Registration failed');
        setPasswordError(isLogin ? 'Invalid username or password' : '');
      }
    } catch (error) {
      setUsernameError(isLogin ? 'Invalid username or password' : 'Registration failed');
      setPasswordError(isLogin ? 'Invalid username or password' : 'Registration failed');
    } finally {
      setAuthLoading(false);
    }
  }, [isLogin, username, password, login, register]);

  return (
    <div className="login-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      {authLoading && <Loader />}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            aria-label='Username field'
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <div className="error">{usernameError}</div>}
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
        <button type="submit">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need to register?' : 'Already have an account?'}
      </button>
    </div>
  );
}