import { FaFacebook, FaGoogle } from "react-icons/fa";
import FindUs from "./FindUs";

const RightNavbar = () => {
    return (
        <div>
            <button className="w-full bg-white mb-2 btn flex gap-2 items-center"><FaGoogle />Login with google
            </button>
            <button className="w-full bg-white btn flex gap-2 items-center"><FaFacebook />Login with google
            </button>
            <h1 className="my-4">Find Us On</h1>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNavbar;