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
              <Link to={"/menu"}>Our Company</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Our Coffee</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Stories and News</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Starbucks Archive</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Investor Relations</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Customer Service</Link>
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
              <Link to={"/menu"}>Culture and Values</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Inclusion, Diversity, and Equity</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>College Achievement Plan</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Alumni Community</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>U.S. Careers</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>International Careers</Link>
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
              <Link to={"/menu"}>People</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Planet</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>
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
              <Link to={"/menu"}>Landlord Support Center</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Suppliers</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Corporate Gift Card Sales</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Office and Foodservice Coffee</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Investor Relations</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Customer Service</Link>
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
              <Link to={"/menu"}>Order on the App</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Order on the Web</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Delivery</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Order and Pickup Options </Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Explore and Find Coffee for Home</Link>
            </li>
            <li className="footer-link">
              <Link to={"/menu"}>Customer Service</Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FooterLinksAccordion;
