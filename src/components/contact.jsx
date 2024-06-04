import { useEffect } from "react";
import Swal from "sweetalert2";
import "../CSS/Contact.css";

const ContactForm = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    // Validate form fields
    if (!name || !email || !phone || !message) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Please fill out all fields",
      });
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Please enter a valid email address",
      });
      return;
    }

    // Validate phone number (only digits)
    const phonePattern = /^\d+$/;
    if (!phonePattern.test(phone)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Please enter a valid phone number",
      });
      return;
    }

    // Prepare email body
    const emailBody = `
      Name: ${name}<br/>
      Email: ${email}<br/>
      Phone: ${phone}<br/>
      Message: ${message}
    `;

    // Send email using SMTP.js
    window.Email.send({
      SecureToken: "cfbb28d4-dfca-4c74-baf8-3ac35a7efe92",
      To: "francisekah5@gmail.com",
      From: "francisekah5@gmail.com",
      Subject: "Contact Form Submission",
      Body: emailBody,
    }).then((message) => {
      if (message === "OK") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Message sent successfully!",
        }).then(() => {
          form.reset(); // Reset the form here
          const inputs = document.querySelectorAll(".input");
          inputs.forEach((input) => {
            const parent = input.parentNode;
            parent.classList.remove("focus"); // Remove focus class
          });
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send message. Please try again later.",
        });
      }
    });
  };

  return (
    <div className="container">
      <span className="big-circle"></span>
      <img src="shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Have a vision for your space? Let's bring it to life. Contact us
            today to discuss your interior design needs!
          </p>
          <div className="info">
            <div className="information">
              <img src="location.png" className="icon first" alt="" />
              <p>8 Oyejide Street, Lagos, Nigeria</p>
            </div>
            <div className="information">
              <img src="email.png" className="icon" alt="" />
              <p>riket_interior@gmail.com</p>
            </div>
            <div className="information">
              <img src="phone.png" className="icon" alt="" />
              <p>
                <a href="tel:+123456789" className="tel">
                  +2349014902497
                </a>
              </p>
            </div>
          </div>
          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              {/* <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a> */}
              <a
                href="https://wa.me/2347065323936?text=Hello%2C%20I%20would%20like%20to%20discuss%20interior%20decorating%20services
"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/riket_interiors?igsh=aDZxcGIwY2tlN3pn">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" required />
              <label>Name</label>
              <span>Name</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" required />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" required />
              <label>Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" required></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
