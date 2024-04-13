/* eslint-disable react/no-unescaped-entities */
import Navbar from "../Shared/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import footerArt from "../../assets/images/footer-art.png"
import Footer from "../Shared/Footer";
import { Helmet } from "react-helmet-async";

const Login = () => {
    //get the location
    const location = useLocation();
    const navigate = useNavigate();

    const { user, signInUser, googlePopUpSignIn, githubPopUpSignIn } = useContext(AuthContext);

    //email-password sign in
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
                .then(() => {
                    toast('Signed In successfully!');

                    //navigate after login
                    setTimeout(() => {
                        navigate(location?.state ? location.state : '/');
                    }, 1500)


                })
                .catch(error => {
                    toast.error(error.message);
                });
        }
        e.currentTarget.reset();
    }

    //google sign in
    const handleGoogleSignIn = () => {
        if (user) {
            toast.error('Already logged in');
        }
        else {
            //sign in user
            googlePopUpSignIn()
                .then(result => {
                    toast('Signed In successfully!');

                    //navigate after login
                    setTimeout(() => {
                        navigate(location?.state ? location.state : '/');
                    }, 1500)
                    console.log(result.user);
                })
                .catch(error => {
                    toast.error(error.message);
                })
        }
    }

    //github sign in
    const handleGithubSignIn = () => {
        if (user) {
            toast.error('Already logged in');
        }
        else {
            //sign in user
            githubPopUpSignIn()
                .then(result => {
                    toast('Signed In successfully!');

                    //navigate after login
                    setTimeout(() => {
                        navigate(location?.state ? location.state : '/');
                    }, 1500)
                    console.log(result.user);
                })
                .catch(error => {
                    toast.error(error.message);
                    console.error(error);
                })
        }
    }

    return (
        <div>
            <Helmet>
                <title>Login | Villa Voyage Ventures</title>
            </Helmet>

            <Navbar></Navbar>


            <div>
                <ToastContainer />
                <div className="hero w-full mx-auto">
                    <div className="hero-content flex-col w-full">
                        {/* log in text */}
                        <div className="text-center animate__animated animate__zoomIn">
                            <h1 className="text-5xl font-bold font-raleway text-secondaryColor">Login now!</h1>
                            <p className="py-6 text-secondaryColor">Login into your account and continue where you left off</p>
                        </div>

                        {/* log in options */}
                        <div className="grid lg:grid-cols-12 w-full lg:gap-6">
                            {/* social log in */}
                            <div className="lg:col-span-5 flex flex-col justify-center  items-center lg:items-end animate__animated animate__backInLeft mb-10 lg:mb-0">
                                <h2 className="text-xl font-semibold mb-4">Login using your social accounts</h2>
                                <div className="flex gap-8 mb-8">
                                    <div>
                                        <button onClick={handleGoogleSignIn} className="btn btn-circle bg-transparent border-base-300">
                                            <FcGoogle></FcGoogle>
                                        </button>
                                    </div>
                                    <div>
                                        <button onClick={handleGithubSignIn} className="btn btn-circle bg-transparent border-base-300">
                                            <FaGithub></FaGithub>
                                        </button>
                                    </div>
                                </div>

                                <p>Don't have an account? <Link to="/register" className="underline text-red-500 font-bold">Register</Link> Now!</p>
                            </div>

                            {/* Or */}
                            <div className="divider lg:divider-horizontal text-xl">OR</div>

                            {/* email-password sign in */}
                            <div className="lg:col-span-6 card shrink-0 w-full shadow-2xl animate__animated animate__backInRight">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <img className="w-full" src={footerArt} alt="" />
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;