import { FaHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const EstateCard = ({ estate }) => {

    const { id, image_link, segment_name, estate_title, location, short_description, status } = estate;

    return (
        <div>
            <div className="border border-base-300 shadow-xl p-4 rounded-2xl">
                {/* image */}
                <div className="relative">
                    <span>Featured</span>
                    <img className="h-56" src={image_link} alt="" />
                    <div className="absolute bottom-0 right-0 flex gap-4">
                        <button className="btn border-none hover:bg-transparent bg-transparent tooltip text-xl" data-tip="Add to favorite">
                            <FaHeart className="text-white " />
                        </button>
                        <button className="btn border-none hover:bg-transparent bg-transparent tooltip text-xl" data-tip="Add to compare">
                            <MdCompareArrows className="text-white" />
                        </button>
                    </div>
                </div>

                {/* body */}
                <div className="mt-4">
                    <p className="text-[#ff5a5f] mb-2">{segment_name}</p>
                    <h2 className="text-2xl font-bold mb-2">{estate_title}</h2>
                    <h4 className="flex items-center gap-3 font-medium text-lg">
                        <FaLocationDot />
                        <span>{location}</span>
                    </h4>
                    <p className="mb-2">{short_description}</p>
                    <div className="badge badge-error text-white badge-lg block">#{status}</div>
                    <Link to={`/estateCard/${id}`}>
                        <button className="btn w-full mt-5 bg-primaryColor font-playfairDisplay font-bold text-lg">View</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

EstateCard.propTypes = {
    estate: PropTypes.object
}

export default EstateCard;