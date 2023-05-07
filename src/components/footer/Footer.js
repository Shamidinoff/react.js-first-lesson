import footerObj from "./Footer.module.css";

function Footer() {
  console.log(footerObj.footer);
  return (
    <footer className={footerObj.footer}>
      <h1>Footer</h1>
    </footer>
  );
}

export default Footer;
