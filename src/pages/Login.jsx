import React from 'react';
import { DiVim } from 'react-icons/di';
import Header from '../components/Header';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <div className="card-body">
                    <h2 className='text-2xl pb-2 text-center'>Login your account</h2>
                    <hr></hr>
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Email address</label>
                        <input type="email" className="input" placeholder="Enter your email address" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Enter your password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 rounded-none">Login</button>
                    </fieldset>
                    <p className='text-center '>Dont’t Have An Account ? <Link className='text-red-500' to="/auth/register">Register</Link></p>
                </div>
            </div>
        </div>

    )
};

export default Login;