/* eslint-disable react/no-unescaped-entities */
import Navbar from "../Shared/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero w-3/5 mx-auto min-h-screen">
                    <div className="hero-content flex-col w-full">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold font-playfairDisplay text-secondaryColor">Login now!</h1>
                            <p className="py-6 text-secondaryColor">Create an account to save and manage your properties freely</p>
                        </div>

                        <div className="grid grid-cols-10 w-full gap-6">
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
                            <div className="col-span-4 card shrink-0 w-full max-w-sm shadow-2xl ">
                                <form className="card-body =">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-base font-medium text-secondaryColor">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-base font-medium text-secondaryColor">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a className="link link-error link-hover hover:link-info" href="#">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-primaryColor border-primaryColor text-xl hover:bg-lime-600">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;