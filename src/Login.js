import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import Dashboard from './Dashboard'
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const baseurl = "https://ecs-dev0-core.fscms.co"; // Replace with your base URL
  const refreshData = {
    refresh_token: localStorage.getItem('refresh_token'),
    mode: "json"
  };

   // Token refresh interceptor
  const axiosInstance = axios.create();
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response && error.response.status === 401) {
        try {
          const response = await axios.post(`${baseurl}/auth/refresh`, refreshData);
          const newAccessToken = response.data.data.access_token;
          localStorage.setItem('access_token', newAccessToken);
          console.log('Regenerated New Access Token:', newAccessToken);
          // Retry the failed request with the new access token
          error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axios(error.config);
        } catch (refreshError) {
          console.error('Error refreshing access token:', refreshError);
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const checkAndRefreshToken = async () => {
      const storedAccessToken = localStorage.getItem('access_token');

      if (!storedAccessToken) {
        const storedRefreshToken = localStorage.getItem('refresh_token');
        if (storedRefreshToken) {
          try {
            const response = await axios.post(`${baseurl}/auth/refresh`, refreshData);
            const newAccessToken = response.data.data.access_token;
            localStorage.setItem('access_token', newAccessToken);
            console.log('Regenerated New Access Token:', newAccessToken);
          } catch (refreshError) {
            console.error('Error refreshing access token:', refreshError);
            // Handle refresh error if needed
          }
        }
      }
    };

    checkAndRefreshToken();
  }, []);



  useEffect(() => {
    const storedAccessToken = localStorage.getItem('access_token');
    if (storedAccessToken) {
      navigate('/dash'); // Automatically navigate to the dashboard
    }
  }, [navigate]);



  const isEmailValid = (email) => {
    // Email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length > 6;
  };

  const login = async () => {
    setFormError("");

    if (!isEmailValid(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (!isPasswordValid(password)) {
      setFormError("Password must be more than 6 characters.");
      return;
    }

    try {
      const item = {
        email: email,
        password: password,
      };

      const response = await fetch("https://ecs-dev0-core.fscms.co/auth/login", {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        },
        body: JSON.stringify(item)
      });

      if (!response.ok) {
        // Handle invalid login credentials or other error scenarios
        throw new Error("Invalid login credentials. Please try again.");
      }

      // Login successful, parse the response
      const result = await response.json();
      console.log(result)
    //  console.log("local storage start")
      // Store the access token and refresh token in local storage
      localStorage.setItem("access_token", result.data.access_token);
      localStorage.setItem("refresh_token", result.data.refresh_token);
      localStorage.setItem("expires", result.data.expires);
      //console.log(result.data.expires)


      //console.log("local storage end")
      console.warn(email, password, result.access_token, result.refresh_token);
      setIsLoggedIn(true);
      // Clear the input fields after successful login
      setEmail("");
      setPassword("");
       
      // Navigate to the dashboard
      navigate("/dash");
    } 
    catch (error) {
      console.error("Error:", error.message);
      setFormError("Invalid login credentials. Please try again.");
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      login();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [email, password]); // Make sure to include email and password in the dependency array


  
  return (
    <div className="App ">
      <div className="col-sm-6 offset-sm-3">
        <div className='register-container' data-testid='login'>

          <h1>Login</h1>
          
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="bi bi-envelope-fill"></i>
              </span>
            </div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email" data-testid="email-input"  />
          </div>
          
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="bi bi-lock-fill"></i>
              </span>
            </div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" data-testid="password-input" />
          </div>

          <button onClick={login} className="btn btn-primary" data-testid="login-button">Login</button>
          <div data-testid='error-message'>
            {formError && (
              <div variant="danger" className="error-message" >
                {formError}
              </div>
            )}
          </div>

          <p>
            Not registered yet?{' '}
            <Link to="/">Click here to register</Link>
          </p>
        
          
        </div>
      </div>
    </div>
  );
}

export default Login;
