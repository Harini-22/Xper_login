import React, { useState ,useEffect } from 'react';
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Register() {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    // Email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length > 6;
  };

  useEffect(() => {
    const isRegistered = localStorage.getItem('isRegistered');
    if (isRegistered) {
      const { fname, lname, email, password } = JSON.parse(isRegistered);
      if (fname && lname && email && password) {
        navigate("/dash");
      }
    }
  }, [navigate]);



  const signUp = async () => {
    setFormError("");

    if (!fname) {
      setFormError("Please enter your first name.");
      return;
    }

    if (!lname) {
      setFormError("Please enter your last name.");
      return;
    }

    if (!isEmailValid(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (!isPasswordValid(password)) {
      setFormError("Password must be more than 6 characters.");
      return;
    }

    try {
      let item = {
        firstName: fname,
        lastName: lname,
        email: email,
        password: password,
      };

      let result = await fetch("https://ecs-dev0-core.fscms.co/users/register", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      });
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      localStorage.setItem("isRegistered", "true");

      navigate("/dash");
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error scenarios and show error messages to the user
    }
  };

 
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        signUp();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [fname, lname, email, password]); 


  return (
    <div className="App">
      <div className="col-sm-6 offset-sm-3">
        <div className='register-container'>
          <h1>Register</h1>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="bi bi-person-fill"></i>
              </span>
            </div>
            <input type="text" value={fname} onChange={(e) => setfName(e.target.value)} className="form-control" placeholder="First name" />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="bi bi-person-fill"></i>
              </span>
            </div>
            <input type="text" value={lname} onChange={(e) => setlName(e.target.value)} className="form-control" placeholder="Last name" />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="bi bi-envelope-fill"></i>
              </span>
            </div>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="bi bi-lock-fill"></i>
              </span>
            </div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
          </div>

          <button onClick={signUp} className="btn btn-primary">Sign Up</button>

          {formError && (
            <div className="error-message" data-testid="form-error-general">
              {formError}
            </div>
          )}

          <p>
            Already registered?{' '}
            <Link to="/login">Click here to login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;