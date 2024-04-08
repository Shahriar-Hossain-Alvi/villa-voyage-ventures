import {Outlet} from "react-router-dom";
const Root = () => {
    return (
        <div className="font-dosis mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;