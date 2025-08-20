import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import Button from "@/components/ui/button";
import emailjs from "@emailjs/browser"; // ✅ added

const initialData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  subService: "",
  file: null,
  budget: "",
  timeline: "",
  brief: "",
};

const services = {
  "Website Development": ["HTML/CSS", "Webflow", "WordPress", "Shopify", "React.js"],
  "Graphics Design": ["Logo Design", "Flyer Design", "Poster Design"],
  "UI/UX Design": [],
  "Digital Marketing": ["SEO", "Social Media Marketing"],
  "Content Writing": [],
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "name") {
      const onlyLetters = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: onlyLetters }));
    } else if (name === "phone") {
      const onlyDigits = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: onlyDigits }));
    } else if (name === "email") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
    }
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name) newErrors.name = "Required";
      if (!formData.email) {
        newErrors.email = "Required";
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
      if (!formData.phone) newErrors.phone = "Required";
    } else if (step === 2) {
      if (!formData.service) newErrors.service = "Required";
      if (services[formData.service]?.length && !formData.subService) newErrors.subService = "Required";
    } else if (step === 3) {
      if (!formData.brief) newErrors.brief = "Required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => validateStep() && setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const reset = () => {
    setFormData(initialData);
    setStep(1);
    setIsOpen(false);
    setErrors({});
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      subService: formData.subService,
      budget: formData.budget,
      timeline: formData.timeline,
      brief: formData.brief,
    };

    try {
      const result = await emailjs.send(
        "service_4hzipjm",
        "template_1rp7t5c",
        templateParams,
        "9QWvlBpES51DX7O1X"
      );
      console.log("Email successfully sent!", result.status, result.text);
      setStep("done");
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong while sending. Please try again.");
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const html = document.documentElement;
    html.style.overflow = "";
    html.style.paddingRight = "";
    const observer = new MutationObserver(() => {
      if (html.style.overflow === "hidden") html.style.overflow = "";
      if (html.style.paddingRight) html.style.paddingRight = "";
    });
    observer.observe(html, { attributes: true, attributeFilter: ["style"] });
    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <>
      <div className="position-fixed bottom-0 start-0 m-4 z-3">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-circle chat-btn-main p-3 border-0"
        >
          💬
        </Button>
      </div>

      <Dialog open={isOpen} onClose={reset} className="position-fixed top-0 start-0 w-100 h-100 z-3">
        <div className="d-flex align-items-end justify-content-start w-100 h-100">
          <Dialog.Panel className="bg-white shadow-lg rounded-top w-100" style={{ maxWidth: "400px", marginLeft: "1rem", marginBottom: "1rem" }}>
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
              <h5 className="mb-0">Let’s Talk Project</h5>
              <X style={{ cursor: 'pointer' }} onClick={reset} />
            </div>

            <div className="p-3 overflow-auto mainchatform" style={{ maxHeight: "60vh" }}>
              {step === 1 && (
                <>
                  <div className="mb-2">
                    <label>Name</label>
                    <input name="name" className="form-control" onChange={handleChange} value={formData.name} />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                  </div>
                  <div className="mb-2">
                    <label>Email</label>
                    <input name="email" type="email" className="form-control" onChange={handleChange} value={formData.email} />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                  </div>
                  <div className="mb-2">
                    <label>Phone</label>
                    <input name="phone" type="tel" className="form-control" onChange={handleChange} value={formData.phone} />
                    {errors.phone && <div className="text-danger">{errors.phone}</div>}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="mb-2">
                    <label>Service</label>
                    <select name="service" className="form-control" onChange={handleChange} value={formData.service}>
                      <option value="">Select</option>
                      {Object.keys(services).map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <div className="text-danger">{errors.service}</div>}
                  </div>

                  {services[formData.service]?.length > 0 && (
                    <div className="mb-2">
                      <label>Sub-Service</label>
                      <select name="subService" className="form-control" onChange={handleChange} value={formData.subService}>
                        <option value="">Select</option>
                        {services[formData.service].map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                      {errors.subService && <div className="text-danger">{errors.subService}</div>}
                    </div>
                  )}

                  <div className="mb-2">
                    <label>Budget ($)</label>
                    <input name="budget" type="number" className="form-control" onChange={handleChange} value={formData.budget} />
                  </div>
                  <div className="mb-2">
                    <label>Timeline</label>
                    <input name="timeline" className="form-control" onChange={handleChange} value={formData.timeline} />
                  </div>
                </>
              )}

              {step === 3 && (
                <div className="mb-2">
                  <label>Project Brief</label>
                  <textarea
                    name="brief"
                    rows="4"
                    className="form-control"
                    placeholder="Tell us about your project..."
                    onChange={handleChange}
                    value={formData.brief}
                  />
                  {errors.brief && <div className="text-danger">{errors.brief}</div>}
                </div>
              )}

              {step === "done" && (
                <div className="text-center text-success fw-bold">
                  🎉 Thank You for Your Submission!
                  <p className="chatcontent">We've received your request and truly appreciate you reaching out. Our team will review the details and get back to you shortly.</p>  
                </div>
              )}
            </div>

            {step !== "done" && (
              <div className="p-3 border-top d-flex justify-content-between chatbtn">
                {step > 1 && <Button className="btn btn-outline-secondary backbtn" onClick={handleBack}>Back</Button>}
                {step < 3 && <Button onClick={handleNext}>Next</Button>}
                {step === 3 && <Button onClick={handleSubmit}>Submit</Button>}
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
