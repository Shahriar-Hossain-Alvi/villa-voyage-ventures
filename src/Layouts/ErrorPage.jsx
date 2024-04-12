/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import errorImage from "../assets/images/errorImage.png";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-6">
             <Helmet>
                <title>Error Page | Villa Voyage Ventures</title>
            </Helmet>

            <h2 className="text-9xl font-black font-playfairDisplay text-red-600">404</h2>
            
            <img src={errorImage} alt="" />

            <p className="font-medium text-lg max-w-lg text-center  animate__shakeX">The page you are looking is not found. Please make sure you've entered the right url or check your internet connection</p>

            <span className="font-medium text-4xl">Click the button below to go back to homepage</span>
            <Link>
                <button className="btn btn-error text-white btn-lg">Home</button></Link>
        </div>
    );
};

export default ErrorPage;