import { useState } from "react";
import { useForm } from "react-hook-form";
import Field from "../../common/Field";
import ArrowRight3Img from "../../../assets/images/icon/arrow-right3.svg";
import emailjs from "@emailjs/browser";

function MessageForm() {
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
        setIsSubmitted(true); // Show alert box
        reset(); // Reset form fields

        // Hide the alert box after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="message-form-container">
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="aximo-form-field">
          <Field error={errors.name}>
            <input
              {...register("name", { required: "Name is required." })}
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />
          </Field>
        </div>
        <div className="aximo-form-field">
          <Field error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
            />
          </Field>
        </div>
        <div className="aximo-form-field">
          <input
            {...register("phone")}
            type="text"
            name="phone"
            id="phone"
            placeholder="Your phone number"
          />
        </div>
        <div className="aximo-form-field">
          <textarea
            {...register("message", { required: "Message is required." })}
            name="message"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button id="aximo-submit-btn" type="submit">
          Send message{" "}
          <span>
            <img src={ArrowRight3Img} alt="ArrowRight3Img" />
          </span>
        </button>
      </form>

      {isSubmitted && (
        <div className="alert-box">Thank you for your message!</div>
      )}
    </div>
  );
}

export default MessageForm;
