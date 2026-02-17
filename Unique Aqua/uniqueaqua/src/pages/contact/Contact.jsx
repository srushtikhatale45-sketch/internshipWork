import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact number must be 10 digits";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        contact: "",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    /* Background gradient updated to blue/sky theme */
    <div className="min-h-screen bg-gradient-to-br pt-10 mt-20 from-sky-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section with Sky to Blue Gradient */}
          <div className="bg-gradient-to-r from-sky-600 to-blue-500 px-8 py-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Contact Us</h2>
            <p className="text-sky-50 text-lg">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          {/* Form Section */}
          <div className="px-8 py-10">
            {isSubmitted && (
              <div className="mb-6 p-4 bg-sky-50 border border-sky-200 rounded-lg">
                <p className="text-sky-700 text-center font-medium">
                  <span className="inline-block mr-2">✓</span>
                  Thank you for contacting us! We'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Field */}
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name <span className="text-sky-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition duration-200`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email ID <span className="text-sky-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition duration-200`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Contact Number Field */}
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Contact Number <span className="text-sky-600">*</span>
                </label>
                <input
                  type="tel"
                  id="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.contact ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition duration-200`}
                  placeholder="1234567890"
                  maxLength="10"
                />
                {errors.contact && (
                  <p className="mt-2 text-sm text-red-600">{errors.contact}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message <span className="text-sky-600">*</span>
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition duration-200 resize-none`}
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Submit Button with Sky to Blue Gradient */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-600 to-blue-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-sky-700 hover:to-blue-600 focus:ring-4 focus:ring-sky-200 transition duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Additional Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-3 rounded-lg hover:bg-sky-50 transition duration-200">
                  <div className="text-sky-600 text-2xl mb-2">📞</div>
                  <p className="text-sm text-gray-600 font-medium">
                    +91-253-6699936,6454294
                  </p>
                  <p className="text-xs text-sky-600">Call us anytime</p>
                </div>
                <div className="p-3 rounded-lg hover:bg-sky-50 transition duration-200">
                  <div className="text-sky-600 text-2xl mb-2">✉️</div>
                  <p className="text-sm text-gray-600 font-medium">
                    amitrudre@gmail.com
                  </p>
                  <p className="text-xs text-sky-600">Email us 24/7</p>
                </div>
                <div className="p-3 rounded-lg hover:bg-sky-50 transition duration-200">
                  <div className="text-sky-600 text-2xl mb-2">📍</div>
                  <p className="text-sm text-gray-600 font-medium">
                    4, Sai Shree Industrial Estate, Plot No. 8, S.No. 82/1, MIDC
                    Area, Ambad, Nashik 422 010 (Maharashtra-INDIA)
                  </p>
                  <p className="text-xs text-sky-600">Visit our office</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex justify-center space-x-4">
              <a
                href="#"
                className="text-sky-600 hover:text-blue-500 transition duration-200"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-sky-600 hover:text-blue-500 transition duration-200"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-sky-600 hover:text-blue-500 transition duration-200"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
