import { Helmet } from "react-helmet-async";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import { useEffect, useState } from "react";
import { getStoredFavoriteList } from "../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import FavoritesList from "./FavoritesList";

const Favorites = () => {
    //load estate dta
    const allEstates = useLoaderData();

    // store read book data in the state
    const [showFavoriteEstates, setShowFavoriteEstates] = useState([]);

    //get data from loader by matching stored Ids
    useEffect(() => {
        const storedFavoriteListIds = getStoredFavoriteList();

        if (allEstates.length > 0) {
            const saveFavoriteEstates = allEstates.filter(estate => storedFavoriteListIds.includes(estate.id));
            setShowFavoriteEstates(saveFavoriteEstates);
        }
    }, [allEstates])

    console.log(showFavoriteEstates);

    return (
        <div>
            <Helmet>
                <title>Favorites | Villa Voyage Ventures</title>
            </Helmet>


            <Navbar></Navbar>

            <div className="container space-y-4 mx-auto my-10">
                {
                    showFavoriteEstates.length <= 0 ?
                        <>
                            <h2 className="text-4xl font-raleway text-secondaryColor font-medium text-center">Your favorite list items will appear here</h2>
                        </>
                        :
                        showFavoriteEstates.map(singleEstate => <FavoritesList key={singleEstate.id} singleEstate={singleEstate}></FavoritesList>)
                }
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Favorites;