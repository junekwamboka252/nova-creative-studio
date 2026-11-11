function Footer() {
  return (
    <footer className="footer" id="contact">
      <div>
        <h2>Have a project in mind?</h2>
        <p>Let's create something meaningful together.</p>
      </div>

      <a href="mailto:hello@novacreative.studio">
        Get in touch →
      </a>

      <p className="copyright">
        © {new Date().getFullYear()} NOVA Creative Studio. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;