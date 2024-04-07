import {Outlet} from "react-router-dom";
const Root = () => {
    return (
        <div className="font-dosis">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;