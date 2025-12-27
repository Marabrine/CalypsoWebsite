import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact</h1>

        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-label">Phone</div>
            <div className="contact-value">
              <a href="tel:+14387787574">+1 438 778 7574</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-label">E-mail</div>
            <div className="contact-value">
              <a href="mailto:calypsomusicinstruments@hotmail.com">
                calypsomusicinstruments@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
