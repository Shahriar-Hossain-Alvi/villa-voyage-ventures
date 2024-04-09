import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useLoaderData } from "react-router-dom";

const EstateDetails = () => {
    const allEstates = useLoaderData();

    const { id } = useParams();
    const idInt = parseInt(id);

    const estate = allEstates.find(estate=>parseInt(estate.id) === idInt);
    
    const {estate_title, image_link, image_2, image_3} = estate;

    return (
        <div>
            <Navbar></Navbar>

            <div className="mt-8 text-center">
                <h3 className="text-5xl font-bold font-playfairDisplay">{estate_title}</h3>

                
                <div className="grid grid-cols-3 mt-10 gap-6">
                    <div className="col-span-2">
                        <img className="w-full h-[450px]" src={image_link} alt="" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <img className="w-full h-[217px]" src={image_2} alt="" />
                        <img className="w-full h-[217px]" src={image_3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;