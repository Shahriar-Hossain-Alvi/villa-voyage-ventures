import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        {
            user && <li><NavLink to="/updateprofile">Update Profile</NavLink></li>
        }
        <li><NavLink to="/userprofile">User Profile</NavLink></li>
        <li><NavLink to="/aboutUs">About us</NavLink></li>
    </>

    return (
        <div>
            <div id="menuBar" className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52 bg-primaryColor">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Villa Voyage Ventures</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex gap-1 items-center">
                                <div className="tooltip tooltip-bottom" data-tip={
                                    user.displayName ? user.displayName : 'Please update your profile to see user name'
                                }>
                                    <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
                                </div>
                                <button onClick={handleLogOut} className="btn text-lg bg-secondaryColor text-primaryColor border-secondaryColor hover:bg-primaryColor hover:border-secondaryColor hover:text-white">Logout</button>
                            </div>
                            :
                            <Link to="/login">
                                <button className="btn text-lg bg-secondaryColor text-primaryColor border-secondaryColor hover:bg-primaryColor hover:border-secondaryColor hover:text-white">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;