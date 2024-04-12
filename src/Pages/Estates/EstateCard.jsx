import { FaHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const EstateCard = ({ estate }) => {

    const { id, image_link, segment_name, estate_title, location, short_description, status } = estate;

    return (
        <div className="border border-base-300 lg:shadow-xl p-4 lg:rounded-2xl">
            {/* image */}
            <div className="relative">
                <span className="bg-primaryColor text-white px-4 absolute -top-7 -left-3">Featured</span>
                <img className="h-56 w-full" src={image_link} alt="" />
                <div className="absolute bottom-2 left-2 lg:right-2  flex gap-4">
                    <button className="btn btn-sm bg-transparent tooltip text-white hover:text-primaryColor hover:bg-secondaryColor" data-tip="Add to favorite">
                        <FaHeart />
                    </button>
                    <button className="btn btn-sm bg-transparent tooltip text-white hover:text-primaryColor hover:bg-secondaryColor" data-tip="Add to compare">
                        <MdCompareArrows />
                    </button>
                </div>
            </div>

            {/* body */}
            <div className="mt-4">
                <p className="text-[#ff5a5f] mb-2 flex justify-between">{segment_name}</p>
                <h2 className="text-2xl font-bold mb-2">{estate_title}</h2>
                <h4 className="flex items-center gap-3 font-medium text-lg">
                    <FaLocationDot />
                    <span>{location}</span>
                </h4>
                <p className="mb-2">{short_description}</p>
                <div className="badge badge-error text-white badge-lg block">#{status}</div>
                <Link to={`/estateCard/${id}`}>
                    <button className="btn w-full mt-5 bg-primaryColor text-white font-playfairDisplay font-bold text-lg">View Property</button>
                </Link>
            </div>
        </div>
    );
};

EstateCard.propTypes = {
    estate: PropTypes.object
}

export default EstateCard;