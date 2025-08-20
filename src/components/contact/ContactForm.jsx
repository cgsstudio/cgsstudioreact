import { useState } from "react";
import { useForm } from "react-hook-form";
import { LazyLoadImage } from "react-lazy-load-image-component";
import emailjs from "@emailjs/browser";
import ContactThumb from "../../assets/images/contact/contact-thumb.png";
import Star2Img from "../../assets/images/v1/star2.png";
import Field from "../common/Field";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    const serviceID = "service_4hzipjm";
    const templateID = "template_vnt9ibw";
    const userID = "9QWvlBpES51DX7O1X";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setIsSubmitted(true);
        reset();
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="section aximo-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="aximo-section-title">
              <h2>
                <span className="aximo-title-animation">
                  Let’s get in touch
                  <span className="aximo-title-icon">
                    <img className="shape-color" src={Star2Img} alt="Star" />
                  </span>
                </span>
              </h2>
              <p>
                Fantastic! We can’t wait to connect and kickstart something
                unique. Feel free to give us a call for any questions or
                inquiries.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <div className="aximo-contact-thumb">
              <LazyLoadImage
                src={ContactThumb}
                width={500}
                height={635}
                alt="Contact Thumb"
                effect="blur"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="aximo-main-form">
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="aximo-main-field">
                  <Field label="Your Name" error={errors.name}>
                    <input
                      {...register("name", { required: "Name is required." })}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <Field label="Enter email address" error={errors.email}>
                    <input
                      {...register("email", { required: "Email is required." })}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your email address"
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <Field label="Enter Phone Number" error={errors.phone}>
                    <input
                      {...register("phone")}
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone Number"
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <textarea
                    {...register("message", {
                      required: "Message is required.",
                    })}
                    name="message"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <button id="aximo-main-btn" type="submit">
                  Send Message
                </button>
              </form>

              {isSubmitted && (
                <div className="alert-box">Thank you for your message!</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
