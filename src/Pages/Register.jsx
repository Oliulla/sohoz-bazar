import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero py-20 bg-slate-600 w-full">
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-full">
            <h2 className="text-4xl text-center">Register</h2>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                placeholder="photoURL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          <p><Link to='/login'>Already have an account? Login</Link></p>
          </div>
        </div>
    </div>
    );
};

export default Register;