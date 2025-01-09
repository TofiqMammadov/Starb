import { Link } from "react-router-dom";

const FooterSecondaryLinks = () => {
  return (
    <div className="footer-secondary-links">
      <ul className="footer-secondary-list">
        <li className="footer-secondary-link">
          <Link
            target={"_blank"}
            to={"https://www.starbucks.com/terms/privacy-policy/"}
          >
            Privacy Notice
          </Link>
        </li>
        <li className="footer-secondary-link">
          <Link
            target={"_blank"}
            to={"https://www.starbucks.com/terms/starbucks-terms-of-use/"}
          >
            Terms of Use
          </Link>
        </li>
        <li className="footer-secondary-link">
          <Link
            target={"_blank"}
            to={"https://www.starbucks.com/personal-information"}
          >
            Do Not Share My Personal Information
          </Link>
        </li>
        <li className="footer-secondary-link">
          <Link
            target={"_blank"}
            to={
              "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70076.pdf"
            }
          >
            CA Supply Chain Act
          </Link>
        </li>
        <li className="footer-secondary-link">
          <Link target={"_blank"} to={"/"}>
            Cookie Preferences
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterSecondaryLinks;
