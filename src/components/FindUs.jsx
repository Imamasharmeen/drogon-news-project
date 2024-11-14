import { FaFacebook, FaInstagram, FaTwitter, } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <div className="join join-vertical w-full gap-3">
        <button className="btn join-item"><FaFacebook />Facebook</button>
        <button className="btn join-item"><FaTwitter />Twitter</button>
        <button className="btn join-item"><FaInstagram />Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
