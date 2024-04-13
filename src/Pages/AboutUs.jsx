/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";


const AboutUs = () => {

    return (
        <div>
            <Helmet>
                <title>About us | Villa Voyage Ventures</title>
            </Helmet>

            <Navbar></Navbar>
            <div className="container mx-auto mb-16 px-4 lg:px-0">
                <h1 className="text-4xl font-black text-center mb-10">About Us:</h1>

                <div className="mb-10">
                    <h2 className="text-3xl font-bold font-raleway mb-3">Connecting You with Unforgettable Stays</h2>

                    <p className="text-lg font-medium text-secondaryColor">Welcome to <span className="font-bold uppercase">Villa Voyage Ventures</span>, your one-stop shop for discovering exceptional hospitality experiences! We are passionate about connecting travelers with the perfect accommodation, whether you seek a luxurious hotel getaway, a charming bed and breakfast, or a cozy vacation rental.</p>
                </div>


                <div className="mb-10">
                    <h2 className="text-3xl font-bold font-raleway mb-3">Here's what sets us apart:</h2>
                    <div>
                        <ul className="space-y-2 list-disc list-inside ml-2">
                            <li className="text-lg font-medium text-secondaryColor"><span className="text-black font-bold">Diverse Selection: </span>Explore a curated portfolio of hotels, motels, guesthouses, vacation rentals, lodges, and resorts across various destinations.</li>

                            <li className="text-lg font-medium text-secondaryColor"><span className="text-black font-bold">Expert Advice: </span>Our team boasts extensive knowledge of the hospitality industry. We can help you navigate your options, considering your budget, travel style, and desired amenities.</li>

                            <li className="text-lg font-medium text-secondaryColor"><span className="text-black font-bold">Unbeatable Value: </span>We work closely with our partner properties to offer competitive rates and exclusive deals, ensuring you get the most value for your travel dollar.</li>

                            <li className="text-lg font-medium text-secondaryColor"><span className="text-black font-bold">Seamless Booking: </span>Our user-friendly platform makes booking a breeze. Search, compare, and reserve your dream stay in just a few clicks.</li>

                            <li className="text-lg font-medium text-secondaryColor"><span className="text-black font-bold">Exceptional Service: </span>We prioritize your satisfaction. Our dedicated team is here to assist you throughout your booking journey and answer any questions you may have.</li>

                        </ul>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold font-raleway mb-3">Our Mission:</h2>
                    <p className="text-lg font-medium text-secondaryColor">At <span className="font-bold uppercase">Villa Voyage Ventures</span>, we believe travel is a transformative experience. It's about creating lasting memories, exploring new cultures, and immersing yourself in different environments.  We strive to simplify your search process, ensuring you find the perfect accommodation to enhance your journey and make it truly unforgettable</p>
                </div>

                <div>

                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};


export default AboutUs;