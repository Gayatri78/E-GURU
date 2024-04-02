import React from "react";
import '../Style/Signup.css';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="form-container">
      <form className="Auth-form">
        <div className="Auth">
          <h3 className="form-title">Sign Up</h3>
         
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text" required
              className="form-control mt-1"
              placeholder="e.g Gayatri Adhav"
            />
          </div>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email" required
              className="form-control mt-1"
              placeholder="E-Mail"
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input required
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

          <div className="text-center">
            Already registered?{" "}
            <Link to="/login">Log in</Link>
          </div>

          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>

        </div>
      </form>
    </div>
  );
}
