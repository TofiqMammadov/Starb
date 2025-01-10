import { Link } from "react-router-dom";
// React Icons
import { FaSpotify } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FooterSocial = () => {
  return (
    <div className="footer-social">
      <ul className="footer-social-list">
        <li className="footer-social-link">
          <Link
            target={"_blank"}
            to={"https://open.spotify.com/user/starbucks"}
          >
            <FaSpotify />
          </Link>
        </li>
        <li className="footer-social-link">
          <Link target={"_blank"} to={"https://www.facebook.com/Starbucks/"}>
            <FaFacebook />
          </Link>
        </li>
        <li className="footer-social-link">
          <Link target={"_blank"} to={"https://www.pinterest.com/starbucks/"}>
            <FaPinterest />
          </Link>
        </li>
        <li className="footer-social-link">
          <Link target={"_blank"} to={"https://www.instagram.com/starbucks"}>
            <FaInstagram />
          </Link>
        </li>
        <li className="footer-social-link">
          <Link target={"_blank"} to={"https://www.youtube.com/starbucks"}>
            <FaYoutube />
          </Link>
        </li>
        <li className="footer-social-link">
          <Link target={"_blank"} to={"https://x.com/starbucks/"}>
            <FaTwitter />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
