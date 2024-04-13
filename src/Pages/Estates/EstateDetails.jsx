import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useLoaderData } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { RiPrinterFill } from "react-icons/ri";
import { MdOutlineCompareArrows } from "react-icons/md";
import Footer from "../Shared/Footer";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { saveFavoriteList } from "../../Utility/LocalStorage";


const EstateDetails = () => {
    //load estate data
    const allEstates = useLoaderData();

    //get dynamic id as integer
    const { id } = useParams();
    const idInt = parseInt(id);

    //state for favorite button
    const [clickedFavoriteButton, setClickedFavoriteButton] = useState(false);

    //get data for current id
    const estate = allEstates.find(estate => parseInt(estate.id) === idInt);

    const { estate_title, image_link, image_2, image_3, detailed_description, segment_name, status, price, area, location, facilities } = estate;

    //handle favorite button
    const handleFavoriteButton = () => {
        if (clickedFavoriteButton === true) {
            toast.error('Already added in the favorite list')
        }
        else{
            saveFavoriteList(idInt);
            setClickedFavoriteButton(true);
            toast.success('Added to your favorite list')
        }
    }

    return (
        <div>
            <Helmet>
                <title>{estate_title} | Villa Voyage Ventures</title>
            </Helmet>

            <Navbar></Navbar>

            <ToastContainer />
            <div className="mt-8 container mx-auto px-2 lg:px-0">
                <h3 className="text-3xl md:text-5xl lg:text-5xl text-center font-bold font-raleway">{estate_title}</h3>

                {/* images */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
                    <div className="lg:col-span-2">
                        <img className="w-full h-[450px]" src={image_link} alt="" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <img className=" md:w-full lg:w-full md:h-[217px] lg:h-[217px]" src={image_2} alt="" />
                        <img className=" md:w-full lg:w-full md:h-[217px] lg:h-[217px]" src={image_3} alt="" />
                    </div>
                </div>


                {/* details */}
                <div className="my-8 px-2 md:px-4 lg:px-0">
                    {/* description top */}
                    <div className="flex flex-col items-center lg:flex-row lg:justify-between border-b-2 pb-6 border-dashed space-y-2 md:space-y-3 lg:space-y-0">
                        <div>
                            <h2 className="font-semibold text-xl text-[#1cb2ff] mb-2">Property ID: {estate.id} </h2>
                            <p className="badge badge-lg text-white bg-[#1cb2ff]">{segment_name}</p>
                        </div>
                        <div className="flex gap-1 md:gap-3 lg:gap-6">
                            <button className="btn bg-[#1cb2ff] text-white hover:bg-secondaryColor  tooltip" data-tip="Share">
                                <FaShareAlt />
                            </button>
                            <button onClick={handleFavoriteButton} className="btn bg-[#1cb2ff] text-white hover:bg-secondaryColor tooltip" data-tip="Add to favorite">
                                <MdFavorite />
                            </button>
                            <button className="btn bg-[#1cb2ff] text-white hover:bg-secondaryColor  tooltip" data-tip="Print">
                                <RiPrinterFill />
                            </button>
                            <button className="btn bg-[#1cb2ff] text-white hover:bg-secondaryColor text-lg  tooltip" data-tip="Add to compare">
                                <MdOutlineCompareArrows />
                            </button>
                        </div>
                    </div>


                    <div className="mt-10 grid lg:grid-cols-3 gap-6">
                        {/* description details */}
                        <div className="lg:col-span-2">
                            <h2 className="text-[#1cb2ff] font-bold pb-3 border-b mb-3">Description:</h2>
                            <p className="pt-4 leading-7">{detailed_description}</p>
                        </div>

                        {/* additional information */}
                        <div className="border rounded-xl p-4 bg-[#F7F7F7] space-y-3 flex flex-col justify-center">
                            <h2 className="text-lg font-medium text-secondaryColor">Status: <span className="font-bold text-secondaryColor capitalize">{status}</span></h2>

                            <h2 className="border-y-2 border-dotted py-2 text-lg font-medium text-secondaryColor">Price: <span className="font-bold text-secondaryColor capitalize">{price}</span></h2>

                            <h2 className="text-lg font-medium text-secondaryColor">Area: <span className="font-bold text-secondaryColor capitalize">{area}</span></h2>

                            <h2 className="border-y-2 border-dotted py-2 text-lg font-medium text-secondaryColor">Location: <span className="font-bold text-secondaryColor capitalize">{location}</span></h2>

                            <div className="flex flex-wrap gap-2 items-center">
                                <h2 className="text-lg font-medium text-secondaryColor">Facilities:</h2>
                                {
                                    facilities.map((item, index) => <>
                                        <button key={index} className="btn btn-sm font-bold text-white bg-[#1cb2ff]">{item}</button>
                                    </>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default EstateDetails;