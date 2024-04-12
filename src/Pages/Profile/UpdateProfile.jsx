/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import Navbar from "../Shared/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from "../../Providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer";
import footerArt from "../../assets/images/footer-art.png"

const auth = getAuth();

const UpdateProfile = () => {

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const handleUpdateProfileButton = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const userName = form.get('userName');
        const photoUrl = form.get('photoUrl');

        console.log(userName, photoUrl);

        //update profile
        updateProfile(auth.currentUser, {
            displayName: userName, photoURL: photoUrl
        }).then(result => {
            // Profile updated!
            toast.success('Profile Updated');
            setTimeout(() => {
                navigate("/userProfile");
            }, 1500)
            console.log(result.user);
        }).catch((error) => {
            // An error occurred
            toast.error(error);
        });

        e.currentTarget.reset();
    }


    return (
        <div>
            <Helmet>
                <title>Update Profile | Villa Voyage Ventures</title>
            </Helmet>

            <Navbar></Navbar>

            <div>
                <ToastContainer />
                <div className="hero w-full mx-auto">
                    <div className="hero-content flex-col w-full">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold font-playfairDisplay text-secondaryColor">Profile Update</h1>
                        </div>

                        <div className="grid grid-cols-2 w-full gap-10 mt-5">
                            <div className="flex flex-col justify-center order-2">
                                <h2 className="text-4xl font-semibold mb-2">Current User</h2>
                                <h2 className="text-4xl text-secondaryColor font-black font-playfairDisplay mb-3">{user.displayName}</h2>

                                <h4 className="text-2xl font-medium text-secondaryColor mb-3">Email: {user.email}</h4>
                                <h4 className="text-lg text-secondaryColor mb-8">Photo Url: {user.photoURL}</h4>
                                <p className="font-medium text-lg">Fill the form to update your profile name and image</p>
                                <p><span className="text-red-600 text-xl">*</span> means required </p>
                            </div>

                            <div className="w-full shadow-secondaryColor shadow-2xl">
                                <div className="card shrink-0 w-full">
                                    <form onSubmit={handleUpdateProfileButton} className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-base font-medium text-secondaryColor">User Name<span className="text-red-600">*</span></span>
                                            </label>
                                            <input name="userName" type="text" placeholder="Write your name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-base font-medium text-secondaryColor">Photo Url</span>
                                            </label>
                                            <input name="photoUrl" type="text" placeholder="Give your photo url here" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-base font-medium text-secondaryColor">Phone Number (Optional)</span>
                                            </label>
                                            <input name="phoneNumber" type="text" placeholder="Your mobile number" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-base font-medium text-secondaryColor">Address (Optional)</span>
                                            </label>
                                            <input name="address" type="text" placeholder="Your home address" className="input input-bordered" />
                                        </div>

                                        <div className="form-control mt-6">
                                            <button className="btn bg-primaryColor border-primaryColor text-xl hover:bg-lime-600">Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <img className="w-full" src={footerArt} alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateProfile;