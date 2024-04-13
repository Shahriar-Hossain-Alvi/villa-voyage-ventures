import {Outlet} from "react-router-dom";
const Root = () => {
    return (
        <div className="font-dosis overflow-x-hidden">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;