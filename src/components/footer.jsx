import "../CSS/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>&copy; {currentYear} Riket Interior. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
