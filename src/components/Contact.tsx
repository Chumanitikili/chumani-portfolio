
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ctikili@gmail.com",
      link: "mailto:ctikili@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+27 794 520 973",
      link: "tel:+27794520973",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cape Town, South Africa",
      link: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Chumanitikili",
      link: "https://github.com/Chumanitikili",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/chumani-d-tikili",
      link: "https://linkedin.com/in/chumani-d-tikili",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-black/90 transition-colors">
      <div className="section-padding">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="h-1 w-20 bg-capetown-blue dark:bg-matrix-green mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Interested in discussing automation solutions, cloud infrastructure, or potential opportunities? 
            I'd love to connect and explore how my skills can help drive your technical initiatives.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <div className="md:w-2/5">
            <div className="bg-white dark:bg-gray-900/30 p-6 md:p-8 rounded-lg shadow-md dark:shadow-[0_0_15px_rgba(0,255,0,0.05)] matrix-border">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-3 rounded-full bg-blue-50 dark:bg-matrix-green/10 text-capetown-blue dark:text-matrix-green mr-4">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 dark:text-gray-400">{info.label}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          target={info.label === "Email" || info.label === "Phone" ? "_self" : "_blank"}
                          rel="noopener noreferrer"
                          className="text-gray-800 dark:text-gray-300 hover:text-capetown-blue dark:hover:text-matrix-green transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 dark:text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Connect With Me</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Let's discuss how my automation expertise can enhance your tech operations.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Chumanitikili"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/chumani-d-tikili"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="mailto:ctikili@gmail.com"
                    className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:w-3/5">
            <form className="bg-white dark:bg-gray-900/30 p-6 md:p-8 rounded-lg shadow-md dark:shadow-[0_0_15px_rgba(0,255,0,0.05)] matrix-border">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Send Me a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-capetown-blue dark:focus:ring-matrix-green dark:bg-gray-800 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-capetown-blue dark:focus:ring-matrix-green dark:bg-gray-800 dark:text-white"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-capetown-blue dark:focus:ring-matrix-green dark:bg-gray-800 dark:text-white"
                  placeholder="Subject of your message"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-capetown-blue dark:focus:ring-matrix-green dark:bg-gray-800 dark:text-white"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="inline-flex items-center px-6 py-3 bg-capetown-blue dark:bg-matrix-green/90 text-white dark:text-black rounded-md shadow hover:bg-capetown-darkblue dark:hover:bg-matrix-green transition-colors"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
