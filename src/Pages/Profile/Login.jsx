/* eslint-disable react/no-unescaped-entities */
import Navbar from "../Shared/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { user, signInUser } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        

        if (user) {
            toast.error('Already logged in');
        }
        else {
            //sign in user
            signInUser(email, password)
                .then(result => {
                    console.log(result.user);
                    toast('Signed In successfully!');
                })
                .catch(error => {
                    toast.error(error.message);
                    console.error(error);
                });
        }
        e.currentTarget.reset();
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero w-3/5 mx-auto">
                    <div className="hero-content flex-col w-full">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold font-playfairDisplay text-secondaryColor">Login now!</h1>
                            <p className="py-6 text-secondaryColor">Login into your account and continue where you left off</p>
                        </div>

                        <div className="grid grid-cols-12 w-full gap-6">

                            <div className="col-span-4 flex flex-col justify-center items-center">
                                <h2 className="text-xl font-semibold mb-4">Login using your social accounts</h2>
                                <div className="flex gap-8 mb-8">
                                    <div>
                                        <button className="btn btn-circle bg-transparent border-base-300">
                                            <FcGoogle></FcGoogle>
                                        </button>
                                    </div>
                                    <div>
                                        <button className="btn btn-circle bg-transparent border-base-300">
                                            <FaGithub></FaGithub>
                                        </button>
                                    </div>
                                </div>

                                <p>Don't have an account? <Link to="/register" className="underline text-red-500">Register</Link> Now!</p>
                            </div>


                            <div className="col-span-2 flex items-center justify-center">
                                <h4 className="text-4xl font-playfairDisplay bg-secondaryColor text-primaryColor p-4 rounded-full">OR</h4>
                            </div>


                            <div className="col-span-6 card shrink-0 w-full max-w-sm shadow-2xl ">
                                <form onSubmit={handleLogin} className="card-body =">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-base font-medium text-secondaryColor">Email</span>
                                        </label>
                                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-base font-medium text-secondaryColor">Password</span>
                                        </label>
                                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a className="link link-error link-hover hover:link-info" href="#">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-primaryColor border-primaryColor text-xl hover:bg-lime-600">Login</button>
                                    </div>
                                </form>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;