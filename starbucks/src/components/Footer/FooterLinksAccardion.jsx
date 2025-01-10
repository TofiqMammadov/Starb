import { Link } from "react-router-dom";
// MUI Accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FooterLinksAccordion(props) {
  return (
    <div className="footer-links-accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>About Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="footer-list-about-us">
            <li className="footer-link">
              <Link to={"https://www.starbucks.com/about-us/"}>Our Company</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://www.starbucks.com/coffee/"}>Our Coffee</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://about.starbucks.com/"}>About Starbucks</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://archive.starbucks.com/"}>Starbucks Archive</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://investor.starbucks.com/ir-home/default.aspx"}>Investor Relations</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://customerservice.starbucks.com/sbux"}>Customer Service</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://www.starbucks.com/contact/"}>Contact us</Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Careers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="footer-list-career">
            <li className="footer-link">
              <Link to={"https://careers.starbucks.com/culture/"}>Culture and Values</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://about.starbucks.com/inclusion-diversity-belonging/"}>Inclusion, Diversity, and Equity</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://careers.starbucks.com/benefits/education/"}>College Achievement Plan</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://alumni.starbucks.com/login/"}>Alumni Community</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://careers.starbucks.com/"}>U.S. Careers</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://careers.starbucks.com/discover-opportunities/international-careers/"}>International Careers</Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Social Impact</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="footer-list-social-impact">
            <li className="footer-link-career">
              <Link to={"https://about.starbucks.com/communities/"}>Communities</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://about.starbucks.com/the-starbucks-foundation/"}>Starbucks Foundation</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://about.starbucks.com/sustainability/"}>Sustainability</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://www.starbucks.com/responsibility/reporting-hub/"}>
                Environmental and Social Impact Reporting
              </Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>For Business Partners</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="footer-list-business-partners">
            <li className="footer-link">
              <Link to={"https://www.starbucks.com/business/landlord-faq/"}>Landlord Support Center</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://www.starbucks.com/business/suppliers/"}>Suppliers</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://www.starbuckscardb2b.com/s/"} target={"_blank"}>Corporate Gift Card Sales</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://www.nestlecoffeepartnerssl.com/our-brands/we-proudly-serve-starbucks"}>Office and Foodservice Coffee</Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Order and Pickup</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="footer-list-order-pickup">
            <li className="footer-link">
              <Link to={"https://www.starbucks.com/rewards/mobile-apps/"}>Order on the App</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"} target={"_top"}>Order on the Web</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://www.starbucks.com/stores-and-ordering/delivery/"} target={"_blank"}>Delivery</Link>
            </li>
            <li className="footer-link">
              <Link to={"https://www.starbucks.com/stores-and-ordering/"}>Order and Pickup Options </Link>
            </li>
            <li className="footer-link">
              <Link to={"https://athome.starbucks.com/?utm_source=starbucks.com&utm_medium=referral&utm_campaign=footer"} target={"_blank"}>Explore and Find Coffee for Home</Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FooterLinksAccordion;
