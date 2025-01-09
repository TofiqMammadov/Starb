// Components
import Copyright from "../components/Footer/Copyright";
// FooterLinks
import FooterLinks from "../components/Footer/FooterLinks";
import FooterLinksAccordion from "../components/Footer/FooterLinksAccardion";
import FooterSecondaryLinks from "../components/Footer/FooterSecondaryLinks";
import FooterSocial from "../components/Footer/FooterSocial";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <FooterLinks />
        <FooterLinksAccordion />
        <FooterSocial />
        <FooterSecondaryLinks />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
