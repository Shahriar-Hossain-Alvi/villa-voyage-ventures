import Navbar from "../Shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import 'animate.css';
import footerArt from "../../assets/images/footer-art.png"
import { Link } from "react-router-dom";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photoUrl = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('password');

        //password validation
        if (password.length < 6) {
            toast.error('Password should be at least 6 character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password should contain at least 1 uppercase character');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Password should contain at least 1 lowercase character');
            return;
        }

        //create new user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast('Profile Created successfully!');
            })
            .catch(error => {
                toast.error(error.message)
                console.error(error);
            });
        e.currentTarget.reset();
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-2">
                <div className="flex items-center justify-start order-2">
                    {/* heading */}
                    <div className="animate__animated animate__backInRight">
                        <h1 className="text-5xl font-bold font-playfairDisplay text-secondaryColor">Register now!</h1>
                        <p className="py-6 text-secondaryColor font-medium text-lg">Create an account to save and manage your properties freely</p>

                        <hr />

                        <p className="font-medium text-lg mt-8">Already have an account? <Link className="underline text-red-500 font-bold" to="/login">Login</Link> now</p>
                    </div>
                </div>

                <div className="hero mt-4 animate__animated animate__backInLeft">
                    <div className="hero-content w-full">
                        <div className="card shrink-0 max-w-lg w-full shadow-2xl ">
                            <form onSubmit={handleRegister} className="card-body">

                                {/* input name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base font-medium text-secondaryColor">Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="Your name" className="input input-bordered" required />
                                </div>

                                {/* input photo url */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base font-medium text-secondaryColor">PhotoUrl</span>
                                    </label>
                                    <input name="photoUrl" type="text" placeholder="Photo Url" className="input input-bordered" required />
                                </div>

                                {/* input email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base font-medium text-secondaryColor">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                </div>

                                {/* input password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base font-medium text-secondaryColor">Password</span>
                                    </label>
                                    <div className="flex items-center">
                                        <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered w-full" required />
                                        <span className="cursor-pointer -ml-6 text-lg hover:text-primaryColor" onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                            }
                                        </span>
                                    </div>
                                </div>

                                {/* register button */}
                                <div className="form-control mt-6">
                                    <button className="btn bg-primaryColor border-primaryColor text-xl hover:bg-lime-600">Register</button>
                                </div>
                            </form>
                            <ToastContainer></ToastContainer>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <img className="w-full" src={footerArt} alt="" />
            </div>
        </div>
    );
};

export default Register;