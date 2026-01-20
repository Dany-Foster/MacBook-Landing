import { footerLinks } from "../data/Factice";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 000800 040 1966. <img src="/logo.svg" alt="Apple logo" />
        </p>
      </div>

      <hr />
      <div className="links">
        <p>Coyright @ 2024 Apple Inc. All rights reserved. </p>
        <ul>
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a href={link.link}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
