"use client"


import React, { useState } from 'react'
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu';
import SectionHeader from '../ui/SectionHeader';
import toast from "react-hot-toast";

const contactInfo = [
  {
    icon: LuMail,
    label: "Email",
    value: "manimani64976@gmail.com",
    href: "mailto:manimani64976@gmail.com",
  },
  {
    icon: LuPhone,
    label: "Phone",
    value: "+91 9876543210",
    href: "tel:+919876543210",
  },
  {
    icon: LuMapPin,
    label: "Location",
    value: "Tamil Nadu, India",
    href: "#",
  },
];
const Contact = () => {
     const [loading,setLoading] = useState(false)
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    toast.error("Please fill in all fields.");
    return;
  }

  setLoading(true);

  formData.append(
    "access_key",
    "a5be73f6-ee8f-4a67-9721-1a976760f257"
  );

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok && data.success) {
      toast.success("Message sent successfully!");
      form.reset();
    } else {
      toast.error(data.message || "Failed to send message.");
    }
  } catch (error) {
    toast.error("Something went wrong.");
  } finally {
    setLoading(false);
  }
};
  return (
     <section id="contact" className="relative py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="w-[90%] z-10  max-w-6xl  relative  mx-auto space-y-16">

        <SectionHeader
          title="Let's build"
          highlight="something great"
          badge="Contact"
          description="Have a project in mind? I'd love to hear about it. Let's connect."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Form */}
          <form data-aos="fade-right" data-aos-delay="100" data-aos-anchor-placement="top-center" onSubmit={onSubmit} className="rounded-2xl border border-border bg-surface p-6 space-y-5">

            <input
            name="name"
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-border bg-background p-3 outline-none"
            />

            <input
            name="email"
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-border bg-background p-3 outline-none"
            />

            <textarea
            name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full rounded-lg border border-border bg-background p-3 outline-none"
            />

           <button
  type="submit"
  disabled={loading}
  className="w-full rounded-lg bg-primary px-6 py-3 text-white flex items-center justify-center gap-2"
>
  {loading ? (
    <>
      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
      <span>Sending message...</span>
    </>
  ) : (
    "Send Message"
  )}
</button>

          </form>

          {/* Right Contact Info */}
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="100" data-aos-anchor-placement="top-center">

            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition hover:border-primary"
                >
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Icon className="text-primary text-xl" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <h3 className="font-medium">{item.value}</h3>
                  </div>
                </a>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact
