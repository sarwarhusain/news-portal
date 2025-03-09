import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser,setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(e.target.name.value);
    // console.log(e.target.photo.value);
    // console.log(e.target.email.value);
    // console.log(e.target.password.value);
    //get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log({ name, photo, email, password });

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <div className="card-body">
          <h2 className="text-2xl pb-2 text-center">Register your account</h2>
          <hr></hr>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="fieldset-label">Your Name</label>
              <input
                type="name"
                name="name"
                className="input"
                placeholder="Enter your Name"
              />
            </div>
            <div className="form-control">
              <label className="fieldset-label">Photo Url</label>
              <input
                type="photo"
                name="photo"
                className="input"
                placeholder="Url"
              />
            </div>
            <div className="form-control">
              <label className="fieldset-label">Email address</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your email address"
              />
            </div>
            <div className="form-control">
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 rounded-none">Login</button>
          </form>
          <p className="text-center ">
            Already Have An Account ?{" "}
            <Link className="text-green-500" to="/auth/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
