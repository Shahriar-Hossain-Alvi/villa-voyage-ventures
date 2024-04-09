import EstateCard from "./Estates/EstateCard";
import HomeBanner from "./HomeBanner/HomeBanner";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const allEstates = useLoaderData();

    return (

        <div>
            <Navbar></Navbar>

            {/* banner */}
            <div className="grid grid-cols-5 gap-6 mt-6">
                <div className="col-span-2 flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold mb-6 text-secondaryColor">Welcome to Your Ultimate Hospitality Haven</h2>
                    <p className="text-lg font-medium text-secondaryColor">Discover a World of Comfort, Charm, and Unforgettable Experiences in Our Selection of Hotels, Motels, and Guesthouses. Book Your Stay Today!</p>
                </div>
                <div className="col-span-3">
                    <HomeBanner></HomeBanner>
                </div>
            </div>


            {/* estate section */}
            <div className="my-36">
                <div className="text-center my-6">
                    <h2 className="font-playfairDisplay font-bold text-4xl mb-2">Our Offerrings</h2>
                    <p className="text-lg font-medium">Check out some of our properties.</p>
                </div>
                <div className="grid grid-cols-3 gap-6">
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