import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input className="w-full px-3 py-2 border rounded-lg" type="text" id="name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 border rounded-lg" type="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea className="w-full px-3 py-2 border rounded-lg" id="message" rows="4"></textarea>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
