import React, { useEffect,  } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phone: Yup.string()
        .matches(
          /^\+?[0-9]*$/,
          "Phone number must contain only digits and an optional '+'"
        )
        .optional(),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (!values.fullName || !values.email || !values.message) {
        toast.error("Please fill all required fields correctly.");
        return;
      }

      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("message", values.message);
      if (values.file) formData.append("file", values.file);

      try {
        const response = await fetch("https://formspree.io/f/mldbgoqn", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          toast.success("Email sent successfully!");
          resetForm();
        } else {
          toast.error("Failed to send email. Please try again.");
        }
      } catch (err) {
        toast.error("Something went wrong.");
      }
    },
  });

  // Email suggestion only triggered once onBlur
  const handleEmailBlur = (event) => {
    formik.handleBlur(event); // Mark the field as touched
  
    // Display toast only if the email field has a value
    if (formik.values.email) {
      toast.warn(`Did You Mean: ${formik.values.email}`);
    }
  };
  

  return (
    <section className="contact-area page-section scroll-content" id="contact">
      <ToastContainer />
      <div className="custom-container">
        <div className="contact-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-dollar-sign" /> contact
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Let's Work <span>Together!</span>
            </h1>
          </div>
          <h3 className="scroll-animation" data-aos="fade-up">
            muddassirali8089@gmail.com
          </h3>
          <p id="required-msg">* Marked fields are required to fill.</p>

          <form
            onSubmit={formik.handleSubmit}
            className="contact-form scroll-animation"
            data-aos="fade-up"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="input-group">
                  <label htmlFor="fullName">
                    Full Name <sup>*</sup>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your Full Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <div className="error-text">{formik.errors.fullName}</div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label htmlFor="email">
                    Email <sup>*</sup>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    onChange={formik.handleChange}
                    onBlur={handleEmailBlur} // Trigger onBlur here
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="error-text">{formik.errors.email}</div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label htmlFor="phone">
                    Phone <span>(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Your phone number"
                    value={formik.values.phone}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Allow only digits and optional leading +
                      if (/^\+?[0-9]*$/.test(value)) {
                        formik.setFieldValue("phone", value);
                      }
                    }}
                  />

                  {formik.touched.phone && formik.errors.phone && (
                    <div className="error-text">{formik.errors.phone}</div>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here ..."
                    onChange={formik.handleChange}
                    value={formik.values.message}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <div className="error-text">{formik.errors.message}</div>
                  )}
                </div>
              </div>
              {/* <div className="col-md-12">
                <div className="input-group upload-attachment">
                  <div>
                    <label htmlFor="file">
                      <i className="las la-cloud-upload-alt" /> Add an
                      attachment
                      <input
                        id="file"
                        name="file"
                        type="file"
                        onChange={(event) =>
                          formik.setFieldValue(
                            "file",
                            event.currentTarget.files[0]
                          )
                        }
                      />
                    </label>
                  </div>
                </div>
              </div> */}
              <div className="col-md-12">
                <div className="input-group submit-btn-wrap">
                  <button className="theme-btn" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Add error message styling */}
      <style>{`
        .error-text {
          color: red;
          font-size: 0.85rem;
          margin-top: 4px;
        }
      `}</style>
    </section>
  );
};

export default ContactUs;
