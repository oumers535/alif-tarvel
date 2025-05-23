import React from 'react'

const Contact = () => {
  return (
          <section
            id="contact"
            className="max-w-4xl mx-auto px-6 py-20"
          >
            <h2 data-aos='zoom-in' className="text-4xl font-extrabold mb-6 text-center">Contact Us</h2>
            <form data-aos='fade-up' className="max-w-xl mx-auto space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-700 font-serif text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
                  placeholder="Your Name"
                />
                </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 font-serif rounded-md bg-gray-700 text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 font-serif rounded-md bg-gray-700 text-white border border-gray-600 focus:border-teal-400 focus:outline-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-teal-500  text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-600 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </section>
        );
      }

export default Contact