import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";

const UserProfile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <Helmet>
                <title>Profile: {user.displayName} | Villa Voyage Ventures</title>
            </Helmet>

            <Navbar></Navbar>

            <div className="grid grid-cols-3 mt-10 items-center gap-6">
                {/* user image */}
                <div className="rounded-xl border p-3">
                    <img className="rounded-xl w-full" src={user.photoURL} alt="" />
                </div>

                {/* user info */}
                <div className="col-span-2 border">
                    <div className="overflow-x-auto">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>Name</td>
                                        <td>{user.displayName}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>Email Address</td>
                                        <td>{user.email}</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <td>Verified</td>
                                        <td>
                                            {
                                                user.emailVerified ? <RiVerifiedBadgeFill className="text-blue-500" />
                                                    : <>
                                                        <ImCross className="text-red-500" />
                                                    </>
                                            }
                                        </td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr>
                                        <td>Anonymous</td>
                                        <td>
                                            {
                                                user.isAnonymous ? <RiVerifiedBadgeFill className="text-blue-500" />
                                                    : <>
                                                        <ImCross className="text-red-500" />
                                                    </>
                                            }
                                        </td>
                                    </tr>
                                    {/* row 5 */}
                                    <tr>
                                        <td>Profile Created</td>
                                        <td>{user.metadata.creationTime}</td>
                                    </tr>
                                    {/* row 5 */}
                                    <tr>
                                        <td>Last Signed in</td>
                                        <td>{user.metadata.lastSignInTime
                                        }</td>
                                    </tr>
                                    {/* row 6 */}
                                    <tr>
                                        <td>Phone Number</td>
                                        <td>
                                            {user.phoneNumber===null ? "Unavailable" : user.phoneNumber
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;