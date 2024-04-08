import HomeBanner from "./HomeBanner/HomeBanner";
import Navbar from "./Shared/Navbar";

const Home = () => {



    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-5 gap-6 mt-6">
                <div className="col-span-2 flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold mb-6 text-secondaryColor">Welcome to Your Ultimate Hospitality Haven</h2>
                    <p className="text-lg font-medium text-secondaryColor">Discover a World of Comfort, Charm, and Unforgettable Experiences in Our Selection of Hotels, Motels, and Guesthouses. Book Your Stay Today!</p>
                </div>
                <div className="col-span-3">
                    <HomeBanner></HomeBanner>
                </div>
            </div>
        </div>
    );
};

export default Home;