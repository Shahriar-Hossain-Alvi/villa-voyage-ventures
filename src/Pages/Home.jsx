import { Helmet } from "react-helmet-async";
import EstateCard from "./Estates/EstateCard";
import HomeBanner from "./HomeBanner/HomeBanner";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Home = () => {

    const allEstates = useLoaderData();

    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center mt-40">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <div>
            <Helmet>
                <title>Home | Villa Voyage Ventures</title>
            </Helmet>

            <Navbar></Navbar>

            {/* banner */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6 relative">
                <div className="lg:col-span-2 flex flex-col justify-center px-2 lg:px-0">
                    <h2 className="text-4xl font-semibold mb-6 text-secondaryColor">Welcome to Your Ultimate Hospitality Haven</h2>
                    <p className="text-lg font-medium text-secondaryColor">Discover a World of Comfort, Charm, and Unforgettable Experiences in Our Selection of Hotels, Motels, and Guesthouses. Book Your Stay Today!</p>
                </div>
                <div className="lg:col-span-3">
                    <HomeBanner></HomeBanner>
                </div>
            </div>


            {/* estate section */}
            <div className="my-16 lg:my-36">
                <div className="text-center mb-10">
                    <h2 className="font-playfairDisplay font-bold text-4xl mb-2">Our Offerings</h2>
                    <p className="text-lg font-medium">Check out some of our properties.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6">
                    {
                        allEstates.map(estate => <EstateCard key={estate.id} estate={estate}></EstateCard>)
                    }
                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Home;