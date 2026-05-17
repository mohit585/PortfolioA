import { useState } from "react";

const contactInfo = [
  {
    label: "Email",
    value: "johndoe@email.com",
    href: "mailto:johndoe@email.com",
  },
  {
    label: "Location",
    value: "New York, USA",
    href: null,
  },
  {
    label: "GitHub",
    value: "github.com/johndoe",
    href: "https://github.com/johndoe",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/johndoe",
    href: "https://linkedin.com/in/johndoe",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            Have a project in mind or just want to say hi?
            My inbox is always open — I'll get back to you as soon as possible!
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left — Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">
              Contact Information
            </h3>
            <ul className="space-y-5">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="text-primary font-semibold w-24 shrink-0">
                    {item.label}
                  </span>
                  {item.href ? (
                    
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-primary transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-slate-400">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Availability Card */}
            <div className="mt-8 bg-darkCard border border-primary/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white font-semibold">
                  Available for Freelance
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                I'm currently open to freelance projects and full-time opportunities.
                Let's build something great together!
              </p>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-darkCard border border-white/10 rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div c